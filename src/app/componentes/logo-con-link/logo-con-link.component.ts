import { Component, Input } from '@angular/core';

@Component({
  selector: 'logoConLink',
  templateUrl: './logo-con-link.component.html',
  styleUrls: ['./logo-con-link.component.css']
})
export class LogoConLinkComponent {

  @Input() link: string = '';
  @Input() ruta: string = '';
  @Input() nombre: string = '';

}
