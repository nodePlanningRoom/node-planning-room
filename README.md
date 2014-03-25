node-planning-room
==================
h1. Node Planning Room

h2. Especificações Gerais

h3. Regras de negócio
* Nunca haverá uma sala vazia, sempre que todos se ausentarem de uma sala ela deverá ser excluída.
* Todo usuário que criar uma nova sala será inicialmente o room master
* Todos os usuários compartilharão a mesma tela da sala
* O sistema deverá permitir o uso de dispositivos touch
* CSS responsivo em todas as telas para uso em tablet e celular

h3. Tecnologias usadas
* Twitter Bootstrap
* Node.JS
* Socket.IO
* Express

h2. Atores

* Room Master
* Voter

h2. Casos de uso

h3. Tela Inicial

A tela inicial do sistema terá uma breve descrição do funcionamento do mesmo, uma lista de salas e um formulário para adicionar uma nova sala.

h4. Descrição

Texto descritivo do funcionamento do app.

h4. Lista de salas

A lista de sala deverá conter a lista de todas as salas atualmente criadas ordenadas e identificadas pela quantidade de pessoas dentro dela e um input do tipo search que permita fácil localização de uma sala com filtro instantâneo ao modificar o conteúdo do mesmo. Ao clicar em um dos itens da lista será solicitada a senha.
ex:
Sala1 (10)
Sala2 (8)
Sala3 (3)


h4. Formulário

Neste formulário teremos 2 campos e um botão para criar sala chamado "Start Room":
*Room Name*
Será o nome da sala que o usuário está criando
*Password*
Senha para entrar na sala


h3. Tela da Sala

Esta tela será dividida em

h4. Conteúdo

Será editável pelo Room Master para exibir o conteúdo que será estimado

h4. Controle

esta parte da tela será diferenciada para Voter e Room Master, ela mostrara botões de controle da votação, no caso do Voter aparecerá as opções para votar e no caso do Room Master botoes para iniciar votacao e outros.

h4. Usuários

Estarão todos os usuários ativos na sala e no momento que o Room Master clicar no botão "End Polling" será mostrado para todos neste mesmo lugar da página qual foi a escolha de todos os participantes.

