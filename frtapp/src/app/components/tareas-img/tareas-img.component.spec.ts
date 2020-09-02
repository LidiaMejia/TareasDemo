import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasImgComponent } from './tareas-img.component';

describe('TareasImgComponent', () => {
  let component: TareasImgComponent;
  let fixture: ComponentFixture<TareasImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TareasImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TareasImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
