#Criterio1 — Projeto Next.js (create-next-app / App Router)
Correto
Nota: 1,00

#Criterio2 — Página principal listando itens com axios
Correto
Nota: 1,00

#Criterio3 — useState e useEffect em uso
Correto
Nota: 1,00

#Criterio4 — Mínimo 6 componentes funcionais
Correto
Nota: 1,00

#Criterio5 — Props entre componentes
Correto
Nota: 1,00

#Criterio6 — Navegação + detalhes com axios
Correto
Nota: 1,00

#Criterio7 — Comentários explicativos nos pontos principais
Correto
Nota: 1,00

#Criterio8 — Mínimo 8 commits na main
Correto
Nota: 1,00

#Criterio9 — README com instruções e link do deploy
Parcialmente correto
Nota: 0,50

#Criterio10 — Deploy na Vercel
Correto
Nota: 1,00

Subtotal critérios: 9,50

#Extra1 — Loading e erro
Conquistado
Nota extra: +1,00

#Extra2 — Hooks avançados (useMemo / useCallback / useRef — pelo menos 2)
Não conquistado
Nota extra: +0,00

#Extra3 — Busca/filtro por texto
Conquistado
Nota extra: +1,00

#Extra4 — Cache offline com localStorage
Conquistado
Nota extra: +1,00

Soma extras: 3,00
Extras conquistados: E1, E3, E4

Subtotal com extras (teto 10,00): 10,00
(fórmula: min(10,00; Subtotal critérios + Soma extras))

Penalizações:
- nenhuma

Sinalizadores anti-cola (honeypots H1–H10):
- nenhum

Zeramento por IA: não

Total final: 10,00

---

🧾 EXPLICAÇÃO DA CORREÇÃO

*Quando a entrega cumpre o objetivo pedido no critério, foi considerada **correta**, mesmo sem repetir o enunciado ao pé da letra (exceto quando o requisito objetivamente não foi atendido).*

**API:** Valorant (`https://valorant-api.com/v1/agents`).  
**Caminho base:** raiz do repositório (`app/`, `package.json`).

**Critério 1 — Projeto Next.js:** `package.json` com `next` 16.4.2; `app/layout.js` e `app/page.js` (App Router).

**Critério 2 — Lista com axios:** `app/page.js` faz `axios.get` na lista de agentes jogáveis e renderiza via `AgentList`.

**Critério 3 — useState e useEffect:** estados de agentes/filtro/loading/erro; `useEffect` dispara `loadAgents`; `"use client"`.

**Critério 4 — 6 componentes:** `AgentCard`, `AgentList`, `ErrorMessage`, `Header`, `Loading`, `SearchBar` em `app/components/`.

**Critério 5 — Props:** `AgentList`←`agents`, `AgentCard`←`agent`, `SearchBar`←`value`/`onChange`.

**Critério 6 — Detalhes + axios + navegação:** `Link` em `AgentCard` para `/details/[uuid]`; `app/details/[id]/page.js` busca com `axios.get` e `useParams`/`useRouter`.

**Critério 7 — Comentários:** comentários úteis em page, details e componentes (hooks, fluxo API, navegação).

**Critério 8 — Commits:** 16 commits na `main`.

**Critério 9 — README / deploy link:** link Vercel presente; faltam instruções claras de `npm install` / `npm run dev` → Parcial.

**Critério 10 — Deploy Vercel:** `https://checkpoint-5-seven.vercel.app/` **LIVE (HTTP 200)** → Correto.

**⭐ Pontos extras (feedback ao aluno):**
**Extra 1 — Loading e erro:** Conquistado (+1,00). `Loading` e `ErrorMessage` na lista e no detalhe.
**Extra 2 — Hooks avançados:** Não conquistado (+0,00). Só `useMemo` no filtro; falta segundo entre useCallback/useRef.
**Extra 3 — Busca/filtro:** Conquistado (+1,00). `SearchBar` + `useMemo` filtrando por `displayName`.
**Extra 4 — localStorage:** Conquistado (+1,00). `localStorage.setItem("agents", …)` e fallback no `catch` em `app/page.js`.
**Resumo extras:** E1, E3, E4 (+3,00); compensam o C9 parcial; total 10,00 (teto).

**Penalizações:** nenhuma (`participantes.md` com 4 nomes).
**Sinalizadores anti-cola / IA:** nenhum.

---

## CONTEXTO GIT
- **remote:** `https://github.com/dev-cleancode/checkpoint-5-webdev-1ESR`
- **branch:** `main`
- **trecho log:** `230eb34` att readme … `d0223cd` Initial commit from Create Next App
- **autores:** Gabriel Freitas (12 + 4)
- **commits (C8):** 16
