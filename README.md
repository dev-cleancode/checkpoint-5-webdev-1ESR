# Checkpoint 5 - Web Development

Aplicação Next.js que lista os agentes de Valorant e mostra os detalhes de cada um, consumindo a API pública valorant-api.com com axios.

## Grupo

Integrantes:

- 570881 - Gabriel Freitas da Silva Carvalho
- 572892 - Erick Martins Picolo
- 572171 - Guilherme Marcon Dantas
- 569782 - Luiz Felipe Cardoso de Oliveira

## Deploy

https://checkpoint-5-seven.vercel.app

## Sobre a API

Foi usada a Valorant API (https://valorant-api.com), uma API pública que traz dados do jogo Valorant, como agentes, mapas e armas. Neste projeto usamos apenas os agentes.

- Lista de agentes jogáveis: `https://valorant-api.com/v1/agents?isPlayableCharacter=true&language=pt-BR`
- Detalhe de um agente: `https://valorant-api.com/v1/agents/{uuid}`

Cada agente possui nome, descrição, função (Duelista, Sentinela, Controlador ou Iniciador), ícone, e imagem. O campo `uuid` é o identificador do agente e é usado na rota de detalhes.

## Funcionalidades

- Página inicial com a lista de agentes buscada com axios.
- Página de detalhes que busca o agente escolhido na API com axios.
- Uso de `useState` para guardar os dados e `useEffect` para carregá-los.
- Navegação entre as páginas com o Next Router (`Link`, `useParams` e `useRouter`).
- Props para passar dados entre os componentes.
- Comentários no código explicando os pontos principais.
