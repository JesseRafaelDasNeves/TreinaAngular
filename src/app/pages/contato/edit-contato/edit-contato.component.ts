import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContatoService } from 'src/app/componentes/contatos/contato.service';
import { Contato } from '../contato';

@Component({
  selector: 'app-edit-contato',
  templateUrl: './edit-contato.component.html',
  styleUrls: ['./edit-contato.component.css']
})
export class EditContatoComponent implements OnInit {

  contatoForm: FormGroup;
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(private service: ContatoService, private router: Router, private activateRoute: ActivatedRoute) {
    this.contatoForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      cep: new FormControl('', Validators.required)
    });
    
  }

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.paramMap.get('id');
    console.log(id); 
    if(id) {
      this.service.buscarPorId(parseInt(id)).subscribe((contato) => {
        console.log(this.contatoForm.value); 
        this.contatoForm.setValue(contato);
        console.log(this.contatoForm.value); 
      });
    }
  }

  getErrorMessage() {
    if (this.email.hasError('email')) {
      return 'e-mail invalido';
    }

    return this.email.hasError('required') ? 'Você deve informar um valor' : '';
  }

  alteraContato() {
    if(this.contatoForm.invalid) {
      alert('Formulário Inválido');
      return;
    }
    
    const contatoTela: Contato = this.contatoForm.value;
    this.service.editar(contatoTela).subscribe(() => {
      // Sucesso no envio dos dados
      console.log('Usuário alterado com sucesso!');
      // Limpar o formulário
      this.router.navigate(['/']);
    }, 
    (error) => {
      // Erro ao enviar os dados
      alert('Erro ao alterar o usuário');
      console.error('Erro ao alterar o usuário:', error);
    });
  }

}
