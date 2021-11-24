import { Component } from '@angular/core';


@Component({
  selector: 'blusas-brancabasica',
  template: `
<ul class="breadcrumb">
  <li><a routerLinkActive="active" routerLink="/home"  href="">Home</a></li>
  <li>Blusas</li>
  <li>Branca Básica</li>
</ul>
    <h1>Branca Básica</h1>
  `,
  styleUrls: ['../acss.component.css']
})
export class BBrancaBasicaViewComponent {
}