import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contato } from 'src/app/pages/contato/contato';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  private readonly API = 'http://localhost:3000/contatos';

  constructor(private http: HttpClient) { }

  listar(): Observable<Contato[]> {
    return this.http.get<Contato[]>(this.API);
  }

  buscarPorId(id: number): Observable<Contato> {
    const url = `${this.API}/${id}`;
    return this.http.get<Contato>(url);
  }

  criar(contato: Contato): Observable<Contato> {
    return this.http.post<Contato>(this.API, contato);
  }

  editar(contato: Contato): Observable<Contato> {
    const url = `${this.API}/${contato.id}`;
    return this.http.patch<Contato>(url, contato);
  }
  
  excluir(contato: Contato): Observable<Contato> {
    const url = `${this.API}/${contato.id}`;
    return this.http.delete<Contato>(url);
  }

}
