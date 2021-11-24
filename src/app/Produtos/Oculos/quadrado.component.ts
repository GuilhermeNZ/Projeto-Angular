import { Component } from '@angular/core';


@Component({
  selector: 'oculos-quadrado',
  template: `
<ul class="breadcrumb">
  <li><a routerLinkActive="active" routerLink="/home"  href="">Home</a></li>
  <li>Óculos</li>
  <li>Quadrado</li>
</ul>
    <h1>Quadrado</h1>
  `,
  styleUrls: ['../acss.component.css']
})
export class QuadradoViewComponent {
}