import jakarta.persistence.*;

@Entity
@Table(name = "pacientes")
public class Paciente {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nomeCompleto;
    private String cpf;
    private String nomeSocial;
    private String nomeMae;
    private String nomePai;
    private String dataNascimento;
    private String sexo;
    private String nacionalidade;
    private String municipioNascimento;
    private String racaCor;
    private String frequentaEscola;
    private String escolaridade;
    private String situacaoFamiliar;
    private String vinculoEstabelecimento;
    private String deficiencia;
    private String contatoCelular;
    private String contatoResidencial;
    private String contatoComercial;
    private String email;

    // Getters e Setters
}
