import { Component } from '@angular/core';


@Component({
  selector: 'sapatos-masculinos-loafer',
  template: `
<ul class="breadcrumb">
  <li><a routerLinkActive="active" routerLink="/home"  href="">Home</a></li>
  <li>Sapatos Masculinos</li>
  <li>Loafer</li>
</ul>
    <h1>Loafer</h1>
  `,
  styleUrls: ['../acss.component.css']
})
export class SMLoaferViewComponent {
}