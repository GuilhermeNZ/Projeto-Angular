import { Component } from '@angular/core';


@Component({
  selector: 'acessorios-chapeus',
  template: `
<ul class="breadcrumb">
  <li><a routerLinkActive="active" routerLink="/home"  href="">Home</a></li>
  <li>Acessórios</li>
  <li>Chápeus</li>
</ul>
    <h1>Chápeus</h1>
  `,
  styleUrls: ['../acss.component.css']
})
export class ChapeusViewComponent {
}