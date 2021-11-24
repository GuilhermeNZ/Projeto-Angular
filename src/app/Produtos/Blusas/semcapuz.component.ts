import { Component } from '@angular/core';


@Component({
  selector: 'blusas-semcapuz',
  template: `
<ul class="breadcrumb">
  <li><a routerLinkActive="active" routerLink="/home"  href="">Home</a></li>
  <li>Blusas</li>
  <li>Sem Capuz</li>
</ul>
    <h1>Sem Capuz</h1>
  `,
  styleUrls: ['../acss.component.css']
})
export class BSemCapuzViewComponent {
}