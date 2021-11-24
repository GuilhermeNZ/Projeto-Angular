import { Component } from '@angular/core';


@Component({
  selector: 'bermudas-sarja',
  template: `
<ul class="breadcrumb">
  <li><a routerLinkActive="active" routerLink="/home"  href="">Home</a></li>
  <li>Bermudas</li>
  <li>Sarja</li>
</ul>
    <h1>Sarja</h1>
  `,
  styleUrls: ['../acss.component.css']
})
export class BSarjaViewComponent {
}