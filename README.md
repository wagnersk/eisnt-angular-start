# Projeto Wild Canvas

## 1. Data Binding
- **Interpolation**  
  Exemplo: Linha 49 de `cart.component.ts`  

- **Property Binding**  
  Exemplo: Linha 11 de `product-detail.ts`  

- **Event Binding**  
  Exemplo: Linha 44 de `cart.component.ts`  

- **Two-Way Binding**  
  Exemplo: Linha 7 de `cart.component.ts`  

- **Style Binding**  
  Componente `input` em `product-list.ts`  
  > Valores definidos no TS permitem alteração dinâmica em eventos  

- **Class Binding**  
  Exemplo: Linha 27 de `product-list.ts`  

## 2. Pipes
Utilizados pelo menos 3 tipos diferentes:  

- **Pipe de formatação de valores**  
  Exemplo: Linha 91 de `checkout.component.ts`  

- **Pipe de transformação de texto**  
  Exemplo: Linha 87 de `checkout.component.ts`  

- **Pipe personalizado**  
  Arquivo: `pipes/discount.pipe.ts`  
  > Calcula desconto de 5%, 10%, 15% ou 20%  

## 3. Diretivas Estruturais
- **@for**  
  Exemplo: Linha 44 de `product-list.ts`  

- **@if**  
  Exemplo: Linha 145 de `checkout.component.ts`  

- **@switch**  
  Exemplo: Linha 4 de `product-item.ts`  

## 4. Navegação com Rotas
- Configuração de rotas para 4 páginas principais  
- Navegação por links ou navegação programática  
- Navbar visível em todas as páginas  

### Fluxo de Navegação
- **Navbar**  
  - "Wild Canvas" → Home  
  - "Carrinho" → Carrinho  

- **Product Detail**  
  - Botão "Voltar" → Home  
  - Botão "Carrinho" → Carrinho  

- **Carrinho**  
  - Botão "Avançar" → Checkout  
  - Botão "Wild Canvas" → Home  

- **Checkout**  
  - Navbar permite navegar para Home ou Carrinho  

## 5. Comunicação entre Componentes
- **@Input**  
  Passa dados de pai para filho  

- **@Output**  
  Emite eventos do filho para o pai  
  > Exemplo: adicionar produto ao carrinho  

- **Componentes Reutilizáveis**  
  - `product-item.ts` recebe dados via `@Input` do `@for` do pai  
  - Emite eventos via `@Output` para ações como adicionar ao carrinho ou navegar  
  - Contém validações (required, email, minLength)  
  - Botão desabilitado se o formulário for inválido  

## 6. Reactive Forms com FormBuilder
- Implementação na página de **Finalizar Compra**  
- Utilização de `FormBuilder` para criar o formulário  
- Validações obrigatórias com mensagens de erro  
- Botão de submissão desabilitado enquanto formulário for inválido  

## 7. Lifecycle Hooks
- **ngOnInit()**  
  Inicialização do componente  
  Exemplo: Linha 32 de `product-detail.ts`  

- **ngOnChanges()**  
  Detecta alterações em `@Input()`  
  Exemplo: Linha 21 de `product-item.ts`  

- **ngOnDestroy()**  
  Limpa recursos e subscriptions ao destruir o componente  
  Exemplo: Linha 49 de `product-detail.ts`  
