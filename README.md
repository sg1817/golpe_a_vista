# Golpe à Vista #

Site educativo sobre prevenção a golpes digitais, feito com *HTML, CSS e JavaScript*. Projeto final da disciplina de Desenvolvimento Front-end para Web (Centro Universitário de João Pessoa, Prof. Israel Cunha).

Autor: Severino Sérgio de Brito Lélis Netto

Sobre o projeto

Muitas pessoas, principalmente quem tem pouca familiaridade com tecnologia, caem em golpes porque as informações de prevenção estão espalhadas e em linguagem difícil. O Golpe à Vista reúne os golpes mais comuns no Brasil (Pix, falsa central do banco, link por SMS, WhatsApp clonado e vaga de emprego falsa) em um só lugar, com linguagem simples e um treino interativo.

Público-alvo: usuários comuns de celular e internet, com foco em pessoas menos acostumadas com tecnologia e em estudantes.

# Páginas #

## main.html ##	
Página inicial, golpe da semana e caminhos para o resto do site

## tipos.html ##
Os tipos de golpe, atalhos por canal e tabela comparativa

## treino.html ##	
Quiz “É golpe ou é verdade?” com pontuação

## cai-no-golpe.html ##	
Checklist do que fazer depois de cair em um golpe

## glossario.html ##	
Termos explicados em linguagem simples

## contato.html ##
Formulário para sugerir golpes, com validação

A navegação entre as páginas é feita pelo menu que aparece no topo de todas elas.

# Funcionalidades #

## HTML ##

Estrutura da página com div e classes

Títulos, parágrafos, listas ordenadas e não ordenadas

Tabela comparativa de golpes

Lista de definições (dl, dt, dd) no glossário

Citações (blockquote) nas mensagens do treino

Formulário com campos de texto, área de texto e botão

Links internos entre páginas e âncoras (#whatsapp, #sms...)

## CSS ##

Identidade visual com faixa amarela de alerta

Layout centralizado com largura máxima

Estilo de botões, tabela, cards e formulário

:hover nos links do menu
:target para destacar o golpe escolhido na página de tipos

## JavaScript ##

fonte.js: botões A+ e A- que aumentam e diminuem o tamanho da letra

quiz.js: conta os pontos do quiz e mostra se a resposta está certa ou errada

formulario.js: confere se nome, e-mail (com @) e mensagem foram preenchidos

## Como executar ##

-Baixe ou clone a pasta do projeto.
-Abra o arquivo main.html em qualquer navegador (Chrome, Edge, Firefox).

## Limitações ##
O formulário de contato não envia os dados para lugar nenhum, porque o projeto não tem servidor. Ele apenas valida os campos e mostra uma mensagem.

No quiz é possível clicar mais de uma vez na mesma pergunta e somar pontos.

O checklist de “Caí no golpe” não guarda o progresso ao sair da página.

## Observações ##
Todas as mensagens de exemplo do treino são fictícias.
As informações do site são educativas e gerais. Em caso de golpe real, procure o seu banco pelo número oficial e registre um boletim de ocorrência.