import { Component } from '@angular/core';


@Component({
  selector: 'sapatos-masculinos-sapatenis',
  template: `
<ul class="breadcrumb">
  <li><a routerLinkActive="active" routerLink="/home"  href="">Home</a></li>
  <li>Sapatos Masculinos</li>
  <li>SapatĂȘnis</li>
</ul>
    <h1>SapatĂȘnis</h1>
  `,
  styleUrls: ['../acss.component.css']
})
export class SMSapatenisViewComponent {
}