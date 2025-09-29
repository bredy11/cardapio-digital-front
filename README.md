# cardapio-digital-front

🍽️ Cardápio Digital Multirestaurante

Este projeto tem como objetivo desenvolver um sistema de cardápio digital para múltiplos restaurantes.
Cada restaurante poderá gerenciar seu próprio cardápio e os clientes poderão consultar os menus de forma prática e rápida.

🚀 Tecnologias Utilizadas

Vue 3 (Composition API)

PrimeVue (biblioteca de componentes UI)

Pinia (gerenciamento de estado)

Vue Router

Axios (consumo de APIs)

SCSS (estilização)

🏗️ Arquitetura do Projeto

O projeto segue o padrão MVVM (Model–View–ViewModel):

Model → Representa as entidades principais (ex.: Restaurante, Cardapio, Prato).

View → Templates (.vue), usando os componentes do PrimeVue para UI.

ViewModel → Lógica de negócio e estado (composables e Pinia), que conecta Model e View.

📂 Estrutura de Pastas

A hierarquia de pacotes é organizada por módulos/funcionalidades:

src/
 ├─ assets/                  # Imagens, ícones, fontes
 ├─ components/              # Componentes globais reutilizáveis
 ├─ composables/             # Composables (ex.: useAuth, useMenu, useCart)
 ├─ models/                  # Modelos de dados (TS/JS classes ou interfaces)
 ├─ services/                # Serviços de API (ex.: restauranteService, cardapioService)
 ├─ store/                   # Pinia stores (estado global)
 ├─ views/                   # Telas principais (organizadas por módulo)
 │   ├─ restaurante/
 │   │   ├─ RestauranteView.vue
 │   │   └─ EditarRestauranteView.vue
 │   ├─ cardapio/
 │   │   ├─ CardapioView.vue
 │   │   └─ EditarPratoView.vue
 │   └─ cliente/
 │       └─ ClienteCardapioView.vue
 ├─ router/                  # Configuração do Vue Router
 │   └─ index.js
 ├─ App.vue
 └─ main.js

🎨 UI com PrimeVue

Será utilizada a biblioteca PrimeVue para acelerar o desenvolvimento da interface.
Exemplos de uso:

DataTable → Listagem de pratos e cardápios

Dialog → Formulário de cadastro/edição

Card → Exibir informações de pratos/restaurantes

Toast → Exibir mensagens de feedback
