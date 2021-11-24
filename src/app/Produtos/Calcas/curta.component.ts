import { Component } from '@angular/core';


@Component({
  selector: 'calcas-curta',
  template: `
<ul class="breadcrumb">
  <li><a routerLinkActive="active" routerLink="/home"  href="">Home</a></li>
  <li>Calças</li>
  <li>Curta</li>
</ul>
    <h1>Curta</h1>
  `,
  styleUrls: ['../acss.component.css']
})
export class CCurtaViewComponent {
}