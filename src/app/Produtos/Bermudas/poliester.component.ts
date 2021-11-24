import { Component } from '@angular/core';


@Component({
  selector: 'bermudas-poliester',
  template: `
<ul class="breadcrumb">
  <li><a routerLinkActive="active" routerLink="/home"  href="">Home</a></li>
  <li>Bermudas</li>
  <li>Poliester</li>
</ul>
    <h1>Poliester</h1>
  `,
  styleUrls: ['../acss.component.css']
})
export class BPoliesterViewComponent {
}