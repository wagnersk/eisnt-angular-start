Olá Professor!

Pensei em estruturar da seguinte forma 

1. Data Binding
    • Interpolation -> Linha 49 de cart.component.ts


    • Property Binding -> Linha 11 de product-detail.ts

    • Event Binding -> Linha 44 de cart.component.ts

    • Two-Way Binding -> Linha 7 de cart.component.ts
    
    • Style Binding -> componente input do product-list.ts ( com os valores no arquivo TS para representar a maneira dinamica, se alterar algum desses valores por algum evento , ele se torna dinamico)

    • Class Binding -> Linha 27 de product-list.ts



2. Pipes
    Utilize pelo menos 3 pipes diferentes, que podem incluir:
    • Pipes de formatação de valores -> Linha 91 de checkout.component.ts
    • Pipes de transformação de texto Linha 87 de checkout.component.ts
    • Pipe personalizado - -> pipes/discount.pipe.ts ( pipe para calcular o desconto , inventei que tem desconto 5%,  10%,  15% e 20%)

3. Diretivas Estruturais
    • @for - -> Linha 44 de product-list.ts
    • @if - -> Linha 145 de checkout.component.ts
    • @switch - -> Linha 4 de product-item.ts

 
4. Navegação com Rotas
• Configuração de rotas para as 4 páginas principais
• Navegação entre páginas através de links ou botões
• Utilização do RouterLink ou navegação programática
• Menu de navegação visível em todas as páginas

->> Nav bar , ao clicar em Wild canvas , voce esta na home , 
 -> Navbar , ao clicar no carrinho vc esta nele

-> Em product detail , vc pode ir para o carrinho , ou voltar pelo botão de voltar

-> Do carrinho voce pode avancar para checkout , ou clicar em wild canvas que volta para home

-> Do checkout voce pode navegar pela navbar , para home ou para o carrinho


5. Comunicação entre Componentes
• @Input - Para passar dados de componente pai para filho
• @Output - Para emitir eventos de componente filho para pai (ex: adicionar
quadro ao carrinho)

• Implementação em pelo menos um componente reutilizável (ex: card de
produto, item do carrinho)

 Validações obrigatórias (required, email, minLength, etc.)
• Apresentação de mensagens de erro para campos inválidos
• Desabilitar o botão de submissão enquanto o formulário for inválido


product-item.ts -> Aqui eu tenho o @input que recebe o json do que vai ser rendertizado pelo @for do componente pai
                  o @output que é o evento da funcao para pegar o ID para passar para pela tela do product-detail
                  tenho as validacoes , e desabilito quando tem erro.
                  e ele mesmo é o componente reutilizavel mas que não estou reutilizando.

6. Reactive Forms com FormBuilder

• Implementação na página de Finalizar Compra
• Utilização de FormBuilder para criar o formulário
