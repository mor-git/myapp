import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LegumeModalComponent } from './legume-modal.component';

describe('LegumeModalComponent', () => {
  let component: LegumeModalComponent;
  let fixture: ComponentFixture<LegumeModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegumeModalComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LegumeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
