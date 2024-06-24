import { Component, OnInit } from '@angular/core';
import { Contato } from 'src/app/pages/contato/contato';
import { ContatoService } from '../contato.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contato-consulta',
  templateUrl: './contato-consulta.component.html',
  styleUrls: ['./contato-consulta.component.css']
})
export class ContatoConsultaComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'email', 'cep', 'acao'];
  contatos: Contato[] = [];

  constructor(private service: ContatoService, private router: Router) {
    
  }

  ngOnInit() {
    this.service.listar().subscribe((listaContatos) => {
      this.contatos = listaContatos;
    });
  }

  atualizarContato(contato: Contato) {
    this.router.navigate(['/contato/edit', contato.id]);
    console.log(contato);
  }

  ecluirContato(contato: Contato) {
    console.log(contato);
    this.service.excluir(contato).subscribe(() => {
      // Sucesso ao excluir dos dados
      console.log('Usuário excluído com sucesso!');
      }, 
      (error) => {
      // Erro ao excluir os dados
      alert('Erro ao excluir o usuário');
      console.error('Erro ao excluir o usuário:', error);
    });
  }
}
