import { Component, Injectable, OnInit } from '@angular/core';
import { Pedido } from '../model/Pedido';

@Component({
  selector: 'app-rastreio',
  templateUrl: './rastreio.component.html',
  styleUrls: ['./rastreio.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class RastreioComponent implements OnInit {
pedido :Pedido = new Pedido()

  constructor() { }

  ngOnInit(): void {
    
  }

  setPedido(pedido:Pedido){
    this.pedido=pedido
    console.log(this.pedido)
  }
}
