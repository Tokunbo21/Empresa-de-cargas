import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedido } from '../model/Pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(
    private http: HttpClient
  ) { }

  findPedidoByCodigo(codigo: string):Observable<Pedido> {
    return this.http.get<Pedido>(`http://localhost:8080/pedido/codigo/${codigo}`);
  }
}
