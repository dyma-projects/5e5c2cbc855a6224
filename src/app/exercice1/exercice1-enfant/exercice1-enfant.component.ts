import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {
  @Input() compteur: number;
  @Output() changeCompteur = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  increment() {
    this.compteur++;
    this.changeCompteur.emit({
      value: this.compteur
    });
  }
  decrement() {
    this.compteur--;
    this.changeCompteur.emit({
      value: this.compteur
    });
  }
}
