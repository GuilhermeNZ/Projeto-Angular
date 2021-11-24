import { Component } from '@angular/core';


@Component({
  selector: 'sapatos-femininos-botas',
  template: `
<ul class="breadcrumb">
  <li><a routerLinkActive="active" routerLink="/home"  href="">Home</a></li>
  <li>Sapatos Femininos</li>
  <li>Botas</li>
</ul>
    <h1>Botas</h1>
  `,
  styleUrls: ['../acss.component.css']
})
export class SFBotasViewComponent {
}