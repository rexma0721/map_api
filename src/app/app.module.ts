import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AngularCountriesFlagsModule } from 'angular-countries-flags'
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { MapsAllModule } from '@syncfusion/ej2-angular-maps';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MapsAllModule,
    BrowserModule,
    AngularCountriesFlagsModule,
    AppRoutingModule,
    AgmJsMarkerClustererModule,
    AgmCoreModule.forRoot({
      apiKey: '',
      libraries: ['places'],
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
