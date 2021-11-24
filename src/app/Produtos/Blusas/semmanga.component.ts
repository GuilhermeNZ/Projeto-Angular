import { Component } from '@angular/core';


@Component({
  selector: 'blusas-semmanga',
  template: `
<ul class="breadcrumb">
  <li><a routerLinkActive="active" routerLink="/home"  href="">Home</a></li>
  <li>Blusas</li>
  <li>Sem Manga</li>
</ul>
    <h1>Sem Manga</h1>
  `,
  styleUrls: ['../acss.component.css']
})
export class BSemMangaViewComponent {
}