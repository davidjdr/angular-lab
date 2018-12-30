import { Component, OnInit } from '@angular/core';
import { ExperimentService } from '../experiment.service';
import { Experiment } from '../experiment';

@Component({
  selector: 'app-labo',
  templateUrl: './labo.component.html',
  styleUrls: ['./labo.component.css']
})
export class LaboComponent implements OnInit {

  experiments: Experiment[];
  selectedExp: Experiment;

  constructor(private experimentService: ExperimentService) { }

  ngOnInit() {
  }

  onSelect(exp: Experiment): void {
    this.selectedExp = exp;
  }

  getHeroes(): void {
    this.experimentService.getHeroes()
        .subscribe(heroes => this.experiments = heroes);
  }

}
