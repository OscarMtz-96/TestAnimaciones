import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.component.html',
  styleUrls: ['./movimientos.component.css']
})
export class MovimientosComponent implements OnInit {

  mes: string;
  cargando = true;

  constructor() { }

  ngOnInit(): void {
  this.cargando = true;

  }

  selectedMes(text) {
    this.mes = text;
  }
  
  share() {
    this.cargando = true;
    Swal.fire({
      title: 'Compartir',
      showCancelButton: true,
      cancelButtonColor: '#BEBEBE',
      confirmButtonColor: '#C433FF',
      confirmButtonText: 'Compartir',
      cancelButtonText: 'Cerrar',
      reverseButtons: true,
      html:
      '<div class="container">' +

      '<i class="far fa-file-excel fa-2x mt-3"></i>' +


      '<h5 class="mt-1">Nombre del archivo:</h5>' +

      'Lista_HolaMundo.xls' +

      '<div class="mt-5">Formato: ' +

      '<div class="btn-group btn-group-toggle" data-toggle="buttons">' +

      '<label class="btn btn-success">' +
      '<input type="radio" name="options" id="option1" checked> XLS' +
      '</label>' +

      '<label class="btn btn-success">' +
      '<input type="radio" name="options" id="option2"> CSV' +
      '</label>' +

      '</div>' +

      '</div>' +

      '<div class="mt-3 mb-4">Enviar a: ' +
      '<button class="btn btn-outline-primary"><i class="fab fa-dropbox"></i> Dropbox</button>' +
      '</div>' +

      '</div>'
    }).then((result) => {
      if (result.value) {
        setTimeout(() => {
          this.cargando = false;
          console.log(this.cargando);
        }, 5000);
        Swal.fire({
          title: 'Espere un momento...',
          html:
          '<h5>Estamos subiendo el archivo a su cuenta de dropbox</h5>' +
          '<h6>oscar@gmail.com</h6>' +
          '<img *ngIf="!cargando" class="rounded-circle" src="assets/oie_trans.gif" height="130px" class="" alt="">'
        });
      }
    });
  }

}
