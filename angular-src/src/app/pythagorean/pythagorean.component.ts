import { Component, AfterViewInit, OnDestroy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-pythagorean',
  templateUrl: './pythagorean.component.html',
  styleUrls: ['./pythagorean.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PythagoreanComponent implements AfterViewInit, OnDestroy {

  private readonly A = 180;
  private readonly B = 120;
  private readonly S = 300;
  private readonly colors = [
    '#fca5a5', '#93c5fd', '#86efac', '#fde68a',
    '#fca5a5', '#93c5fd', '#86efac', '#fde68a'
  ];

  private svgEl: any = null;
  private groupEl: any = null;
  private rotationButtonEl: HTMLElement | null = null;
  private testStatusEl: HTMLElement | null = null;

  private selected: number | null = null;
  private dragging: any = null;
  private rotating: any = null;
  private rotationMode = false;
  private dragStartMouse: { x: number; y: number } | null = null;
  private dragStartPoints: { x: number; y: number }[] | null = null;
  private rotateCenter: { x: number; y: number } | null = null;
  private rotateStartAngle = 0;
  private rotateStartPoints: { x: number; y: number }[] | null = null;

  private tris: any[] = [];

  private onPointerDownBound: EventListener = (evt: Event) => this.onPointerDown(evt as PointerEvent);
  private onDragMoveBound: EventListener = (evt: Event) => this.onDragMove(evt as PointerEvent);
  private onRotateMoveBound: EventListener = (evt: Event) => this.onRotateMove(evt as PointerEvent);
  private endDragBound: EventListener = () => this.endDrag();
  private endRotationBound: EventListener = () => this.endRotation();

  ngAfterViewInit() {
    this.svgEl = document.getElementById('pythSvg');
    this.groupEl = document.getElementById('pythTriangles');
    this.rotationButtonEl = document.getElementById('pythRotationButton');
    this.testStatusEl = document.getElementById('pythTestStatus');
    this.runTests();
    const leftOuter = document.getElementById('pythLeftOuter');
    const rightOuter = document.getElementById('pythRightOuter');
    const outerToggle = document.getElementById('pythOuterToggle');
    if (leftOuter) leftOuter.style.display = 'none';
    if (rightOuter) rightOuter.style.display = 'none';
    if (outerToggle) outerToggle.textContent = 'הצג ריבועים חיצוניים';
  }

  ngOnDestroy() {
    this.clearPointerListeners();
  }

  private clonePoints(points: { x: number; y: number }[]) {
    return points.map(p => ({ x: p.x, y: p.y }));
  }

  private makeTri(id: number, points: { x: number; y: number }[]) {
    return { id, points: this.clonePoints(points) };
  }

  private centroid(points: { x: number; y: number }[]) {
    return {
      x: (points[0].x + points[1].x + points[2].x) / 3,
      y: (points[0].y + points[1].y + points[2].y) / 3
    };
  }

  private dist(p: { x: number; y: number }, q: { x: number; y: number }) {
    return Math.hypot(p.x - q.x, p.y - q.y);
  }

  private rotatePoint(p: { x: number; y: number }, center: { x: number; y: number }, degrees: number) {
    const rad = degrees * Math.PI / 180;
    const cos = Math.cos(rad);
    const sin = Math.sin(rad);
    const dx = p.x - center.x;
    const dy = p.y - center.y;
    return {
      x: center.x + dx * cos - dy * sin,
      y: center.y + dx * sin + dy * cos
    };
  }

  private pointsToString(points: { x: number; y: number }[]) {
    return points.map(p => `${p.x},${p.y}`).join(' ');
  }

  private setTriangles(list: any[]) {
    this.tris.length = 0;
    list.forEach(item => this.tris.push(this.makeTri(item.id, item.points)));
    this.selected = null;
    this.render();
  }

  private render() {
    if (!this.groupEl) return;
    this.groupEl.innerHTML = '';
    this.tris.forEach(t => {
      const polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
      polygon.setAttribute('points', this.pointsToString(t.points));
      polygon.setAttribute('class', this.selected === t.id ? 'pyth-tri pyth-selected' : 'pyth-tri');
      polygon.setAttribute('fill', this.colors[t.id % this.colors.length]);
      (polygon as any).dataset.id = String(t.id);
      polygon.addEventListener('pointerdown', this.onPointerDownBound);
      this.groupEl.appendChild(polygon);
    });
  }

  private getMouse(evt: PointerEvent): { x: number; y: number } {
    const point = this.svgEl.createSVGPoint();
    point.x = evt.clientX;
    point.y = evt.clientY;
    return point.matrixTransform(this.svgEl.getScreenCTM().inverse());
  }

  private onPointerDown(evt: PointerEvent) {
    evt.preventDefault();
    const id = Number((evt.currentTarget as any).dataset.id);
    const triangle = this.tris.find(item => item.id === id);
    if (!triangle) return;
    this.selected = id;
    this.render();
    if (this.rotationMode || evt.shiftKey) {
      this.startRotation(evt, triangle);
    } else {
      this.startDrag(evt, triangle);
    }
  }

  private clearPointerListeners() {
    if (!this.svgEl) return;
    this.svgEl.removeEventListener('pointermove', this.onDragMoveBound);
    this.svgEl.removeEventListener('pointermove', this.onRotateMoveBound);
    this.svgEl.removeEventListener('pointerup', this.endDragBound);
    this.svgEl.removeEventListener('pointerup', this.endRotationBound);
    this.svgEl.removeEventListener('pointercancel', this.endDragBound);
    this.svgEl.removeEventListener('pointercancel', this.endRotationBound);
  }

  private startDrag(evt: PointerEvent, triangle: any) {
    this.clearPointerListeners();
    this.dragging = triangle;
    this.rotating = null;
    this.dragStartMouse = this.getMouse(evt);
    this.dragStartPoints = this.clonePoints(triangle.points);
    this.svgEl.addEventListener('pointermove', this.onDragMoveBound);
    this.svgEl.addEventListener('pointerup', this.endDragBound);
    this.svgEl.addEventListener('pointercancel', this.endDragBound);
  }

  private onDragMove(evt: PointerEvent) {
    if (!this.dragging || !this.dragStartMouse || !this.dragStartPoints) return;
    evt.preventDefault();
    const mouse = this.getMouse(evt);
    const dx = mouse.x - this.dragStartMouse.x;
    const dy = mouse.y - this.dragStartMouse.y;
    this.dragging.points = this.dragStartPoints.map(p => ({ x: p.x + dx, y: p.y + dy }));
    this.render();
  }

  private endDrag() {
    this.dragging = null;
    this.dragStartMouse = null;
    this.dragStartPoints = null;
    this.clearPointerListeners();
  }

  private startRotation(evt: PointerEvent, triangle: any) {
    this.clearPointerListeners();
    this.rotating = triangle;
    this.dragging = null;
    this.rotateCenter = this.centroid(triangle.points);
    this.rotateStartPoints = this.clonePoints(triangle.points);
    const mouse = this.getMouse(evt);
    this.rotateStartAngle = Math.atan2(
      mouse.y - this.rotateCenter.y,
      mouse.x - this.rotateCenter.x
    ) * 180 / Math.PI;
    this.svgEl.addEventListener('pointermove', this.onRotateMoveBound);
    this.svgEl.addEventListener('pointerup', this.endRotationBound);
    this.svgEl.addEventListener('pointercancel', this.endRotationBound);
  }

  private onRotateMove(evt: PointerEvent) {
    if (!this.rotating || !this.rotateCenter || !this.rotateStartPoints) return;
    evt.preventDefault();
    const mouse = this.getMouse(evt);
    const currentAngle = Math.atan2(
      mouse.y - this.rotateCenter.y,
      mouse.x - this.rotateCenter.x
    ) * 180 / Math.PI;
    const delta = currentAngle - this.rotateStartAngle;
    this.rotating.points = this.rotateStartPoints.map(p => this.rotatePoint(p, this.rotateCenter!, delta));
    this.render();
  }

  private endRotation() {
    this.rotating = null;
    this.rotateCenter = null;
    this.rotateStartPoints = null;
    this.clearPointerListeners();
    if (this.rotationMode) {
      this.rotationMode = false;
      if (this.rotationButtonEl) {
        this.rotationButtonEl.textContent = 'מצב סיבוב חופשי: כבוי';
        this.rotationButtonEl.style.background = '#059669';
      }
    }
  }

  rotateSelected90() {
    if (this.selected === null) return;
    const triangle = this.tris.find(item => item.id === this.selected);
    if (!triangle) return;
    const c = this.centroid(triangle.points);
    triangle.points = triangle.points.map((p: any) => this.rotatePoint(p, c, 90));
    this.render();
  }

  toggleRotationMode() {
    this.rotationMode = !this.rotationMode;
    if (this.rotationButtonEl) {
      this.rotationButtonEl.textContent = this.rotationMode
        ? 'מצב סיבוב חופשי: פעיל'
        : 'מצב סיבוב חופשי: כבוי';
      this.rotationButtonEl.style.background = this.rotationMode ? '#dc2626' : '#059669';
    }
  }

  private trianglesForSquare(x: number, y: number, startId: number) {
    const { A, B, S } = this;
    return [
      { id: startId + 0, points: [{ x, y }, { x: x + A, y }, { x, y: y + B }] },
      { id: startId + 1, points: [{ x: x + S, y }, { x: x + A, y }, { x: x + S, y: y + A }] },
      { id: startId + 2, points: [{ x: x + S, y: y + S }, { x: x + S, y: y + A }, { x: x + B, y: y + S }] },
      { id: startId + 3, points: [{ x, y: y + S }, { x: x + B, y: y + S }, { x, y: y + B }] }
    ];
  }

  private hideAllTargets() {
    ['pythCSquare', 'pythASquare', 'pythBSquare', 'pythCLabel', 'pythALabel', 'pythBLabel'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.style.display = 'none';
    });
  }

  freeLayout() {
    this.hideAllTargets();
    ['pythCSquare', 'pythCLabel', 'pythASquare', 'pythBSquare', 'pythALabel', 'pythBLabel'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.style.display = 'block';
    });

    const { A, B } = this;
    const base = Array.from({ length: 8 }, () => ([
      { x: 0, y: 0 },
      { x: A, y: 0 },
      { x: 0, y: B }
    ]));

    const positions = [
      { x: 420, y: 70 }, { x: 430, y: 210 }, { x: 420, y: 350 }, { x: 430, y: 490 },
      { x: 1020, y: 70 }, { x: 1010, y: 210 }, { x: 1020, y: 350 }, { x: 1010, y: 490 }
    ];

    const rotations = [0, 90, 180, 270, 0, 90, 180, 270];

    const list = base.map((pts, i) => {
      const shifted = pts.map(p => ({ x: p.x + positions[i].x, y: p.y + positions[i].y }));
      const c = this.centroid(shifted);
      return {
        id: i,
        points: shifted.map(p => this.rotatePoint(p, c, rotations[i]))
      };
    });

    this.setTriangles(list);
  }

  toggleOuterSquares() {
    const left = document.getElementById('pythLeftOuter');
    const right = document.getElementById('pythRightOuter');
    const btn = document.getElementById('pythOuterToggle');
    if (!left || !right || !btn) return;
    const isHidden = left.style.display === 'none';
    if (isHidden) {
      left.style.display = 'block';
      right.style.display = 'block';
      btn.textContent = 'הסתר ריבועים חיצוניים';
    } else {
      left.style.display = 'none';
      right.style.display = 'none';
      btn.textContent = 'הצג ריבועים חיצוניים';
    }
  }

  private runTests() {
    const results: any[] = [];
    const expectedHyp = Math.hypot(this.A, this.B);

    results.push({ name: 'קיים אלמנט testStatus יחיד', pass: document.querySelectorAll('#pythTestStatus').length === 1 });
    results.push({ name: 'המשולש אינו שווה־שוקיים', pass: this.A !== this.B });
    results.push({ name: 'הריבוע החיצוני בגודל a+b', pass: this.S === this.A + this.B });

    const sample = this.trianglesForSquare(80, 100, 0)[0].points;
    const sides = [
      this.dist(sample[0], sample[1]),
      this.dist(sample[0], sample[2]),
      this.dist(sample[1], sample[2])
    ].sort((m, n) => m - n);
    results.push({
      name: 'משולש לדוגמה בעל ניצבים a,b ויתר c',
      pass: Math.abs(sides[0] - this.B) < 0.01 &&
            Math.abs(sides[1] - this.A) < 0.01 &&
            Math.abs(sides[2] - expectedHyp) < 0.01
    });

    const cSq = [
      { x: 80 + this.A, y: 100 },
      { x: 80 + this.S, y: 100 + this.A },
      { x: 80 + this.B, y: 100 + this.S },
      { x: 80, y: 100 + this.B }
    ];
    const cSides = [
      this.dist(cSq[0], cSq[1]),
      this.dist(cSq[1], cSq[2]),
      this.dist(cSq[2], cSq[3]),
      this.dist(cSq[3], cSq[0])
    ];
    results.push({
      name: 'הריבוע הפנימי התיאורטי הוא ריבוע',
      pass: cSides.every(side => Math.abs(side - expectedHyp) < 0.01)
    });

    this.freeLayout();
    results.push({ name: 'מצב פתיחה כולל 8 משולשים בפיזור', pass: this.tris.length === 8 });

    const failed = results.filter(item => !item.pass);
    if (this.testStatusEl) {
      if (failed.length === 0) {
        this.testStatusEl.textContent = 'בדיקות תקינות: היישומון נטען בהצלחה.';
        console.info('All applet tests passed:', results);
      } else {
        this.testStatusEl.textContent = 'אזהרה: חלק מהבדיקות נכשלו. פתחו Console לפרטים.';
        console.error('Applet tests failed:', failed, results);
      }
    }
  }
}
