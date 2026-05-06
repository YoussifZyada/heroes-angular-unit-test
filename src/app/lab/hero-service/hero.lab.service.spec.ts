import { provideHttpClient } from '@angular/common/http';
import {
    HttpTestingController,
    provideHttpClientTesting,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { IHero } from '../../models/ihero';
import { HeroServiceForLab } from './hero.lab.service';

describe('hero service (for lab) http testing:', () => {
    let service: HeroServiceForLab;
    let httpTesting: HttpTestingController;
    const heroesUrl = 'http://localhost:3000/heroes';

    beforeEach(() => {
    TestBed.configureTestingModule({
        providers: [provideHttpClient(), provideHttpClientTesting()],
    });

    service = TestBed.inject(HeroServiceForLab);
    httpTesting = TestBed.inject(HttpTestingController);
    });

it('should make a GET request to fetch hero by id and emit the returned hero', () => {
    const fakeHero: IHero = { id: 1, name: 'Superman', strength: 100 };

    service.getHero(1).subscribe((hero: IHero) => {
        expect(hero).toEqual(fakeHero);
    });

    const req = httpTesting.expectOne(`${heroesUrl}/1`);
    expect(req.request.method).toBe('GET');

    req.flush(fakeHero);
    });

it('should make a PUT request to update a hero and emit the updated hero', () => {
    const updatedHero: IHero = { id: 2, name: 'Batman', strength: 90 };

    service.updateHero(updatedHero).subscribe((hero: IHero) => {
    expect(hero).toEqual(updatedHero);
    });

    const req = httpTesting.expectOne(`${heroesUrl}/2`);
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toEqual(updatedHero);
    expect(req.request.headers.get('Content-Type')).toBe('application/json');

    req.flush(updatedHero);
});

afterEach(() => {
    httpTesting.verify();
});
});