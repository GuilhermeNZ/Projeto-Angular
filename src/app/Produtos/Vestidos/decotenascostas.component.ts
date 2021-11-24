import { Component } from '@angular/core';


@Component({
  selector: 'decote-nas-costas',
  template: `
<ul class="breadcrumb">
  <li><a routerLinkActive="active" routerLink="/home"  href="">Home</a></li>
  <li>Vestidos</li>
  <li>Decote Nas Costas</li>
</ul>
    <h1>Decote Nas Costas</h1>
  `,
  styleUrls: ['../acss.component.css']
})
export class VDecoteNasCostasViewComponent {
}