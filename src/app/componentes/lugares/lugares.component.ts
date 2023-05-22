import { Component, Input } from '@angular/core';

@Component({
  selector: 'lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']
})
export class LugaresComponent {
  
  @Input() ruta: String='';
  @Input() nombre: String='';
  @Input() puesto_carrera: String='';
  @Input() periodo: String='';
  @Input() descripcion: String='';

}
