import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Contato } from '../contato';
import { ContatoService } from 'src/app/componentes/contatos/contato.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-contato',
  templateUrl: './create-contato.component.html',
  styleUrls: ['./create-contato.component.css']
})
export class CreateContatoComponent implements OnInit {

  contatoForm: FormGroup;
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(private service: ContatoService, private router: Router) {
    this.contatoForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      cep: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {}

  getErrorMessage() {
    if (this.email.hasError('email')) {
      return 'e-mail invalido';
    }

    return this.email.hasError('required') ? 'Você deve informar um valor' : '';
  }

  criarContato() {
    if(this.contatoForm.invalid) {
      alert('Formulário Inválido');
      return;
    }
    
    const contatoTela: Contato = this.contatoForm.value;
    this.service.criar(contatoTela).subscribe(() => {
      console.log('Usuário criado com sucesso!');
      this.router.navigate(['/']);
    }, 
    (error) => {
      alert('Erro ao criar o usuário');
      console.error('Erro ao criar o usuário:', error);
    });
  }

}
