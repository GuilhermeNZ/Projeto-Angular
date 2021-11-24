import { Component } from '@angular/core';


@Component({
  selector: 'saias-mini',
  template: `
<ul class="breadcrumb">
  <li><a routerLinkActive="active" routerLink="/home"  href="">Home</a></li>
  <li>Saias</li>
  <li>Mini</li>
</ul>
    <h1>Mini</h1>
  `,
  styleUrls: ['../acss.component.css']
})
export class SMiniViewComponent {
}