import { Component } from '@angular/core';


@Component({
  selector: 'oculos-meia-armacao',
  template: `
<ul class="breadcrumb">
  <li><a routerLinkActive="active" routerLink="/home"  href="">Home</a></li>
  <li>Óculos</li>
  <li>Meia armação</li>
</ul>
    <h1>Meia armação</h1>
  `,
  styleUrls: ['../acss.component.css']
})
export class MeiaarmacaoViewComponent {
}