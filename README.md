# Recuperação de senha

**RF (Requisitos Funcionais)**

- O usuário deve poder recuperar a sua senha informando o seu e-mail;
- O usuário deve receber um e-mail com instruções de Recuperação de senha;
- O usuário deve poder resetar a sua senha.

**RNF (Requisitos Não Funcionais)**

- Utilizar Mailtrap para testar envios em ambiente de desenvolvimento;
- Uitilizar Amazon SES para envios em produção;
- O envio de e-mails deve acontecer em segundo plano (background job).

**RN (Regras de Negócio)**

- O link enviado para resetar a senha deve expirar em duas horas;
- O usuário precisa confirmar a nova senha ao resetá-la.

# Atualização do perfil

**RF (Requisitos Funcionais)**

- O usuário deve poder atualizar o seu nome, e-mail e senha;

**RN (Regras de Negócio)**

- O usuário não pode alterar o seu e-mail para um e-mail já utilizado na aplicação;
- Para alterar a sua senha, o usuário deve informar a senha antiga;
- Para atualizar a sua senha o usuário deve confirmar a sua senha.

# Painel do prestador

**RF (Requisitos Funcionais)**

- Prestador deve poder listar seus agendamentos de um dia específico;
- Prestador deve receber notificação sempre que houver um novo agendamento;
- Prestador deve poder visualizar as notificações não lidas.

**RNF (Requisitos Não Funcionais)**

- Os agendamentos do prestador no dia devem ser armazenados em cache;
- As notificações do prestador devem ser armazenadas no MongoDB;
- As notificações do prestador devem ser enviadas em tempo real usando o Socket.io.

**RN (Regras de Negócio)**

- A notificação deve ter um status de lida ou não lida para que o prestador possa controlar.

# Agendamento de serviços

**RF (Requisitos Funcionais)**

- O usuário deve poder listar todos os prestadores de serviços cadastrados;
- O usuário deve poder visualizar os dias de um mês que têm, pelo menos, um horário disponível de determinado prestado;
- O usuário deve poder listar os horários disponíveis em um dia específico de um determinado prestador;
- Usuário deve poder realizar agendamento com um prestador.

**RNF (Requisitos Não Funcionais)**

- A listagem de prestadores deve ser armazenada em cache.

**RN (Regras de Negócio)**

- Cada agendamento deve durar uma hora;
- Os agendamentos devem estar disponíveis entre 8h00 e 18h00:
  - primeiro agendamento às 08h00
  - último agendamento às 17h00;
- Usuário não pode agendar em um horário já ocupado;
- Usuário não pode agendar em um horário passado;
- Usuário não pode agendar serviços com o seu perfil de prestador.
