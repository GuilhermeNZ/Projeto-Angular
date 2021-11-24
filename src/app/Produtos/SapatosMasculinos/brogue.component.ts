import { Component } from '@angular/core';


@Component({
  selector: 'sapatos-masculinos-brogue',
  template: `
<ul class="breadcrumb">
  <li><a routerLinkActive="active" routerLink="/home"  href="">Home</a></li>
  <li>Sapatos Masculinos</li>
  <li>Brogue</li>
</ul>
    <h1>Brogue</h1>
  `,
  styleUrls: ['../acss.component.css']
})
export class SMBrogueViewComponent {
}