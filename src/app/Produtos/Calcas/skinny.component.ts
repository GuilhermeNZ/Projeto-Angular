import { Component } from '@angular/core';


@Component({
  selector: 'calcas-skinny',
  template: `
<ul class="breadcrumb">
  <li><a routerLinkActive="active" routerLink="/home"  href="">Home</a></li>
  <li>Calças</li>
  <li>Skinny</li>
</ul>
    <h1>Skinny</h1>
  `,
  styleUrls: ['../acss.component.css']
})
export class CSkinnyViewComponent {
}