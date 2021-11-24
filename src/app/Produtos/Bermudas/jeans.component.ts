import { Component } from '@angular/core';


@Component({
  selector: 'bermudas-jeans',
  template: `
<ul class="breadcrumb">
  <li><a routerLinkActive="active" routerLink="/home"  href="">Home</a></li>
  <li>Bermudas</li>
  <li>Jeans</li>
</ul>
    <h1>Jeans</h1>
  `,
  styleUrls: ['../acss.component.css']
})
export class BJeansViewComponent {
}