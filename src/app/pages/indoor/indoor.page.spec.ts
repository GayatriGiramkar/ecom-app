import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IndoorPage } from './indoor.page';

describe('IndoorPage', () => {
  let component: IndoorPage;
  let fixture: ComponentFixture<IndoorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndoorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IndoorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
