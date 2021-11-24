import { Component } from '@angular/core';


@Component({
  selector: 'bermudas-chino',
  template: `
<ul class="breadcrumb">
  <li><a routerLinkActive="active" routerLink="/home"  href="">Home</a></li>
  <li>Bermudas</li>
  <li>Chino</li>
</ul>
    <h1>Chino</h1>
  `,
  styleUrls: ['../acss.component.css']
})
export class BChinoViewComponent {
}