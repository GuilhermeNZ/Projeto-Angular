import { Component } from '@angular/core';


@Component({
  selector: 'calcas-slouchy',
  template: `
<ul class="breadcrumb">
  <li><a routerLinkActive="active" routerLink="/home"  href="">Home</a></li>
  <li>Calças</li>
  <li>Slouchy</li>
</ul>
    <h1>Slouchy</h1>
  `,
  styleUrls: ['../acss.component.css']
})
export class CSlouchyViewComponent {
}