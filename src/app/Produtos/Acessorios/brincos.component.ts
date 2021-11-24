import { Component } from '@angular/core';


@Component({
  selector: 'acessorios-brincos',
  template: `
<ul class="breadcrumb">
  <li><a routerLinkActive="active" routerLink="/home"  href="">Home</a></li>
  <li>Acessórios</li>
  <li>Brincos</li>
</ul>
    <h1>Brincos</h1>
  `,
  styleUrls: ['../acss.component.css']
})
export class BrincosViewComponent {
}