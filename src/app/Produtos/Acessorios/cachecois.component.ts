import { Component } from '@angular/core';


@Component({
  selector: 'acessorios-cachecois',
  template: `
<ul class="breadcrumb">
  <li><a routerLinkActive="active" routerLink="/home"  href="">Home</a></li>
  <li>Acessórios</li>
  <li>Cachecóis</li>
</ul>
    <h1>Cachecóis</h1>
  `,
  styleUrls: ['../acss.component.css']
})
export class CachecoisViewComponent {
}