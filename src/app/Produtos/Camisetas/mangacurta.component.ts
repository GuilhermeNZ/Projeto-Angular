import { Component } from '@angular/core';


@Component({
  selector: 'camisetas-mangacurta',
  template: `
<ul class="breadcrumb">
  <li><a routerLinkActive="active" routerLink="/home"  href="">Home</a></li>
  <li>Camisetas</li>
  <li>Manga Curta</li>
</ul>
    <h1>Manga Curta</h1>
  `,
  styleUrls: ['../acss.component.css']
})
export class MangaCurtaViewComponent {
}