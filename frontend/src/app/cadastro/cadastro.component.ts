import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { Paciente } from '../model/paciente';
import { PacienteService } from '../service/paciente.service';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
  providers: [PacienteService]
})

export class CadastroComponent {
  public obj: Paciente = new Paciente();
  public mensagem: string = "";

  constructor(private service: PacienteService) { }

  public salvar() {
    console.log("Enviando dados:", this.obj); // Debug para ver os dados antes de enviar

    this.service.salvar(this.obj).subscribe({
      next: (data) => {
        this.mensagem = "Paciente inserido com sucesso!";
        alert(this.mensagem);
        this.limpar(); // Agora só limpa após sucesso
      },
      error: (msg) => {
        this.mensagem = "Ocorreu um erro! Tente novamente mais tarde.";
        alert(this.mensagem);
        console.error("Erro ao salvar:", msg); // Debug do erro
      }
    });
  }

  public limpar() {
    this.obj = new Paciente();
  }
}
