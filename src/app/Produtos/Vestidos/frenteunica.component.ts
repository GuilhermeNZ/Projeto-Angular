import { Component } from '@angular/core';


@Component({
  selector: 'frente-unica',
  template: `
<ul class="breadcrumb">
  <li><a routerLinkActive="active" routerLink="/home"  href="">Home</a></li>
  <li>Vestidos</li>
  <li>Frente Única</li>
</ul>
    <h1>Frente Única</h1>
  `,
  styleUrls: ['../acss.component.css']
})
export class VFrenteUnicaViewComponent {
}