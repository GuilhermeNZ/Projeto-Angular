import { Component } from '@angular/core';


@Component({
  selector: 'saias-lapis',
  template: `
<ul class="breadcrumb">
  <li><a routerLinkActive="active" routerLink="/home"  href="">Home</a></li>
  <li>Saias</li>
  <li>Lápis</li>
</ul>
    <h1>Lápis</h1>
  `,
  styleUrls: ['../acss.component.css']
})
export class SLapisViewComponent {
}