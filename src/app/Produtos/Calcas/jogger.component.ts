import { Component } from '@angular/core';


@Component({
  selector: 'calcas-jogger',
  template: `
<ul class="breadcrumb">
  <li><a routerLinkActive="active" routerLink="/home"  href="">Home</a></li>
  <li>Calças</li>
  <li>Jogger</li>
</ul>
    <h1>Jogger</h1>
  `,
  styleUrls: ['../acss.component.css']
})
export class CJoggerViewComponent {
}