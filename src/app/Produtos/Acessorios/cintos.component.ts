import { Component } from '@angular/core';


@Component({
  selector: 'acessorios-cintos',
  template: `
<ul class="breadcrumb">
  <li><a routerLinkActive="active" routerLink="/home"  href="">Home</a></li>
  <li>Acessórios</li>
  <li>Cintos</li>
</ul>
    <h1>Cintos</h1>
  `,
  styleUrls: ['../acss.component.css']
})
export class CintosViewComponent {
}