import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Routes, RouterModule } from "@angular/router";
import { ReactiveFormsModule }   from '@angular/forms';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';
import { NgxGaugeModule } from 'ngx-gauge-fix';
import { NgArrayPipesModule } from 'ngx-pipes';
import { NgxPopperModule } from 'ngx-popper';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { GaugeComponent } from './search/gauge.component';
import { MapComponent } from './search/map.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IpinfoService } from './ipinfo.service';
import { AboutComponent } from './about/about.component';
import { SupportComponent } from './support/support.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { BadsearchComponent } from './badsearch/badsearch.component';


const routes: Routes = [
 { path: '', component: HomeComponent },
 { path: 'about', component: AboutComponent },
 { path: 'support', component: SupportComponent },
 { path: 'home', component: HomeComponent },
 { path: 'search/ip/:ip', component: SearchComponent },
 { path: 'search/domain/:domain', component: SearchComponent },
 { path: 'error/:error', component: BadsearchComponent },
 { path: 'search', redirectTo: '/home' },
 { path: '**', redirectTo: '/error/404' }

];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    GaugeComponent,
    MapComponent,
    NavbarComponent,
    AboutComponent,
    SupportComponent,
    HomeComponent,
    FooterComponent,
    BadsearchComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    NgbModule.forRoot(),
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    NgxPopperModule,
    NgxGaugeModule,
    NgArrayPipesModule,
    FontAwesomeModule,
    NgProgressModule.forRoot({
      spinner: false,
      color: '#ff9900',
      trickleSpeed: 600,
      thick: true
    }),
    NgProgressHttpModule.forRoot()
  ],
  providers: [IpinfoService, Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
