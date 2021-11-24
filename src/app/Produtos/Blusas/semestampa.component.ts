import { Component } from '@angular/core';


@Component({
  selector: 'blusas-semestampa',
  template: `
<ul class="breadcrumb">
  <li><a routerLinkActive="active" routerLink="/home"  href="">Home</a></li>
  <li>Blusas</li>
  <li>Sem Estampa</li>
</ul>
    <h1>Sem Estampa</h1>
  `,
  styleUrls: ['../acss.component.css']
})
export class BSemEstampaViewComponent {
}