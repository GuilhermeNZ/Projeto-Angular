import { Component } from '@angular/core';


@Component({
  selector: 'saias-envelope',
  template: `
<ul class="breadcrumb">
  <li><a routerLinkActive="active" routerLink="/home"  href="">Home</a></li>
  <li>Saias</li>
  <li>Envelope</li>
</ul>
    <h1>Envelope</h1>
  `,
  styleUrls: ['../acss.component.css']
})
export class SEnvelopeViewComponent {
}