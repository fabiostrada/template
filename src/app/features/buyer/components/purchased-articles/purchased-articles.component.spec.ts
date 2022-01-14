import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasedArticlesComponent } from './purchased-articles.component';

describe('PurchasedArticlesComponent', () => {
  let component: PurchasedArticlesComponent;
  let fixture: ComponentFixture<PurchasedArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchasedArticlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasedArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
