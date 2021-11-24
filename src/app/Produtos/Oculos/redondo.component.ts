import { Component } from '@angular/core';


@Component({
  selector: 'oculos-redondo',
  template: `
<ul class="breadcrumb">
  <li><a routerLinkActive="active" routerLink="/home"  href="">Home</a></li>
  <li>Óculos</li>
  <li>Redondo</li>
</ul>
    <h1>Redondo</h1>
  `,
  styleUrls: ['../acss.component.css']
})
export class RedondoViewComponent {
}