# Encurtador de URL
Encurtador de URL rodando em containers docker utilizando as framework ReactJS e NodeJS.

## Como funciona ?

O projeto tem um funcionamento básico: Você informa sua URL em um campo de texto, após apertar o botão o site irá retornar uma URL curta que irá redirecionar à URL informada. 

Projeto feito para portfólio e aprendizado para outros desenvolvedores.

## O que foi utilizado?

* Docker
* Nginx
* ReactJS
* NodeJS
* MongoDB

## Dependências utilizadas no ReactJS

* Axios
* React
* React-Dom
* React-Router-Dom
* React-Scripts
* SweetAlert

## Dependências utilizadas no NodeJS

* Cors
* Express
* HTTP
* Mongoose
* Shortid

## Mudança de valores

O projeto têm sua URL de redirecionamento pré-definida. Você pode modificar isso indo em: `api -> routes -> RedirectUrl.js` e mudar a variável `url_redirector`.