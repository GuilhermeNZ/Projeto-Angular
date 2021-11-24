import { Component } from '@angular/core';


@Component({
  selector: 'acessorios-pulseiras',
  template: `
<ul class="breadcrumb">
  <li><a routerLinkActive="active" routerLink="/home"  href="">Home</a></li>
  <li>Acessórios</li>
  <li>Pulseiras</li>
</ul>
    <h1>Pulseiras</h1>
  `,
  styleUrls: ['../acss.component.css']
})
export class PulseirasViewComponent {
}