import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { IconComponent } from '../icon/icon.component';
import { PaginationShape, PaginationSize, PaginationVariant } from '../../adapters';

@Component({
  selector: 'core-pagination',
  standalone: true,
  imports: [CommonModule, NgbPaginationModule, IconComponent],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent {
  @Input() variant: PaginationVariant = 'primary';
  @Input() size: PaginationSize = '';
  @Input() shape: PaginationShape = 'circle';
  @Input() disabled: boolean = false;
  @Input() showStartEndPage: boolean = false;
  @Input() showNextLastPage: boolean = false;
  @Input() activePage: number = 0;
  @Input() perPage: number = 15;
  @Input() totalCount: number = 0;

  @Output() pageChange = new EventEmitter();

  public paginationClass!: string;

  public firstPage!: number;
  public lastPage!: number;

  public startCount!: number;
  public endCount!: number;

  public paginators: any = [];

  ngOnInit(): void {
    this.paginationClass = this.getPaginationClass();
    if (!this.totalCount) return;
    this.firstPage = 1;
    this.lastPage = Math.ceil(this.totalCount / this.perPage);
    this.paginators = this.getPager(this.totalCount, this.activePage, this.perPage);
    this.calculatePageCount();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const activePage = changes['activePage'];
    const totalCount = changes['totalCount'];
    if (
      (activePage && activePage.previousValue && activePage.previousValue !== parseInt(activePage.currentValue, 10)) ||
      (totalCount && totalCount.previousValue && totalCount.previousValue !== parseInt(totalCount.currentValue, 10))
      ) {
      this.ngOnInit();
    }
  }

  private getPaginationClass() {
    const baseClasses = ['pagination'];
    if (this.size) baseClasses.push(`pagination-${this.size}`);
    if (this.shape) baseClasses.push(`pagination-${this.shape}`);
    return baseClasses.join(' ');
  }


  private getPager(totalCount: number, activePage: number, perPage: number): any {
    const pages: number[] = [];

    if (totalCount < perPage) {
      return pages;
    }

    const NUM_PAGINATION_TABS = 5;
    const PAGE_DIFFERENCE = 2;
    
    let totalPages = Math.floor(totalCount / perPage);
    if (totalCount % perPage !== 0) {
      totalPages++;
    }
    activePage = parseInt(activePage.toString(), 10);
    let startPage = 1;
    let endPage = Math.min(totalPages, NUM_PAGINATION_TABS);

    if (activePage >= NUM_PAGINATION_TABS) {
      startPage = activePage - PAGE_DIFFERENCE;
      endPage = activePage + PAGE_DIFFERENCE;
    }

    if (endPage > totalPages) {
      startPage = Math.abs(NUM_PAGINATION_TABS - totalPages - 1);
      endPage = totalPages;
    }

    for(let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  }

  private calculatePageCount() {
    this.startCount = ((this.activePage - 1) * this.perPage) + 1;
    this.endCount = (this.activePage * this.perPage) < this.totalCount ? this.activePage * this.perPage : this.totalCount;
  }

  public changePage(page: number): void {
    if (this.disabled) return;
    if (page == this.activePage) {
      return;
    }

    this.activePage = page;
    if (this.pageChange) {
      this.pageChange.emit({page: page});
    }
    this.paginators = this.getPager(this.totalCount, this.activePage, this.perPage);
    this.calculatePageCount();
  }

  public previousPage(): void {
    if (this.disabled) return;
    this.activePage = parseInt('' + this.activePage, 10);
    if (this.activePage <= this.firstPage) {
      return;
    }

    this.changePage(this.activePage - 1)
  }

  public nextPage(): void {
    if (this.disabled) return;
    this.activePage = parseInt('' + this.activePage, 10);
    if (this.activePage >= this.lastPage) {
      return;
    }

    this.changePage(this.activePage + 1)
  }
}
