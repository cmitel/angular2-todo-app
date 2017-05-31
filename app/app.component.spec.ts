import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

describe('AppComponent', function () {
  let de: DebugElement;
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ AppComponent, HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('.container'));
  });

  it('should create component', () => expect(comp).toBeDefined() );

  it('should have expected 2 element', () => {
    fixture.detectChanges();
    expect(de.children.length).toEqual(2);
  });

  it('should have expected element app-header', () => {
    fixture.detectChanges();
    expect(de.nativeElement.querySelector('app-header')).toBeDefined();
  });

  it('should have expected element router-outlet', () => {
    fixture.detectChanges();
    expect(de.nativeElement.querySelector('router-outlet')).toBeDefined();
  });

});