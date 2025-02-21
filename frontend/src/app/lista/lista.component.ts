import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importando o FormsModule
import { Paciente } from '../model/paciente';
import { PacienteService } from '../service/paciente.service';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [CommonModule, FormsModule], // Adicionando FormsModule aqui
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
  providers: [PacienteService]
})
export class ListaComponent {
  mensagem: string = '';
  pacientes: Paciente[] = [];
  pacientesFiltrados: Paciente[] = [];  // Variável para armazenar os pacientes filtrados
  pacienteSelecionado: Paciente | null = null;
  pesquisaTermo: string = '';  // Variável para armazenar o termo de pesquisa

  constructor(private service: PacienteService) {
    this.listarPacientes();
  }

  // Lista os pacientes da API
  listarPacientes() {
    this.service.listar().subscribe({
      next: (data) => {
        this.pacientes = data;
        this.pacientesFiltrados = data;  // Inicializando os pacientes filtrados com todos os pacientes
      },
      error: (msg) => {
        this.mensagem = 'Ocorreu um erro ao carregar os pacientes.';
      }
    });
  }

  // Filtra os pacientes com base no termo de pesquisa
  filtrarPacientes() {
    if (this.pesquisaTermo.trim() === '') {
      // Se o termo de pesquisa estiver vazio, exibe todos os pacientes
      this.pacientesFiltrados = this.pacientes;
    } else {
      const termo = this.pesquisaTermo.toLowerCase(); // Converte o termo de pesquisa para minúsculas
      this.pacientesFiltrados = this.pacientes.filter(paciente =>
        paciente.nome.toLowerCase().includes(termo) ||
        paciente.cpf.includes(termo) // Filtra pacientes pelo nome ou CPF
      );
    }
  }

  editar(paciente: Paciente) {
    this.pacienteSelecionado = { ...paciente };
  }

  salvar() {
    if (this.pacienteSelecionado) {
      this.service.salvar(this.pacienteSelecionado).subscribe({
        next: (response) => {
          this.mensagem = 'Paciente atualizado com sucesso!';
          this.listarPacientes();
          this.cancelarEdicao();
        },
        error: (err) => {
          this.mensagem = 'Erro ao salvar o paciente.';
        }
      });
    }
  }

  cancelarEdicao() {
    this.pacienteSelecionado = null;
  }

  excluir(paciente: Paciente) {
    this.service.excluir(paciente.id).subscribe({
      next: () => {
        this.mensagem = 'Paciente excluído com sucesso!';
        this.listarPacientes();
      },
      error: (err) => {
        this.mensagem = 'Erro ao excluir o paciente.';
      }
    });
  }
}
