import { Badge } from '../../core';
import { MenuItem } from '../../shared';
import {
  IconBoxiconComponent,
  UICardComponent,
  AnalyticsComponent,
  UIAccordionComponent,
  UIAlertComponent,
  UIBadgeComponent,
  UIButtonComponent,
  UICarouselComponent,
  UICollapseComponent,
  UIDropdownComponent,
  UIListGroupComponent,
  UIFooterComponent,
  UIOffcanvasComponent,
  UIPaginationComponent,
  UIBreadcrumbComponent,
  UIProgressComponent,
  UISpinnerComponent,
  UITabPillComponent,
  UIToastrComponent,
  UITooltipPopoverComponent,
  UITypographyComponent,
  UINavbarComponent,
  UIModalComponent,
  FormBasicInputComponent,
  FormInputGroupComponent,
  TableBasicComponent,
  FormVerticalLayoutComponent,
  FormHorizontalLayoutComponent,
  FormValidationComponent,
  SweetalertComponent,
  IconFontAwesomeComponent,
} from './pages';

interface IPage {
  path: string;
  component: any;
  title: string;
}

class Page implements IPage {
  public path!: string;
  public component!: any;
  public title!: string;

  constructor (data: IPage) {
    this.path = data.path;
    this.component = data.component;
    this.title = data.title;
  }
}

export class ProjectTemplatePage {
  static PAGES: { [key: string]: IPage } = {
    ANALYTICS: new Page({ path: 'analytics', component: AnalyticsComponent, title: 'Analytics' }),
    BOXICON: new Page({ path: 'boxicon', component: IconBoxiconComponent, title: 'Boxicons' }),
    FONT_AWESOME: new Page({ path: 'font-awesome', component: IconFontAwesomeComponent, title: 'Font Awesome' }),
    CARD: new Page({ path: 'card', component: UICardComponent, title: 'Cards' }),
    ACCORDIAN: new Page({ path: 'accordion', component: UIAccordionComponent, title: 'Accordions' }),
    ALERT: new Page({ path: 'alert', component: UIAlertComponent, title: 'Alert' }),
    BADGE: new Page({ path: 'badge', component: UIBadgeComponent, title: 'Badges' }),
    BUTTON: new Page({ path: 'button', component: UIButtonComponent, title: 'Buttons' }),
    CAROUSEL: new Page({ path: 'carousel', component: UICarouselComponent, title: 'Carousels' }),
    COLLAPSE: new Page({ path: 'collapse', component: UICollapseComponent, title: 'Collapses' }),
    DROPDOWN: new Page({ path: 'dropdown', component: UIDropdownComponent, title: 'Dropdowns' }),
    LIST_GROUP: new Page({ path: 'list-group', component: UIListGroupComponent, title: 'List Groups' }),
    NAVBAR: new Page({ path: 'navbar', component: UINavbarComponent, title: 'Navbars' }),
    MODAL: new Page({ path: 'modal', component: UIModalComponent, title: 'Modals' }),
    FOOTER: new Page({ path: 'footer', component: UIFooterComponent, title: 'Footers' }),
    OFFCANVAS: new Page({ path: 'offcanvas', component: UIOffcanvasComponent, title: 'Offcanvas' }),
    PAGINATION: new Page({ path: 'pagination', component: UIPaginationComponent, title: 'Paginations' }),
    BREADCRUMB: new Page({ path: 'breadcrumb', component: UIBreadcrumbComponent, title: 'Breadcrumbs' }),
    PROGRESS: new Page({ path: 'progress', component: UIProgressComponent, title: 'Progress' }),
    SPINNER: new Page({ path: 'spinner', component: UISpinnerComponent, title: 'Spinners' }),
    TAB_PILL: new Page({ path: 'tab-pill', component: UITabPillComponent, title: 'Tabs & Pills' }),
    TOASTR: new Page({ path: 'toastr', component: UIToastrComponent, title: 'Toastrs' }),
    TOOLTIP_POPOVER: new Page({ path: 'tooltip-popover', component: UITooltipPopoverComponent, title: 'Tooltips & Popovers' }),
    TYPOGRAPHY: new Page({ path: 'typography', component: UITypographyComponent, title: 'Typography' }),
    FORM_BASIC_INPUT: new Page({ path: 'basic-input', component: FormBasicInputComponent, title: 'Basic Inputs' }),
    FORM_INPUT_GROUP: new Page({ path: 'input-group', component: FormInputGroupComponent, title: 'Input groups' }),
    FORM_VERTICAL_LAYOUT: new Page({ path: 'vertical-layout', component: FormVerticalLayoutComponent, title: 'Vertical Layouts' }),
    FORM_HORIZONTAL_LAYOUT: new Page({ path: 'horizontal-layout', component: FormHorizontalLayoutComponent, title: 'Horizontal Layouts' }),
    FORM_VALIDATION: new Page({ path: 'form-validation', component: FormValidationComponent, title: 'Form Validations' }),
    TABLE: new Page({ path: 'table', component: TableBasicComponent, title: 'Tables' }),
    SWEETALERT: new Page({ path: 'sweet-alert', component: SweetalertComponent, title: 'Sweetalert2' }),
  };

  static defaultRoute: string = `/template/${this.PAGES['ANALYTICS'].path}`;

  static menuItems(badges: { [key: string]: number | string } = {}): MenuItem[] {
    return [
      new MenuItem({
        title: 'Dashboards',
        icon: 'bx bx-home-smile',
        badge: new Badge({ text: badges['DASHBOARD'], variant: 'danger', rounded: true }),
        open: true,
        subItems: [
          new MenuItem({
            title: this.PAGES['ANALYTICS'].title,
            link: this.PAGES['ANALYTICS'].path,
            badge: new Badge({ text: badges['analytics'], variant: 'danger', label: true }),
          }),
          new MenuItem({
            title: 'Original',
            link: 'https://demos.themeselection.com/sneat-bootstrap-html-admin-template/html/vertical-menu-template/app-logistics-dashboard.html',
            badge: new Badge({ text: 'Pro', variant: 'primary', label: true }),
            target: '_blank',
            external: true
          }),
        ],
      }),
      new MenuItem({ title: 'Components', header: true }),
      new MenuItem({
        title: this.PAGES['CARD'].title,
        link: this.PAGES['CARD'].path,
        icon: 'bx bx-collection',
      }),
      new MenuItem({
        title: 'Fonts',
        icon: 'bx bx-box',
        subItems: [
          new MenuItem({
            title: this.PAGES['BOXICON'].title,
            link: this.PAGES['BOXICON'].path,
            icon: 'bx bx-collection',
          }),
          new MenuItem({
            title: this.PAGES['FONT_AWESOME'].title,
            link: this.PAGES['FONT_AWESOME'].path,
            icon: 'bx bx-collection',
          }),
        ],
      }),
      new MenuItem({
        title: 'User Interface',
        icon: 'bx bx-box',
        subItems: [
          new MenuItem({ title: this.PAGES['ACCORDIAN'].title, link: this.PAGES['ACCORDIAN'].path, badge: new Badge({ text: badges['ACCORDIAN'], variant: 'primary', label: true }) }),
          new MenuItem({ title: this.PAGES['ALERT'].title, link: this.PAGES['ALERT'].path, badge: new Badge({ text: badges['ALERT'], variant: 'primary', label: true }) }),
          new MenuItem({ title: this.PAGES['BADGE'].title, link: this.PAGES['BADGE'].path, badge: new Badge({ text: badges['BADGE'], variant: 'primary', label: true }) }),
          new MenuItem({ title: this.PAGES['BUTTON'].title, link: this.PAGES['BUTTON'].path, badge: new Badge({ text: badges['BUTTON'], variant: 'primary', label: true }) }),
          new MenuItem({ title: this.PAGES['CAROUSEL'].title, link: this.PAGES['CAROUSEL'].path, badge: new Badge({ text: badges['CAROUSEL'], variant: 'primary', label: true }) }),
          new MenuItem({ title: this.PAGES['COLLAPSE'].title, link: this.PAGES['COLLAPSE'].path, badge: new Badge({ text: badges['COLLAPSE'], variant: 'primary', label: true }) }),
          new MenuItem({ title: this.PAGES['DROPDOWN'].title, link: this.PAGES['DROPDOWN'].path, badge: new Badge({ text: badges['DROPDOWN'], variant: 'primary', label: true }) }),
          new MenuItem({ title: this.PAGES['LIST_GROUP'].title, link: this.PAGES['LIST_GROUP'].path, badge: new Badge({ text: badges['LIST_GROUP'], variant: 'primary', label: true }) }),
          new MenuItem({ title: this.PAGES['NAVBAR'].title, link: this.PAGES['NAVBAR'].path, badge: new Badge({ text: badges['NAVBAR'], variant: 'primary', label: true }) }),
          new MenuItem({ title: this.PAGES['MODAL'].title, link: this.PAGES['MODAL'].path, badge: new Badge({ text: badges['MODAL'], variant: 'primary', label: true }) }),
          new MenuItem({ title: this.PAGES['FOOTER'].title, link: this.PAGES['FOOTER'].path, badge: new Badge({ text: badges['FOOTER'], variant: 'primary', label: true }) }),
          new MenuItem({ title: this.PAGES['OFFCANVAS'].title, link: this.PAGES['OFFCANVAS'].path, badge: new Badge({ text: badges['OFFCANVAS'], variant: 'primary', label: true }) }),
          new MenuItem({ title: this.PAGES['PAGINATION'].title, link: this.PAGES['PAGINATION'].path, badge: new Badge({ text: badges['PAGINATION'], variant: 'primary', label: true }) }),
          new MenuItem({ title: this.PAGES['BREADCRUMB'].title, link: this.PAGES['BREADCRUMB'].path, badge: new Badge({ text: badges['BREADCRUMB'], variant: 'primary', label: true }) }),
          new MenuItem({ title: this.PAGES['PROGRESS'].title, link: this.PAGES['PROGRESS'].path, badge: new Badge({ text: badges['PROGRESS'], variant: 'primary', label: true }) }),
          new MenuItem({ title: this.PAGES['SPINNER'].title, link: this.PAGES['SPINNER'].path, badge: new Badge({ text: badges['SPINNER'], variant: 'primary', label: true }) }),
          new MenuItem({ title: this.PAGES['TAB_PILL'].title, link: this.PAGES['TAB_PILL'].path, badge: new Badge({ text: badges['TAB_PILL'], variant: 'primary', label: true }) }),
          new MenuItem({ title: this.PAGES['TOASTR'].title, link: this.PAGES['TOASTR'].path, badge: new Badge({ text: badges['TOASTR'], variant: 'primary', label: true }) }),
          new MenuItem({ title: this.PAGES['TOOLTIP_POPOVER'].title, link: this.PAGES['TOOLTIP_POPOVER'].path, badge: new Badge({ text: badges['TOOLTIP_POPOVER'], variant: 'primary', label: true }) }),
          new MenuItem({ title: this.PAGES['TYPOGRAPHY'].title, link: this.PAGES['TYPOGRAPHY'].path, badge: new Badge({ text: badges['TYPOGRAPHY'], variant: 'primary', label: true }) }),
        ],
      }),
      new MenuItem({
        title: this.PAGES['SWEETALERT'].title,
        link: this.PAGES['SWEETALERT'].path,
        badge: new Badge({ text: badges['SWEETALERT'], variant: 'primary', label: true }),
        icon: 'bx bx-collection',
      }),
      new MenuItem({ title: 'Forms & Tables', header: true }),
      new MenuItem({
        title: 'Form Elements',
        icon: 'bx bx-detail',
        subItems: [
          new MenuItem({ title: this.PAGES['FORM_BASIC_INPUT'].title, link: this.PAGES['FORM_BASIC_INPUT'].path, badge: new Badge({ text: badges['FORM_BASIC_INPUT'], variant: 'primary', label: true }) }),
          new MenuItem({ title: this.PAGES['FORM_INPUT_GROUP'].title, link: this.PAGES['FORM_INPUT_GROUP'].path, badge: new Badge({ text: badges['FORM_INPUT_GROUP'], variant: 'primary', label: true }) }),
        ],
      }),
      new MenuItem({
        title: 'Form Layouts',
        icon: 'bx bx-detail',
        subItems: [
          new MenuItem({ title: this.PAGES['FORM_VERTICAL_LAYOUT'].title, link: this.PAGES['FORM_VERTICAL_LAYOUT'].path, badge: new Badge({ text: badges['FORM_VERTICAL_LAYOUT'], variant: 'primary', label: true }) }),
          new MenuItem({ title: this.PAGES['FORM_HORIZONTAL_LAYOUT'].title, link: this.PAGES['FORM_HORIZONTAL_LAYOUT'].path, badge: new Badge({ text: badges['FORM_HORIZONTAL_LAYOUT'], variant: 'primary', label: true }) }),
        ],
      }),
      new MenuItem({
        title: this.PAGES['FORM_VALIDATION'].title,
        link: this.PAGES['FORM_VALIDATION'].path,
        badge: new Badge({ text: badges['FORM_VALIDATION'], variant: 'primary', label: true }),
        icon: 'bx bx-list-check',
      }),
      new MenuItem({
        title: this.PAGES['TABLE'].title,
        link: this.PAGES['TABLE'].path,
        badge: new Badge({ text: badges['TABLE'], variant: 'primary', label: true }),
        icon: 'bx bx-table',
      }),
    ];
  }

  static getRoutes(): { path: string, component: any }[] {
    return Object.values(this.PAGES).map(page => ({
      path: page.path,
      component: page.component,
    }));
  }

}
