import { Component } from '@angular/core';


@Component({
  selector: 'saias-enviesada',
  template: `
<ul class="breadcrumb">
  <li><a routerLinkActive="active" routerLink="/home"  href="">Home</a></li>
  <li>Saias</li>
  <li>Enviesada</li>
</ul>
    <h1>Enviesada</h1>
  `,
  styleUrls: ['../acss.component.css']
})
export class SEnviesadaViewComponent {
}