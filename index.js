console.log('-------------------------------------------');
console.log('                  PROJETO               ');
console.log('             Sistema de Livros             ');
console.log('              Érika de Freitas         ');
console.log('-------------------------------------------');

//Vamos iniciar o nosso banco de dados
const livros = require("./database");

const pegarEntrada = require("readline-sync");                                                              //Comando para ler do teclado a resposta do usuário
var entradaResposta = "";                                                                                  //Var entradaResposta é uma var porque vai estar mudando dentro do loop  

do {                                                                                                      //Isso aqui irá se repetir enquanto o usuário quiser.  

console.log("Bem vinda ao nosso sistema de livros! O que voce deseja fazer?");
    entradaResposta = pegarEntrada.question(" A - Tabela de livros \n B - Livros ordenados por numeros de paginas \n C - Recomendacoes de livros \n D - Lista de desejos \n E - Buscar livro por categoria \n F - Sair do sistema").toLocaleLowerCase();

    switch  (entradaResposta) {                   

        case "a" : console.table(livros);                                                                   //Caso a resposta A, o programa mostrará a lista de livros e vai reinicar o menu.  
            break;

        case "b" : console.log("Esses são todos os nossos livros, ordenados por número de páginas:");         //Caso a resposta B, o programa mostrará a lista de livros ordenando de forma crescente de número de páginas e vai reinicar o menu.
                        livros.sort((a,b) => a.paginas - b.paginas);                                          //A função Sort vai ordenar os livros da lista em A -> B caso A tenha menos números de páginas que B.  
                        console.table(livros);    
            break;

        case "c" : const recomendados = livros.filter(livro => livro.leu === true && livro.recomenda === true);  //Caso a resposta C, o programa mostrará a lista de livros recomendados e vai reinicar o menu.
                        console.table(recomendados);                                                             //Filtrando o array Livros para buscar os livros lidos E recomendados.
            break;
        
        case "d" :  const listaDesejo = livros.filter(livro => livro.leu === false);                        //Caso a resposta D, o programa mostrará a lista de desejos e vai reinicar o menu.
                        console.table(listaDesejo);                                                         //Filtrando o array Livros para buscar os livros que ainda não foram lidos.
            break; 

        case "e" : console.log("Temos as seguintes categorias: Romance, Ficcao e Poesia."); 

                        const qualCategoria = pegarEntrada.question("Qual categoria voce quer ver?").toLocaleLowerCase();
                        console.log('--------------------------------------');

                        console.log("Esses são os livros dessa categoria:");  
                    
                        function categoria(livros) {                            //A função categoria recebe livros como parâmetro e vai retornar para a variável "qual categoria" a categoria de livros que o usuário escolheu.    
                            return livros.categoria === qualCategoria;           
                        }

                        const categoriasEncontradas = livros.filter(categoria);
                        console.table(categoriasEncontradas);
            break;

        default : console.log("Saindo do sistema!");                                                        //Caso a resposta E, o programa encerra.   
        
    }

} while (entradaResposta != "f"); 