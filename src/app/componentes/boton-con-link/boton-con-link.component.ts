import { Component, Input } from '@angular/core';

@Component({
  selector: 'boton-con-link',
  templateUrl: './boton-con-link.component.html',
  styleUrls: ['./boton-con-link.component.css']
})
export class BotonConLinkComponent {

  @Input() link: String='';

}
