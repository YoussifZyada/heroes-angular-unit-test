import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Status } from './status';

describe('Status component', () => {
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

it('should render initial status as "♥ 0" and button not liked', () => {
    expect(component.status()).toBe(0);
    expect(component.isLiked()).toBe(false);
});

it('should increment status to 1 and mark button as liked when clicked once', () => {
    component.toggleLike();
    expect(component.status()).toBe(1);
    expect(component.isLiked()).toBe(true);
});

it('should decrement status back to 0 and remove liked class when clicked twice', () => {
    component.toggleLike();
    component.toggleLike();
    expect(component.status()).toBe(0);
    expect(component.isLiked()).toBe(false);
});
});