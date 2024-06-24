import { Component } from '@angular/core';
import { Atividade } from '../atividade';
import { AtividadeService } from '../atividade.service';
import { Router } from '@angular/router';
import { ContatoService } from 'src/app/componentes/contatos/contato.service';
import { Contato } from '../../contato/contato';

@Component({
  selector: 'app-consulta-atividade',
  templateUrl: './consulta-atividade.component.html',
  styleUrls: ['./consulta-atividade.component.css']
})
export class ConsultaAtividadeComponent {
  displayedColumns: string[] = ['id', 'titulo', 'descricao', 'nomeContato', 'acao'];
  atividades: Atividade[] = [];

  constructor(private service: AtividadeService, private router: Router, private serviceContato: ContatoService) {
    
  }

  ngOnInit() {
    this.service.listar().subscribe((listaAtividade) => {
      this.atividades = listaAtividade;

      let contatos: Contato[] = [];
      this.serviceContato.listar().subscribe((listaContatos) => {
        contatos = listaContatos;
        
        this.atividades.forEach(atividade => {
          let contatoAtiv = contatos.find(cont => cont.id == atividade.idContato);
          atividade.nomeContato = contatoAtiv?.name;
        });
    
        console.log(this.atividades);
        console.log(contatos);
      });
    });
  }

  atualizarAtividade(atividade: Atividade) {
    this.router.navigate(['/atividade/edit', atividade.id]);
    console.log(atividade);
  }

  ecluirAtividade(atividade: Atividade) {
    console.log(atividade);
    this.service.excluir(atividade).subscribe(() => {
      // Sucesso ao excluir dos dados
      console.log('Atividade excluído com sucesso!');
      }, 
      (error) => {
      // Erro ao excluir os dados
      alert('Erro ao excluir o Atividade');
      console.error('Erro ao excluir o Atividade:', error);
    });
  }
}
