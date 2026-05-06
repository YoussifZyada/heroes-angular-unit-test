import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Status } from './status';

describe('StatusComponent', () => {
  let component: Status;
  let fixture: ComponentFixture<Status>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Status]
    });
    fixture = TestBed.createComponent(Status);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should initialize with a count of 0 and an unliked state', () => {
    expect(component.status()).toBe(0);
    expect(component.isLiked()).toBe(false);
  });

  describe('Toggle Interaction', () => {
    it('should increment the status to 1 and set liked state to true on the first click', () => {
      component.toggleLike();

      expect(component.status()).toBe(1);
      expect(component.isLiked()).toBe(true);
    });

    it('should revert status to 0 and set liked state to false when toggled twice (unlike)', () => {
      component.toggleLike();

      component.toggleLike();

      expect(component.status()).toBe(0);
      expect(component.isLiked()).toBe(false);
    });
  });
});