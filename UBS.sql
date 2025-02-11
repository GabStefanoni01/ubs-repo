create database ubs;
use ubs;

create table paciente (
	ID_Paciente serial primary key,
	Nome_Completo varchar(100),
	Nome_Social varchar(100),
	Data_Nascimento date,
	Sexo varchar(50),
	Nacionalidade varchar(100),
	Municipio_de_nascimento varchar(150),
	identidade varchar(20),
	CPF varchar(14),
	Raça varchar(100),
	Frequenta_escola boolean,
	Situacao_familiar varchar(200)
);
create table Deficiencia (
	ID_Deficiencia serial primary key,
	Visual boolean,
	Auditivo boolean,
	Motora boolean,
	Intelectual boolean
);
create table Dados_de_Contato(
	ID_Telefone serial primary key,
	Email varchar(255),
	Comercial varchar(15),
	Celular varchar(15),
	Residencial varchar(15),
	Contato varchar(50),
);



CREATE USER 'adm_ubs'@'%' IDENTIFIED BY 'teste1234';


GRANT SELECT, INSERT, UPDATE, DELETE ON ubs.* TO 'adm_ubs'@'%';


FLUSH PRIVILEGES;


CREATE VIEW lista_pacientes AS
SELECT 
    ID_Paciente,
    Nome_Completo,
    Nome_Social,
    Data_Nascimento,
    Sexo,
    Nacionalidade,
    Municipio_de_nascimento,
    identidade,
    CPF,
    Raça,
    Frequenta_escola,
    Situacao_familiar
FROM 
    paciente;

SELECT * FROM lista_pacientes;


