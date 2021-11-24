import { Component } from '@angular/core';


@Component({
  selector: 'acessorios-presilhas',
  template: `
<ul class="breadcrumb">
  <li><a routerLinkActive="active" routerLink="/home"  href="">Home</a></li>
  <li>Acessórios</li>
  <li>Presilhas</li>
</ul>
    <h1>Presilhas</h1>
  `,
  styleUrls: ['../acss.component.css']
})
export class PresilhasViewComponent {
}