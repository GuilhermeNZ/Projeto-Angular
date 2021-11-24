import { Component } from '@angular/core';


@Component({
  selector: 'coracao',
  template: `
<ul class="breadcrumb">
  <li><a routerLinkActive="active" routerLink="/home"  href="">Home</a></li>
  <li>Vestidos</li>
  <li>Coração</li>
</ul>
    <h1>Coração</h1>
  `,
  styleUrls: ['../acss.component.css']
})
export class VCoracaoViewComponent {
}