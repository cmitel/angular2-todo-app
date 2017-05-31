import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By, BrowserModule }   from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', function () {
  let de: DebugElement;
  let comp: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, BrowserModule ],
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('nav'));
    el = de.nativeElement;

    fixture.detectChanges();
  });

  it('should create component', () => expect(comp).toBeDefined() );

  it('should have expected 3 anchors', () => {    
    expect(el.querySelectorAll('a').length).toEqual(3);
  });

  it('should have expected the first anchor content to be equal to "Todo List App"', () => {
    expect(el.querySelector('a:first-of-type').textContent).toEqual('Todo List App');
  });

});