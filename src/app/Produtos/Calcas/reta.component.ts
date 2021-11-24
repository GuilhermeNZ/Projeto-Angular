import { Component } from '@angular/core';


@Component({
  selector: 'calcas-reta',
  template: `
<ul class="breadcrumb">
  <li><a routerLinkActive="active" routerLink="/home"  href="">Home</a></li>
  <li>Calças</li>
  <li>Reta</li>
</ul>
    <h1>Reta</h1>
  `,
  styleUrls: ['../acss.component.css']
})
export class CRetaViewComponent {
}