import { Component } from '@angular/core';


@Component({
  selector: 'blusas-fullprint',
  template: `
<ul class="breadcrumb">
  <li><a routerLinkActive="active" routerLink="/home"  href="">Home</a></li>
  <li>Blusas</li>
  <li>Full Print</li>
</ul>
    <h1>Full Print</h1>
  `,
  styleUrls: ['../acss.component.css']
})
export class BFullPrintViewComponent {
}