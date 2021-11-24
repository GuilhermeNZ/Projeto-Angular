import { Component } from '@angular/core';


@Component({
  selector: 'camisetas-listras',
  template: `
<ul class="breadcrumb">
  <li><a routerLinkActive="active" routerLink="/home"  href="">Home</a></li>
  <li>Camisetas</li>
  <li>Listras</li>
</ul>
    <h1>Listras</h1>
  `,
  styleUrls: ['../acss.component.css']
})
export class ListrasViewComponent {
}