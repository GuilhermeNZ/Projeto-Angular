import { Component } from '@angular/core';


@Component({
  selector: 'acessorios-relogios',
  template: `
<ul class="breadcrumb">
  <li><a routerLinkActive="active" routerLink="/home"  href="home">Home</a></li>
  <li>Acessórios</li>
  <li>Relógios</li>
</ul>
    <h1>Relógios</h1>
  `,
  styleUrls: ['../acss.component.css']
})
export class RelogiosViewComponent {
}