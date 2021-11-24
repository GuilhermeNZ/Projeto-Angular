import { Component } from '@angular/core';


@Component({
  selector: 'sapatos-femininos-gladiador',
  template: `
<ul class="breadcrumb">
  <li><a routerLinkActive="active" routerLink="/home"  href="">Home</a></li>
  <li>Sapatos Femininos</li>
  <li>Gladiador</li>
</ul>
    <h1>Gladiador</h1>
  `,
  styleUrls: ['../acss.component.css']
})
export class SFGladiadorViewComponent {
}