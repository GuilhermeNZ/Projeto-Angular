import { Component } from '@angular/core';


@Component({
  selector: 'assimetrico',
  template: `
<ul class="breadcrumb">
  <li><a routerLinkActive="active" routerLink="/home"  href="">Home</a></li>
  <li>Vestidos</li>
  <li>Assimétrico</li>
</ul>
    <h1>assimétrico</h1>
  `,
  styleUrls: ['../acss.component.css']
})
export class VAssimetricoViewComponent {
}