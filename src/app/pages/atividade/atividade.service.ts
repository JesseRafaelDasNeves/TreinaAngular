import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Atividade } from './atividade';

@Injectable({
  providedIn: 'root'
})
export class AtividadeService {

  private readonly API = 'http://localhost:3000/atividades';

  constructor(private http: HttpClient) { }

  listar(): Observable<Atividade[]> {
    return this.http.get<Atividade[]>(this.API);
  }

  buscarPorId(id: number): Observable<Atividade> {
    const url = `${this.API}/${id}`;
    return this.http.get<Atividade>(url);
  }

  criar(atividade: Atividade): Observable<Atividade> {
    return this.http.post<Atividade>(this.API, atividade);
  }

  editar(atividade: Atividade): Observable<Atividade> {
    const url = `${this.API}/${atividade.id}`;
    return this.http.patch<Atividade>(url, atividade);
  }
  
  excluir(atividade: Atividade): Observable<Atividade> {
    const url = `${this.API}/${atividade.id}`;
    return this.http.delete<Atividade>(url);
  }
}
