import { Component, Input } from '@angular/core';

@Component({
  selector: 'proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent {

  @Input() nombre: String='';
  @Input() descripcion: String="";
  @Input() link: String='';

}
