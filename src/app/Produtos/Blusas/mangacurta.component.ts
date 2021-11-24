import { Component } from '@angular/core';


@Component({
  selector: 'blusas-mangacurta',
  template: `
<ul class="breadcrumb">
  <li><a routerLinkActive="active" routerLink="/home"  href="">Home</a></li>
  <li>Blusas</li>
  <li>Manga Curta</li>
</ul>
    <h1>Manga Curta</h1>
  `,
  styleUrls: ['../acss.component.css']
})
export class BMangaCurtaViewComponent {
}