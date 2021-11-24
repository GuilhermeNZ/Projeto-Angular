import { Component } from '@angular/core';


@Component({
  selector: 'calcas-clochard',
  template: `
<ul class="breadcrumb">
  <li><a routerLinkActive="active" routerLink="/home"  href="">Home</a></li>
  <li>Calças</li>
  <li>Clochard</li>
</ul>
    <h1>Clochard</h1>
  `,
  styleUrls: ['../acss.component.css']
})
export class CClochardViewComponent {
}