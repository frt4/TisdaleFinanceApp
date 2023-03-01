import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { UpcomingPaymentsTab } from './upcoming-payments-tab.page';

describe('UpcomingPaymentsTab', () => {
  let component: UpcomingPaymentsTab;
  let fixture: ComponentFixture<UpcomingPaymentsTab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpcomingPaymentsTab],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(UpcomingPaymentsTab);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
