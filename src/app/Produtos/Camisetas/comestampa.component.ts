import { Component } from '@angular/core';


@Component({
  selector: 'camisetas-comestampa',
  template: `
<ul class="breadcrumb">
  <li><a routerLinkActive="active" routerLink="/home"  href="">Home</a></li>
  <li>Camisetas</li>
  <li>Com Estampa</li>
</ul>
    <h1>Com estampa</h1>
  `,
  styleUrls: ['../acss.component.css']
})
export class ComEstampaViewComponent {
}