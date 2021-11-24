import { Component } from '@angular/core';


@Component({
  selector: 'oculos-flat',
  template: `
<ul class="breadcrumb">
  <li><a routerLinkActive="active" routerLink="/home"  href="">Home</a></li>
  <li>Óculos</li>
  <li>Flat</li>
</ul>
    <h1>Flat</h1>
  `,
  styleUrls: ['../acss.component.css']
})
export class FlatViewComponent {
}