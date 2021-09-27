import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pedido } from '../model/Pedido';

@Injectable({
  providedIn: 'root'
})
export class RastreioService {

  pedido : Pedido = new Pedido
  constructor() { }


  getPedido(){
    return this.pedido
  }


  setPedido(pedido:Pedido) {
    this.pedido = pedido
  }


}
