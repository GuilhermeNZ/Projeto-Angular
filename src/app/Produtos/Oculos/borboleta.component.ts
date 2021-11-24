import { Component } from '@angular/core';


@Component({
  selector: 'oculos-borboleta',
  template: `
<ul class="breadcrumb">
  <li><a routerLinkActive="active" routerLink="/home"  href="">Home</a></li>
  <li>Óculos</li>
  <li>Borboleta</li>
</ul>
    <h1>Borboleta</h1>
  `,
  styleUrls: ['../acss.component.css']
})
export class BorboletaViewComponent {
}