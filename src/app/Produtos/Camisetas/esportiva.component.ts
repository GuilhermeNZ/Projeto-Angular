import { Component } from '@angular/core';


@Component({
  selector: 'camisetas-esportiva',
  template: `
<ul class="breadcrumb">
  <li><a routerLinkActive="active" routerLink="/home"  href="">Home</a></li>
  <li>Camisetas</li>
  <li>Esportiva</li>
</ul>
    <h1>Esportiva</h1>
  `,
  styleUrls: ['../acss.component.css']
})
export class EsportivaViewComponent {
}