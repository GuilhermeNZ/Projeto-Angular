import { Component } from '@angular/core';


@Component({
  selector: 'sapatos-masculinos-derby',
  template: `
<ul class="breadcrumb">
  <li><a routerLinkActive="active" routerLink="/home"  href="">Home</a></li>
  <li>Sapatos Masculinos</li>
  <li>Derby</li>
</ul>
    <h1>Derby</h1>
  `,
  styleUrls: ['../acss.component.css']
})
export class SMDerbyViewComponent {
}