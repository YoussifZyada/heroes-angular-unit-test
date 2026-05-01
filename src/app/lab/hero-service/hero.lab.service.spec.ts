import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HeroServiceForLab } from './hero.lab.service';
import { Ihero } from '../../models/ihero';

describe("hero service (for lab) http testing:", () => {
    let service: HeroServiceForLab;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [HeroServiceForLab]
        });
        service = TestBed.inject(HeroServiceForLab);
        httpMock = TestBed.inject(HttpTestingController);
    });

    it("should make a GET request to fetch hero by id and emit the returned hero", () => {
        const mockHero: Ihero = {
            id: 1, name: 'Honda',
            strength: 0
        };
        
        service.getHero(1).subscribe(hero => expect(hero).toEqual(mockHero));
        
        const req = httpMock.expectOne('http://localhost:3000/heroes/1');
        expect(req.request.method).toBe('GET');
        req.flush(mockHero);
    });

    it("should make a PUT request to update a hero and emit the updated hero", () => {
        const updatedHero: Ihero = {
            id: 1, name: 'Honda Updated',
            strength: 0
        };
        
        service.updateHero(updatedHero).subscribe(hero => expect(hero).toEqual(updatedHero));
        
        const req = httpMock.expectOne('http://localhost:3000/heroes/1');
        expect(req.request.method).toBe('PUT');
        expect(req.request.body).toEqual(updatedHero);
        req.flush(updatedHero);
    });
});