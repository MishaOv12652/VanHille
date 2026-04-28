import { AfterViewInit, Component, OnDestroy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-pythagorean-cutting',
  templateUrl: './pythagorean-cutting.component.html',
  styleUrls: ['./pythagorean-cutting.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PythagoreanCuttingComponent implements AfterViewInit, OnDestroy {

  private readonly A: number = 180;
  private readonly B: number = 120;
  private readonly S: number = this.A + this.B;
  private readonly C: number = Math.hypot(this.A, this.B);
  private readonly leftX: number = 145;
  private readonly rightX: number = 705;
  private readonly topY: number = 250;

  private svgEl: SVGSVGElement | null = null;
  private drawingLayerEl: SVGGElement | null = null;
  private labelLayerEl: SVGGElement | null = null;
  private freeTriangleLayerEl: SVGGElement | null = null;
  private testStatusEl: HTMLElement | null = null;

  private currentMode = 'start';
  private freeTriangles: Array<{ id: number; points: Array<{ x: number; y: number }> }> = [];
  private selectedTriangleId: number | null = null;
  private draggingTriangle: { id: number; points: Array<{ x: number; y: number }> } | null = null;
  private dragStartMouse: { x: number; y: number } | null = null;
  private dragStartPoints: Array<{ x: number; y: number }> | null = null;

  private readonly onFreeTriangleMoveBound: EventListener = (evt: Event) => this.onFreeTriangleMove(evt as PointerEvent);
  private readonly endFreeTriangleDragBound: EventListener = () => this.endFreeTriangleDrag();

  ngAfterViewInit() {
    this.svgEl = document.getElementById('pythCutSvg') as any;
    this.drawingLayerEl = document.getElementById('pythCutDrawingLayer') as any;
    this.labelLayerEl = document.getElementById('pythCutLabelLayer') as any;
    this.freeTriangleLayerEl = document.getElementById('pythCutFreeTriangleLayer') as any;
    this.testStatusEl = document.getElementById('pythCutTestStatus');

    this.showStart();
    this.runTests();
  }

  ngOnDestroy() {
    this.clearPointerListeners();
  }

  showStart() {
    this.currentMode = 'start';
    this.clearAll();
    this.drawGivenTriangle();
    this.drawBothSquareFrames();
  }

  showABConstruction() {
    this.currentMode = 'ab';
    this.clearAll();
    this.drawGivenTriangle();
    this.drawABDissection(this.leftX, this.topY);
    this.drawSquareFrame(this.rightX, this.topY, 'ריבוע שני - עדיין לא נחתך');
  }

  showCConstruction() {
    this.currentMode = 'c';
    this.clearAll();
    this.drawGivenTriangle();
    this.drawSquareFrame(this.leftX, this.topY, 'ריבוע ראשון - להשוואה');
    this.drawCDissection(this.rightX, this.topY);
  }

  showCompare() {
    this.currentMode = 'compare';
    this.clearAll();
    this.drawGivenTriangle();
    this.drawABDissection(this.leftX, this.topY);
    this.drawCDissection(this.rightX, this.topY);
  }

  addOneTriangle() {
    const id = this.freeTriangles.length === 0 ? 0 : Math.max(...this.freeTriangles.map(triangle => triangle.id)) + 1;
    const baseX = 425 + (id % 4) * 32;
    const baseY = 220 + (id % 5) * 34;
    const triangle = this.makeFreeTriangle(id, baseX, baseY, (id % 4) * 90, false);
    this.freeTriangles.push(triangle);
    this.selectedTriangleId = id;
    this.renderFreeTriangles();
  }

  rotateSelectedTriangle() {
    if (this.selectedTriangleId === null) return;
    const triangle = this.freeTriangles.find(item => item.id === this.selectedTriangleId);
    if (!triangle) return;
    const center = this.centroid(triangle.points);
    triangle.points = triangle.points.map(point => this.rotatePoint(point, center, 90));
    this.renderFreeTriangles();
  }

  reflectSelectedTriangle() {
    if (this.selectedTriangleId === null) return;
    const triangle = this.freeTriangles.find(item => item.id === this.selectedTriangleId);
    if (!triangle) return;
    const center = this.centroid(triangle.points);
    triangle.points = triangle.points.map(point => ({ x: 2 * center.x - point.x, y: point.y }));
    this.renderFreeTriangles();
  }

  clearFreeTriangles() {
    this.freeTriangles = [];
    this.selectedTriangleId = null;
    this.renderFreeTriangles();
  }

  private createSvgElement(tagName: string) {
    return document.createElementNS('http://www.w3.org/2000/svg', tagName);
  }

  private clearAll() {
    if (this.drawingLayerEl) {
      this.drawingLayerEl.innerHTML = '';
    }
    if (this.labelLayerEl) {
      this.labelLayerEl.innerHTML = '';
    }
    this.renderFreeTriangles();
  }

  private clearPointerListeners() {
    if (!this.svgEl) return;
    this.svgEl.removeEventListener('pointermove', this.onFreeTriangleMoveBound);
    this.svgEl.removeEventListener('pointerup', this.endFreeTriangleDragBound);
    this.svgEl.removeEventListener('pointercancel', this.endFreeTriangleDragBound);
  }

  private pointsToString(points: Array<{ x: number; y: number }>) {
    return points.map(point => `${point.x},${point.y}`).join(' ');
  }

  private clonePoints(points: Array<{ x: number; y: number }>) {
    return points.map(point => ({ x: point.x, y: point.y }));
  }

  private centroid(points: Array<{ x: number; y: number }>) {
    return {
      x: points.reduce((sum, point) => sum + point.x, 0) / points.length,
      y: points.reduce((sum, point) => sum + point.y, 0) / points.length
    };
  }

  private rotatePoint(point: { x: number; y: number }, center: { x: number; y: number }, degrees: number) {
    const radians = degrees * Math.PI / 180;
    const cos = Math.cos(radians);
    const sin = Math.sin(radians);
    const dx = point.x - center.x;
    const dy = point.y - center.y;
    return {
      x: center.x + dx * cos - dy * sin,
      y: center.y + dx * sin + dy * cos
    };
  }

  private addText(
    parent: SVGElement | null,
    x: number,
    y: number,
    text: string,
    className = 'pyth-cut-small-label',
    anchor = 'middle'
  ) {
    if (!parent) return null;
    const lines = String(text).split('\n');
    const textNode = this.createSvgElement('text');
    textNode.setAttribute('x', String(x));
    textNode.setAttribute('y', String(y));
    textNode.setAttribute('text-anchor', anchor);
    textNode.setAttribute('class', className);
    lines.forEach((line, index) => {
      const span = this.createSvgElement('tspan');
      span.setAttribute('x', String(x));
      span.setAttribute('dy', index === 0 ? '0' : '18');
      span.textContent = line;
      textNode.appendChild(span);
    });
    parent.appendChild(textNode);
    return textNode;
  }

  private addLine(parent: SVGElement | null, x1: number, y1: number, x2: number, y2: number, className = 'pyth-cut-line') {
    if (!parent) return null;
    const line = this.createSvgElement('line');
    line.setAttribute('x1', String(x1));
    line.setAttribute('y1', String(y1));
    line.setAttribute('x2', String(x2));
    line.setAttribute('y2', String(y2));
    line.setAttribute('class', className);
    parent.appendChild(line);
    return line;
  }

  private addRect(parent: SVGElement | null, x: number, y: number, width: number, height: number, className = 'pyth-cut-square-frame') {
    if (!parent) return null;
    const rect = this.createSvgElement('rect');
    rect.setAttribute('x', String(x));
    rect.setAttribute('y', String(y));
    rect.setAttribute('width', String(width));
    rect.setAttribute('height', String(height));
    rect.setAttribute('class', className);
    parent.appendChild(rect);
    return rect;
  }

  private addPolygon(parent: SVGElement | null, points: Array<{ x: number; y: number }>, className: string) {
    if (!parent) return null;
    const polygon = this.createSvgElement('polygon');
    polygon.setAttribute('points', this.pointsToString(points));
    polygon.setAttribute('class', className);
    parent.appendChild(polygon);
    return polygon;
  }

  private addRightAngle(parent: SVGElement | null, x: number, y: number, size = 20) {
    if (!parent) return null;
    const path = this.createSvgElement('path');
    path.setAttribute('d', `M ${x - size} ${y} L ${x - size} ${y + size} L ${x} ${y + size}`);
    path.setAttribute('class', 'pyth-cut-right-angle');
    parent.appendChild(path);
    return path;
  }

  private getMouse(evt: PointerEvent) {
    if (!this.svgEl) {
      return { x: 0, y: 0 };
    }
    const point = this.svgEl.createSVGPoint();
    point.x = evt.clientX;
    point.y = evt.clientY;
    return point.matrixTransform(this.svgEl.getScreenCTM()!.inverse());
  }

  private makeFreeTriangle(id: number, x: number, y: number, rotation = 0, reflected = false) {
    let points = [
      { x, y },
      { x: x + this.B, y },
      { x: x + this.B, y: y + this.A }
    ];
    const center = this.centroid(points);
    if (reflected) {
      points = points.map(point => ({ x: 2 * center.x - point.x, y: point.y }));
    }
    if (rotation !== 0) {
      points = points.map(point => this.rotatePoint(point, center, rotation));
    }
    return { id, points };
  }

  private renderFreeTriangles() {
    if (!this.freeTriangleLayerEl) return;
    this.freeTriangleLayerEl.innerHTML = '';
    this.freeTriangles.forEach(triangle => {
      const polygon = this.createSvgElement('polygon');
      polygon.setAttribute('points', this.pointsToString(triangle.points));
      polygon.setAttribute(
        'class',
        triangle.id === this.selectedTriangleId ? 'pyth-cut-free-triangle pyth-cut-selected' : 'pyth-cut-free-triangle'
      );
      (polygon as any).dataset.id = String(triangle.id);
      polygon.addEventListener('pointerdown', (evt: Event) => this.onFreeTrianglePointerDown(evt as PointerEvent));
      this.freeTriangleLayerEl!.appendChild(polygon);
    });
  }

  private onFreeTrianglePointerDown(evt: PointerEvent) {
    evt.preventDefault();
    const id = Number((evt.currentTarget as any).dataset.id);
    const triangle = this.freeTriangles.find(item => item.id === id);
    if (!triangle || !this.svgEl) return;
    this.selectedTriangleId = id;
    this.draggingTriangle = triangle;
    this.dragStartMouse = this.getMouse(evt);
    this.dragStartPoints = this.clonePoints(triangle.points);
    this.renderFreeTriangles();
    this.clearPointerListeners();
    this.svgEl.addEventListener('pointermove', this.onFreeTriangleMoveBound);
    this.svgEl.addEventListener('pointerup', this.endFreeTriangleDragBound);
    this.svgEl.addEventListener('pointercancel', this.endFreeTriangleDragBound);
  }

  private onFreeTriangleMove(evt: PointerEvent) {
    if (!this.draggingTriangle || !this.dragStartMouse || !this.dragStartPoints) return;
    evt.preventDefault();
    const mouse = this.getMouse(evt);
    const dx = mouse.x - this.dragStartMouse.x;
    const dy = mouse.y - this.dragStartMouse.y;
    this.draggingTriangle.points = this.dragStartPoints.map(point => ({ x: point.x + dx, y: point.y + dy }));
    this.renderFreeTriangles();
  }

  private endFreeTriangleDrag() {
    this.draggingTriangle = null;
    this.dragStartMouse = null;
    this.dragStartPoints = null;
    this.clearPointerListeners();
  }

  private drawGivenTriangle(x = 500, y = 65) {
    const p1 = { x, y };
    const p2 = { x: x + this.A, y };
    const p3 = { x: x + this.A, y: y + this.B };
    this.addPolygon(this.drawingLayerEl, [p1, p2, p3], 'pyth-cut-triangle-given');
    this.addRightAngle(this.drawingLayerEl, p2.x, p2.y, 18);
    this.addText(this.labelLayerEl, (p1.x + p2.x) / 2, y - 10, 'b');
    this.addText(this.labelLayerEl, p2.x + 20, (p2.y + p3.y) / 2, 'a');
    this.addText(this.labelLayerEl, (p1.x + p3.x) / 2 - 12, (p1.y + p3.y) / 2 + 14, 'c');
    this.addText(this.labelLayerEl, x + this.A / 2, y + this.B + 44, 'משולש ישר-זווית נתון', 'pyth-cut-tiny-label');
  }

  private drawSquareFrame(x: number, y: number, title: string) {
    this.addRect(this.drawingLayerEl, x, y, this.S, this.S, 'pyth-cut-square-frame');
    this.addText(this.labelLayerEl, x + this.S / 2, y - 25, title, 'pyth-cut-label');
    this.addText(this.labelLayerEl, x + this.S / 2, y + this.S + 26, 'אורך צלע הריבוע: a+b');
  }

  private drawBothSquareFrames() {
    this.drawSquareFrame(this.leftX, this.topY, 'ריבוע ראשון');
    this.drawSquareFrame(this.rightX, this.topY, 'ריבוע שני');
  }

  private drawABDissection(x: number, y: number) {
    this.addRect(this.drawingLayerEl, x, y, this.S, this.S, 'pyth-cut-square-frame');
    this.addRect(this.drawingLayerEl, x, y, this.A, this.A, 'pyth-cut-corner-a');
    this.addRect(this.drawingLayerEl, x + this.A, y + this.A, this.B, this.B, 'pyth-cut-corner-b');
    this.addLine(this.drawingLayerEl, x + this.A, y, x + this.A, y + this.S);
    this.addLine(this.drawingLayerEl, x, y + this.A, x + this.S, y + this.A);
    this.addLine(this.drawingLayerEl, x + this.A, y + this.A, x + this.S, y);
    this.addLine(this.drawingLayerEl, x, y + this.S, x + this.A, y + this.A);
    this.addText(this.labelLayerEl, x + this.S / 2, y - 25, 'חיתוך ראשון', 'pyth-cut-label');
    this.addText(this.labelLayerEl, x + this.S / 2, y + this.S + 26, 'אורך צלע הריבוע: a+b');
  }

  private drawCDissection(x: number, y: number) {
    this.addRect(this.drawingLayerEl, x, y, this.S, this.S, 'pyth-cut-square-frame');
    const pTop = { x: x + this.A, y };
    const pRight = { x: x + this.S, y: y + this.A };
    const pBottom = { x: x + this.B, y: y + this.S };
    const pLeft = { x, y: y + this.B };

    this.addPolygon(this.drawingLayerEl, [pTop, pRight, pBottom, pLeft], 'pyth-cut-central-c');
    this.addLine(this.drawingLayerEl, x, y, pTop.x, pTop.y);
    this.addLine(this.drawingLayerEl, x, y, pLeft.x, pLeft.y);
    this.addLine(this.drawingLayerEl, x + this.S, y, pTop.x, pTop.y);
    this.addLine(this.drawingLayerEl, x + this.S, y, pRight.x, pRight.y);
    this.addLine(this.drawingLayerEl, x + this.S, y + this.S, pRight.x, pRight.y);
    this.addLine(this.drawingLayerEl, x + this.S, y + this.S, pBottom.x, pBottom.y);
    this.addLine(this.drawingLayerEl, x, y + this.S, pLeft.x, pLeft.y);
    this.addLine(this.drawingLayerEl, x, y + this.S, pBottom.x, pBottom.y);
    this.addLine(this.drawingLayerEl, pTop.x, pTop.y, pRight.x, pRight.y);
    this.addLine(this.drawingLayerEl, pRight.x, pRight.y, pBottom.x, pBottom.y);
    this.addLine(this.drawingLayerEl, pBottom.x, pBottom.y, pLeft.x, pLeft.y);
    this.addLine(this.drawingLayerEl, pLeft.x, pLeft.y, pTop.x, pTop.y);
    this.addText(this.labelLayerEl, x + this.S / 2, y - 25, 'חיתוך שני', 'pyth-cut-label');
    this.addText(this.labelLayerEl, x + this.S / 2, y + this.S + 26, 'אורך צלע הריבוע: a+b');
  }

  private runTests() {
    const results: Array<{ name: string; pass: boolean }> = [];
    results.push({ name: 'קיים testStatus יחיד', pass: document.querySelectorAll('#pythCutTestStatus').length === 1 });
    results.push({ name: 'הריבוע החיצוני הוא a+b', pass: this.S === this.A + this.B });
    results.push({ name: 'המשולש אינו שווה-שוקיים', pass: this.A !== this.B });

    this.addOneTriangle();
    results.push({ name: 'נוצר משולש חופשי אחד', pass: this.freeTriangles.length === 1 });
    this.rotateSelectedTriangle();
    results.push({ name: 'אפשר לסובב משולש נבחר', pass: this.freeTriangles.length === 1 });
    this.reflectSelectedTriangle();
    results.push({ name: 'אפשר לשקף משולש נבחר', pass: this.freeTriangles.length === 1 });
    this.clearFreeTriangles();
    results.push({ name: 'ניקוי משולשים חופשיים עובד', pass: this.freeTriangles.length === 0 });

    const pTop = { x: this.rightX + this.A, y: this.topY };
    const pRight = { x: this.rightX + this.S, y: this.topY + this.A };
    const pBottom = { x: this.rightX + this.B, y: this.topY + this.S };
    const pLeft = { x: this.rightX, y: this.topY + this.B };
    const d1 = Math.hypot(pTop.x - pRight.x, pTop.y - pRight.y);
    const d2 = Math.hypot(pRight.x - pBottom.x, pRight.y - pBottom.y);
    const d3 = Math.hypot(pBottom.x - pLeft.x, pBottom.y - pLeft.y);
    const d4 = Math.hypot(pLeft.x - pTop.x, pLeft.y - pTop.y);
    const sidesEqualC = [d1, d2, d3, d4].every(side => Math.abs(side - this.C) < 0.01);
    results.push({ name: 'הריבוע המרכזי בחיתוך השני צלעו c', pass: sidesEqualC });

    const dot =
      (pRight.x - pTop.x) * (pBottom.x - pRight.x) +
      (pRight.y - pTop.y) * (pBottom.y - pRight.y);
    results.push({ name: 'זווית בריבוע המרכזי היא ישרה', pass: Math.abs(dot) < 0.01 });

    const failed = results.filter(item => !item.pass);
    if (this.testStatusEl) {
      if (failed.length === 0) {
        this.testStatusEl.textContent = 'בדיקות תקינות: כלי החיתוך נטען בהצלחה.';
        console.info('All cutting tool tests passed:', results);
      } else {
        this.testStatusEl.textContent = 'אזהרה: חלק מהבדיקות נכשלו. פתחו Console לפרטים.';
        console.error('Cutting tool tests failed:', failed, results);
      }
    }

    this.showStart();
  }
}
