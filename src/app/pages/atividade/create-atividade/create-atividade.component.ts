import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AtividadeService } from '../atividade.service';
import { Router } from '@angular/router';
import { Atividade } from '../atividade';
import { ContatoService } from 'src/app/componentes/contatos/contato.service';
import { Contato } from '../../contato/contato';

@Component({
  selector: 'app-create-atividade',
  templateUrl: './create-atividade.component.html',
  styleUrls: ['./create-atividade.component.css']
})
export class CreateAtividadeComponent {
  contatos: Contato[] = [];

  atividadeForm: FormGroup;

  constructor(private service: AtividadeService, private router: Router, private serviceContato: ContatoService) {
    this.atividadeForm = new FormGroup({
      titulo: new FormControl('', Validators.required),
      descricao: new FormControl(''),
      idContato: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    this.serviceContato.listar().subscribe((listaContatos) => {
      this.contatos = listaContatos;
    });
  }

  criarAtividade() {
    console.log(this.atividadeForm.value);
    if(this.atividadeForm.invalid) {
      alert('Formulário Inválido');
      return;
    }
    
    const contatoTela: Atividade = this.atividadeForm.value;
    this.service.criar(contatoTela).subscribe(() => {
      // Sucesso no envio dos dados
      console.log('Atividade criado com sucesso!');
      // Limpar o formulário
      this.router.navigate(['/atividades']);
    }, 
    (error) => {
      // Erro ao enviar os dados
      alert('Erro ao criar o Atividade');
      console.error('Erro ao criar o Atividade:', error);
    });
  }
}
