import { Component } from '@angular/core';


@Component({
  selector: 'saias-pregas',
  template: `
<ul class="breadcrumb">
  <li><a routerLinkActive="active" routerLink="/home"  href="">Home</a></li>
  <li>Saias</li>
  <li>Pregas</li>
</ul>
    <h1>Pregas</h1>
  `,
  styleUrls: ['../acss.component.css']
})
export class SPregasViewComponent {
}