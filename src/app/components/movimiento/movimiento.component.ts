import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movimiento',
  templateUrl: './movimiento.component.html',
  styleUrls: ['./movimiento.component.css']
})
export class MovimientoComponent implements OnInit {

  @Input() mes: string;
  hide = true;

  constructor() { }

  ngOnInit(): void {
  }

  hideBtn(){
    var hidden = $('.message-window');
    if (hidden.hasClass('visible')){
      hidden.animate({"left":"100%"}, "slow").removeClass('visible');
  } else {
      hidden.animate({"left":"75%"}, "slow").addClass('visible');
  }
  }

}
