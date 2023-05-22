import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BotonLoginComponent } from './componentes/boton-login/boton-login.component';
import { LogoConLinkComponent } from './componentes/logo-con-link/logo-con-link.component';
import { SeccionComponent } from './componentes/seccion/seccion.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { InformacionComponent } from './componentes/informacion/informacion.component';
import { LugaresComponent } from './componentes/lugares/lugares.component';
import { BotonConLinkComponent } from './componentes/boton-con-link/boton-con-link.component';
import { ProyectoComponent } from './componentes/proyecto/proyecto.component';
import { InformacionPersonalComponent } from './componentes/informacion-personal/informacion-personal.component';

@NgModule({
  declarations: [
    AppComponent,
    BotonLoginComponent,
    LogoConLinkComponent,
    SeccionComponent,
    BannerComponent,
    InformacionComponent,
    LugaresComponent,
    BotonConLinkComponent,
    ProyectoComponent,
    InformacionPersonalComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
