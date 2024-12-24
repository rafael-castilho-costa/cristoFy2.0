import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbar} from "@angular/material/toolbar";

@Component({
  standalone: true,
  selector: 'app-membros',
  imports: [MatIconModule, MatToolbar],
  templateUrl: './membros.component.html',
  styleUrls: ['./membros.component.css']
})
export class MembrosComponent implements OnInit {
onSubmit(): void {
  if (this.cadastroForm.valid) {
    console.log ('Formulário Enviado!', this.cadastroForm.value);
    alert('Cadastro Realizado com Sucesso!');
    this.cadastroForm.reset();
  } else {
    alert('Preencha os campos obrigatórios corretamente.');
  }
}
  cadastroForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.cadastroForm = this.fb.group({
      nome: ['',[Validators.required, Validators.minLength(3)]],
      cpf: ['', [Validators.required, Validators.pattern(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/), this.validarCpf,]],
      email: ['',[Validators.required, Validators.email]],
      telefone: ['',[Validators.required, Validators.pattern(/^\(\d{2}\) \d{4,5}-\d{4}$/)]],
      endereco: [''],
      nascimento: ['', Validators.required],
      sexo: ['', Validators.required],
    });
   }

  ngOnInit(): void {}

  validarCpf(control:any) {
    const cpf = control.value.replace(/\D/g,'');
    if (!cpf || cpf.lenght !== 11 || /^(\d)\1+$/.test(cpf)) {
      return { cpfInvalido: true};
    }

    let soma = 0;
    let resto;

    for (let i = 1; i <= 9; i++) {
      soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(9,10))) {
      return {cpfInvalido: true};
    }

    soma = 0;

    for (let i = 1; i <= 10; i++) {
      soma += parseInt (cpf.substring(i- 1, i)) * (12 - i);
    }

    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(10,11))) {
      return {cpfInvalido: true};
    }

    return null;

  }

}
