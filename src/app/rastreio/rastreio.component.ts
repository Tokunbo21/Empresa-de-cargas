import { Component, Injectable, OnInit } from '@angular/core';
import { Pedido } from '../model/Pedido';
import { RastreioService } from '../service/rastreio.service';

@Component({
  selector: 'app-rastreio',
  templateUrl: './rastreio.component.html',
  styleUrls: ['./rastreio.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class RastreioComponent implements OnInit {
  pedido: Pedido = new Pedido()

  constructor(
    private rasteioServe: RastreioService
  ) { }

  ngOnInit(): void {
      
   this.pedido = this.rasteioServe.getPedido() 
    
  }

}
