import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule }   from '@angular/forms';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgxGaugeModule } from 'ngx-gauge-fix';
import { NgArrayPipesModule } from 'ngx-pipes';
import { NgxPopperModule } from 'ngx-popper';
import { SearchComponent } from './search.component';
import { GaugeComponent } from './gauge.component';
import { MapComponent } from './map.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NgbModule,
        ReactiveFormsModule,
        HttpClientModule,
        NgxPopperModule,
        NgxGaugeModule,
        NgArrayPipesModule,
        FontAwesomeModule,
        NgProgressModule,
        FontAwesomeModule
      ],
      declarations: [
        SearchComponent,
        GaugeComponent,
        MapComponent, ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
