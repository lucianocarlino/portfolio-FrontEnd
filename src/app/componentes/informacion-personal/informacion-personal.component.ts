import { Component, Input } from '@angular/core';

@Component({
  selector: 'informacionPersonal',
  templateUrl: './informacion-personal.component.html',
  styleUrls: ['./informacion-personal.component.css']
})
export class InformacionPersonalComponent {

  @Input() ruta: String='';
  @Input() apynom: String='';
  @Input() descripcion: String='';

}
