import { Component } from '@angular/core';


@Component({
  selector: 'blusas-pretobasico',
  template: `
<ul class="breadcrumb">
  <li><a routerLinkActive="active" routerLink="/home"  href="">Home</a></li>
  <li>Blusas</li>
  <li>Preto Básico</li>
</ul>
    <h1>Preto Básico</h1>
  `,
  styleUrls: ['../acss.component.css']
})
export class BPretoBasicoViewComponent {
}