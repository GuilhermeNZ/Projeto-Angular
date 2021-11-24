import { Component } from '@angular/core';


@Component({
  selector: 'calcas-jeans',
  template: `
<ul class="breadcrumb">
  <li><a routerLinkActive="active" routerLink="/home"  href="">Home</a></li>
  <li>Calças</li>
  <li>Jeans</li>
</ul>
    <h1>Jenas</h1>
  `,
  styleUrls: ['../acss.component.css']
})
export class CJeansViewComponent {
}