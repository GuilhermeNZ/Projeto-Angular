import { Component } from '@angular/core';


@Component({
  selector: 'oculos-gatinho',
  template: `
<ul class="breadcrumb">
  <li><a routerLinkActive="active" routerLink="/home"  href="">Home</a></li>
  <li>Óculos</li>
  <li>Gatinho</li>
</ul>
    <h1>Gatinho</h1>
  `,
  styleUrls: ['../acss.component.css']
})
export class GatinhoViewComponent {
}