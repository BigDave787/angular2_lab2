/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MilesToKiloComponent } from './miles-to-kilo.component';

describe('MilesToKiloComponent', () => {
  let component: MilesToKiloComponent;
  let fixture: ComponentFixture<MilesToKiloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MilesToKiloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MilesToKiloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
