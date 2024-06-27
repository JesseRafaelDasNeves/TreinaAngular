import { Component } from '@angular/core';
import { Contato } from '../../contato/contato';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AtividadeService } from '../atividade.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ContatoService } from 'src/app/componentes/contatos/contato.service';
import { Atividade } from '../atividade';

@Component({
  selector: 'app-edit-atividade',
  templateUrl: './edit-atividade.component.html',
  styleUrls: ['./edit-atividade.component.css']
})
export class EditAtividadeComponent {
  contatos: Contato[] = [];

  atividadeForm: FormGroup;

  constructor(private service: AtividadeService, private router: Router, private serviceContato: ContatoService, private activateRoute: ActivatedRoute) {
    this.atividadeForm = new FormGroup({
      id: new FormControl(''),
      titulo: new FormControl('', Validators.required),
      descricao: new FormControl(''),
      idContato: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    this.serviceContato.listar().subscribe((listaContatos) => {
      this.contatos = listaContatos;
    });
    console.log(this.contatos); 

    const id = this.activateRoute.snapshot.paramMap.get('id');
    console.log(id); 
    if(id) {
      this.service.buscarPorId(parseInt(id)).subscribe((atividade) => {
        this.atividadeForm.setValue(atividade);
      });
    }
  }

  alterarAtividade() {
    console.log(this.atividadeForm.value);
    if(this.atividadeForm.invalid) {
      alert('Formulário Inválido');
      return;
    }
    
    const contatoTela: Atividade = this.atividadeForm.value;
    this.service.editar(contatoTela).subscribe(() => {
      console.log('Atividade alterada com sucesso!');
      this.router.navigate(['/atividades']);
    }, 
    (error) => {
      alert('Erro ao alterar o Atividade');
      console.error('Erro ao alterar o Atividade:', error);
    });
  }
}
