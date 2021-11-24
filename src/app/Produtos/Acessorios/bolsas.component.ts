import { Component } from '@angular/core';


@Component({
  selector: 'acessorios-bolsas',
  template: `
<ul class="breadcrumb">
  <li><a routerLinkActive="active" routerLink="/home"  href="">Home</a></li>
  <li>Acessórios</li>
  <li>Bolsas</li>
</ul>
    <h1>Bolsas</h1>
  `,
  styleUrls: ['../acss.component.css']
})
export class BolsasViewComponent {
}