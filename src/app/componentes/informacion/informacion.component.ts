import { Component, Input } from '@angular/core';

@Component({
  selector: 'informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})

export class InformacionComponent {

  @Input() titulo: string='';
  @Input() ruta: String='';
  @Input() nombre: String='';
  @Input() puesto_carrera: String='';
  @Input() periodo: String='';
  @Input() descripcion: String='';

}
