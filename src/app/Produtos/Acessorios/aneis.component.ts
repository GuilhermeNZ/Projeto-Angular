import { Component } from '@angular/core';


@Component({
  selector: 'acessorios-aneis',
  template: `
<ul class="breadcrumb">
  <li><a routerLinkActive="active" routerLink="/home"  href="">Home</a></li>
  <li>Acessórios</li>
  <li>Anéis</li>
</ul>
    <h1>Anéis</h1>
  `,
  styleUrls: ['../acss.component.css']
})
export class AneisViewComponent {
}