import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AuthService } from '../services/auth.service';
import { LiteratureService } from '../services/literature.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-literature',
  templateUrl: './literature.component.html',
  styleUrls: ['./literature.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, Ng2SmartTableModule]
})
export class LiteratureComponent implements OnInit {
  allEntries: any[] = [];
  filteredEntries: any[] = [];
  activeFilter: 'all' | 'research' | 'educational' = 'all';

  newEntry = { title: '', desc: '', url: '', category: 'research' };

  tableSettings: any = {
    actions: { add: false, edit: false, delete: false, columnTitle: '' },
    attr: { class: 'table' },
    pager: { display: true, perPage: 10 },
    columns: {
      title: { title: 'כותרת' },
      desc: { title: 'תיאור' },
      url: { title: 'קישור', type: 'html' },
      categoryLabel: { title: 'קטגוריה' }
    }
  };

  tableSettingsAdmin: any = {
    delete: { confirmDelete: true },
    add: false,
    edit: false,
    attr: { class: 'table' },
    pager: { display: true, perPage: 10 },
    columns: {
      title: { title: 'כותרת' },
      desc: { title: 'תיאור' },
      url: { title: 'קישור', type: 'html' },
      categoryLabel: { title: 'קטגוריה' }
    }
  };

  constructor(
    private literatureService: LiteratureService,
    private toastr: ToastrService,
    public auth_service: AuthService
  ) {}

  ngOnInit() {
    this.loadEntries();
  }

  loadEntries() {
    this.literatureService.getAll().subscribe(res => {
      if (!res.success) {
        this.toastr.error(res.msg);
      } else {
        this.allEntries = res.entries.map((e: any) => ({
          ...e,
          url: `<a href='${e.url}' target='_blank'>${e.title}</a>`,
          categoryLabel: e.category === 'research' ? 'ספרות מחקרית' : 'ספרות לימודית'
        }));
        this.applyFilter();
      }
    });
  }

  setFilter(filter: 'all' | 'research' | 'educational') {
    this.activeFilter = filter;
    this.applyFilter();
  }

  applyFilter() {
    if (this.activeFilter === 'all') {
      this.filteredEntries = [...this.allEntries];
    } else {
      this.filteredEntries = this.allEntries.filter(e => e.category === this.activeFilter);
    }
  }

  addEntry() {
    if (!this.newEntry.title || !this.newEntry.url || !this.newEntry.category) {
      this.toastr.error('נא למלא כותרת, קישור וקטגוריה');
      return;
    }
    this.literatureService.addEntry(this.newEntry).subscribe(res => {
      if (!res.success) {
        this.toastr.error(res.msg);
      } else {
        this.toastr.success('הרשומה נוספה בהצלחה');
        this.newEntry = { title: '', desc: '', url: '', category: 'research' };
        this.loadEntries();
      }
    });
  }

  onDeleteConfirm(event: any) {
    if (window.confirm('האם אתה בטוח שברצונך למחוק?')) {
      const id = event.data._id;
      this.literatureService.deleteEntry(id).subscribe(res => {
        if (res.success) {
          this.toastr.success('הרשומה נמחקה בהצלחה');
          event.confirm.resolve();
          this.loadEntries();
        } else {
          this.toastr.error(res.msg);
          event.confirm.reject();
        }
      });
    } else {
      event.confirm.reject();
    }
  }
}
