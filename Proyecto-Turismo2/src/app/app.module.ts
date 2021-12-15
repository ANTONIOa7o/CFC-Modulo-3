import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MuseosComponent } from './components/museos/museos.component';

import { RouterModule, Routes } from '@angular/router';
import { MuseoDetalleComponent } from './components/museo-detalle/museo-detalle.component';
import { UbicacionMuseoComponent } from './components/ubicacion-museo/ubicacion-museo.component';
import { AgmCoreModule } from '@agm/core';



import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ErrorComponent } from './components/error/error.component';


const misRutas: Routes = [
  {path:'home', component: HomeComponent},
  {path:'museos', component: MuseosComponent},
  {path:'museo_detalle/:codigo', component: MuseoDetalleComponent},
  {path:'ubicacion_museo', component: UbicacionMuseoComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'**',component:ErrorComponent}
  
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MuseosComponent,
    MuseoDetalleComponent,
    UbicacionMuseoComponent,    
    HomeComponent,
    ErrorComponent
   
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(misRutas),
    AgmCoreModule.forRoot({
      apiKey: ''
    }),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http);
        },
        deps: [HttpClient]
      }
    }),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
