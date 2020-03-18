import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerUserPartenaireComponent } from './creer-user-partenaire.component';

describe('CreerUserPartenaireComponent', () => {
  let component: CreerUserPartenaireComponent;
  let fixture: ComponentFixture<CreerUserPartenaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreerUserPartenaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerUserPartenaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
