import { Component } from '@angular/core';


@Component({
  selector: 'blusas-comcapuz',
  template: `
<ul class="breadcrumb">
  <li><a routerLinkActive="active" routerLink="/home"  href="">Home</a></li>
  <li>Blusas</li>
  <li>Com Capuz</li>
</ul>
    <h1>Com Capuz</h1>
  `,
  styleUrls: ['../acss.component.css']
})
export class BComCapuzViewComponent {
}