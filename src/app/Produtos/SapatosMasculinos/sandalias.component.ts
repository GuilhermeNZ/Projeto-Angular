import { Component } from '@angular/core';


@Component({
  selector: 'sapatos-masculinos-sandalias',
  template: `
<ul class="breadcrumb">
  <li><a routerLinkActive="active" routerLink="/home"  href="">Home</a></li>
  <li>Sapatos Masculinos</li>
  <li>Sandálias</li>
</ul>
    <h1>Sandálias</h1>
  `,
  styleUrls: ['../acss.component.css']
})
export class SMSandaliasViewComponent {
}