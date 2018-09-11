export class Carro{

    tanque: number;
    passageiros: number;
    km: number;



    estado():void{
        console.log(this.tanque, this.passageiros, this.km)
    }

    abastecer(gasolina: number):void{
        this.tanque+=(gasolina);
        if (this.tanque>10) {this.tanque=10}  
    }

    embarcar(embarcarPessoa: number):void{
        this.passageiros+=(embarcarPessoa);
        if (this.passageiros>2){this.passageiros=2}
    }

    desembarcar(desembarcarPessoa: number):void{
        this.passageiros-=(desembarcarPessoa);
        if (this.passageiros<0){this.passageiros=0}
    }

    andar(km:number):void{
        if (this.passageiros>0){
            if(this.tanque>0){
                if (this.tanque*10>=this.km){
                    this.tanque-=this.km/10;
                    this.km+=(km)
                }
            else console.log ("Combustivel insuficiente")
                
        }
        else console.log("Passageiros insuficientes")
            
        
    }
}
}