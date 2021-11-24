import { Component } from '@angular/core';


@Component({
  selector: 'acessorios-colares',
  template: `
<ul class="breadcrumb">
  <li><a routerLinkActive="active" routerLink="/home"  href="">Home</a></li>
  <li>Acessórios</li>
  <li>Colares</li>
</ul>
    <h1>Colares</h1>
  `,
  styleUrls: ['../acss.component.css']
})
export class ColaresViewComponent {
}