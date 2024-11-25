import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  standalone: true,  // Usado se o componente for standalone, se for parte de um módulo, remova isso
  imports: [FormsModule],  // Adicionar qualquer módulo que o componente precise aqui, como FormsModule, etc.
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  nomeCompleto: string = ''; 
  nomeSocial: string = '';     
  nomeDaMae: string = '';      
  dataNascimento: string = ''; 
  sexo: string = '';           
  nacionalidade: string = '';  
  municipioNascimento: string = ''; 
  racaCor: string = '';        
  frequentaEscola: boolean = false; 
  escolaridade: string = '';   
  situacaoFamiliar: string = ''; 
  estabelecimentoVinculo: string = ''; 
  estabelecimentoCadastro: string = ''; 
  deficiencia: string = '';    
  deficienciaVisual: boolean = false; 
  deficienciaAuditiva: boolean = false; 
  deficienciaMotora: boolean = false; 
  deficienciaIntelectual: boolean = false; 
  dadosContatoCelular: string = '';  
  dadosContatoResidencial: string = ''; 
  dadosContatoComercial: string = ''; 
  dadosContatoContato: string = ''; 
  dadosContatoEmail: string = ''; 
  origemEndereco: string = '';   
  dadosEndereco: string = '';    
  cpf: string = '';              
  identidade: string = '';       

  // Método para submissão do formulário
  onSubmit(): void {
    // Aqui você pode realizar o que for necessário com os dados do formulário
    console.log("Formulário enviado:", this);
  }
}
