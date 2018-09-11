declare function require(msg : string) : any;
var readline = require('readline-sync');

import { Carro } from "./carro";
    let carro: Carro = new Carro()

    carro.tanque=0;
    carro.passageiros=0;
    carro.km=0;

while(true){
    let possiveisComandos : string = "" + 
        "embarcar - adicionar passageiros\n" +
        "desembarcar - retirar passageiros\n" + 
        "abastecer - colocar gasolina\n" + 
        "andar - dirigir\n" + 
        "estado - mostrar estado\n" + 
        "parar - sair do programa\n";
    console.log(possiveisComandos);

    let comando : string = readline.question("Digite um comando: ");
    if(comando == "parar"){
        console.log("Até a próxima");
        break;
    }
    switch(comando){
        case "estado" :
            carro.estado () ;
            break;

        case "embarcar" :
            let embarcarPessoa: number= readline.question("Quantidade de pessoas: ");
            carro.embarcar(embarcarPessoa);
            break
        
         case "desembarcar" :
            let desembarcarPessoa: number= readline.question("Quantidade de pessoas: ");
            carro.desembarcar(desembarcarPessoa);
            break
        
         case "abastecer" :
            let gasolina: number= readline.question("Quantidade de gasolina: ");
            carro.abastecer(gasolina);
            break

        case "andar" :
            let km: number= readline.question("Distancia: ");
            carro.andar(km);
            break         
}

}