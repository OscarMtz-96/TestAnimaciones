import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movimiento',
  templateUrl: './movimiento.component.html',
  styleUrls: ['./movimiento.component.css']
})
export class MovimientoComponent implements OnInit {

  @Input() mes: string;
  hide = true;
  panel = true;

  constructor() { }

  ngOnInit(): void {
  }

  hiden(){
    this.hide = !this.hide;
  }

  deleting(id){
    console.log(id);
  }

}
