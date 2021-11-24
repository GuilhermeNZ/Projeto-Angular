import { Component } from '@angular/core';


@Component({
  selector: 'blusas-mangacomprida',
  template: `
<ul class="breadcrumb">
  <li><a routerLinkActive="active" routerLink="/home"  href="">Home</a></li>
  <li>Blusas</li>
  <li>Manga Comprida</li>
</ul>
    <h1>Manga Comprida</h1>
  `,
  styleUrls: ['../acss.component.css']
})
export class BMangaCompridaViewComponent {
}