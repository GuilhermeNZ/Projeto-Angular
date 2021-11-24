import { Component } from '@angular/core';


@Component({
  selector: 'saias-dropeada',
  template: `
<ul class="breadcrumb">
  <li><a routerLinkActive="active" routerLink="/home"  href="">Home</a></li>
  <li>Saias</li>
  <li>Dropeada</li>
</ul>
    <h1>Dropeada</h1>
  `,
  styleUrls: ['../acss.component.css']
})
export class SDropeadaViewComponent {
}