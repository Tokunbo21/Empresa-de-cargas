import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pedido } from '../model/Pedido';
import { PedidoService } from '../service/pedido.service';
import { RastreioService } from '../service/rastreio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  codigo : string = ''
  pedido : Pedido = new Pedido
  constructor(
    private pedidoService: PedidoService,
    private rastreioService: RastreioService,
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  getPedido() {
    this.pedidoService.findPedidoByCodigo(this.codigo).subscribe((resp:Pedido)=>{
      this.pedido= resp
      this.rastreioService.setPedido(this.pedido)
      this.route.navigate(['/rastreio'])
    })
  }
}
