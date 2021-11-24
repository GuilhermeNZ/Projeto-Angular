import { Component } from '@angular/core';


@Component({
  selector: 'bermudas-sinteticas',
  template: `
<ul class="breadcrumb">
  <li><a routerLinkActive="active" routerLink="/home"  href="">Home</a></li>
  <li>Bermudas</li>
  <li>Sintéticas</li>
</ul>
    <h1>Sintéticas</h1>
  `,
  styleUrls: ['../acss.component.css']
})
export class BSinteticasViewComponent {
}