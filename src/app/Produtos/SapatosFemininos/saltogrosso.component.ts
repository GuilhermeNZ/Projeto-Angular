import { Component } from '@angular/core';


@Component({
  selector: 'sapatos-femininos-salto-grosso',
  template: `
<ul class="breadcrumb">
  <li><a routerLinkActive="active" routerLink="/home"  href="">Home</a></li>
  <li>Sapatos Femininos</li>
  <li>Salto Grosso</li>
</ul>
    <h1>Salto Grosso</h1>
  `,
  styleUrls: ['../acss.component.css']
})
export class SFSaltoGrossoViewComponent {
}