import { Injectable } from '@angular/core';
import { Experiment } from './experiment';
import { EXPERIMENTS } from './mock-experiments';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperimentService {

  getHeroes(): Observable<Experiment[]> {
    return of(EXPERIMENTS);
  }

  constructor() { }
}
