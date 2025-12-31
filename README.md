1. Data Binding
	•	Interpolation
Exemplo: Linha 49 de cart.component.ts

	•	Property Binding
Exemplo: Linha 11 de product-detail.ts

	•	Event Binding
Exemplo: Linha 44 de cart.component.ts

	•	Two-Way Binding
Exemplo: Linha 7 de cart.component.ts

	•	Style Binding
Componente input em product-list.ts (valores no arquivo TS para representar dinamicamente; alterações em eventos tornam os estilos dinâmicos)

	•	Class Binding
Exemplo: Linha 27 de product-list.ts

2. Pipes

Utilizados pelo menos 3 tipos de pipes diferentes:
	•	Pipe de formatação de valores

Exemplo: Linha 91 de checkout.component.ts
	•	Pipe de transformação de texto

Exemplo: Linha 87 de checkout.component.ts
	•	Pipe personalizado

Arquivo: pipes/discount.pipe.ts
Funcionalidade: calcular desconto de 5%, 10%, 15% e 20%

3. Diretivas Estruturais

	•	@for
Exemplo: Linha 44 de product-list.ts

	•	@if
Exemplo: Linha 145 de checkout.component.ts 

	•	@switch
Exemplo: Linha 4 de product-item.ts


 
4. Navegação com Rotas
Fluxo de Navegação
		Navbar
    •	Clicando em “Wild Canvas” → Home
    •	Clicando em “Carrinho” → Carrinho

		Product Detail
    •	Botão “Voltar” → Retorna para Home
    •	Botão “Carrinho” → Vai para Carrinho

	 Carrinho
    •	Botão “Avançar” → Checkout
    •	Botão “Wild Canvas” → Home
    
	 Checkout
	  •	Navbar permite navegar para Home ou Carrinho

5. Comunicação entre Componentes
	•	@Input
Passa dados de componente pai para filho

	•	@Output
Emite eventos do componente filho para o pai
	•	Exemplo: adicionar quadro ao carrinho

	•	Componentes Reutilizáveis
    •	product-item.ts recebe dados via @Input do @for do pai
    •	Emite eventos com @Output para navegar ou adicionar ao carrinho
    •	Contém validações (required, email, minLength) e desabilita botão quando inválido
 

6. Reactive Forms com FormBuilder
	•	Implementação na página de Finalizar Compra
	•	Utilização de FormBuilder para criar o formulário
	•	Inclui validações obrigatórias e mensagens de erro
	•	Botão de submissão desabilitado enquanto formulário for inválido
