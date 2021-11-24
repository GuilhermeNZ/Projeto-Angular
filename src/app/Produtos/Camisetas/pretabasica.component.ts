import { Component } from '@angular/core';


@Component({
  selector: 'camisetas-pretabasica',
  template: `
<ul class="breadcrumb">
  <li><a routerLinkActive="active" routerLink="/home"  href="">Home</a></li>
  <li>Camisetas</li>
  <li>Preta Básica</li>
</ul>
    <h1>Preta Básica</h1>
  `,
  styleUrls: ['../acss.component.css']
})
export class PretaBasicaViewComponent {
}