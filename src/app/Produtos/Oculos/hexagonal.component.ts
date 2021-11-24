import { Component } from '@angular/core';


@Component({
  selector: 'oculos-hexagonal',
  template: `
<ul class="breadcrumb">
  <li><a routerLinkActive="active" routerLink="/home"  href="">Home</a></li>
  <li>Óculos</li>
  <li>Hexagonal</li>
</ul>
    <h1>Hexagonal</h1>
  `,
  styleUrls: ['../acss.component.css']
})
export class HexagonalViewComponent {
}