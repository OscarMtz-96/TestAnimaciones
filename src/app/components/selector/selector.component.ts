import { Component, OnInit } from '@angular/core';
import {NgbDateStruct, NgbTimeStruct, NgbTimepickerConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ValidadoresService } from '../../services/validadores.service';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css'],
  providers: [NgbTimepickerConfig]
})
export class SelectorComponent implements OnInit {

  model: NgbDateStruct;
  meridian = true;

  cuenta: string;
  cuentaP: string;
  fa: string;
  faP: string;
  type: string;
  typeP: string;
  animation: string;
  animationP: string;
  animationMes: string;
  description = false;
  movementIncome: any[] = [];
  mes: string;

  incomeForm: FormGroup;

  time: NgbTimeStruct = {hour: 13, minute: 30, second: 0};

  constructor(private config: NgbTimepickerConfig,
              private fb: FormBuilder,
              private validadores: ValidadoresService) {

    // customize default values of ratings used by this component tree
    config.seconds = false;
    config.spinners = true;
    config.meridian = true;

    this.createForm();

  }

  ngOnInit(): void {
  }

  get cantidadNoValida(){
    return this.incomeForm.get('cantidad').invalid && this.incomeForm.get('cantidad').touched;
  }

  get cuentaNoValida() {
    return this.incomeForm.get('cuenta').invalid && this.incomeForm.get('cuenta').touched;
  }

  get categoriaNoValida(){
    return this.incomeForm.get('categoria').invalid && this.incomeForm.get('cantidad').touched;
  }

  get fechaNoValida(){
    return this.incomeForm.get('fecha').invalid && this.incomeForm.get('fecha').touched;
  }

  get horaNoValida(){
    return this.incomeForm.get('hora').invalid && this.incomeForm.get('hora').touched;
  }

  selected(text, fa, type){
    this.cuenta = text;
    this.fa = fa;
    this.type = type;
    this.animation = 'animate__fadeIn';
    this.cargarIncome();
  }

  selectedPeriodo(text, fa, type){
    this.cuentaP = text;
    this.faP = fa;
    this.typeP = type;
    this.animationP = 'animate__fadeIn';
  }

  selectedMes(text) {
    this.mes = text;
    this.animationMes = 'animate__fadeIn';
  }

  removeClass(){
    this.animation = '';
    this.animationP = '';
    this.animationMes = '';
  }

  saveIncome() {
    if (this.incomeForm.invalid) {
      return this.incomeForm.markAllAsTouched();
    }
    console.log(this.incomeForm);
    this.movementIncome.push(this.incomeForm.value);
    console.log(this.movementIncome);
  }

  createForm() {
    this.incomeForm = this.fb.group({
      cantidad : ['', [Validators.required]],
      cuenta : [ '', [Validators.required]],
      categoria : [ '' , [Validators.required]],
      descripccion : [ ],
      fecha : ['', [Validators.required]],
      hora : ['', [Validators.required]],
      type : ['', [Validators.required]],
    });
  }

  cargarIncome() {
    this.incomeForm.reset({
    cantidad: '1500',
    cuenta: this.cuenta,
    categoria: 'Sueldo',
    descripccion: 'descripccion corta',
    type: 'Ingreso',
  });
}


}
