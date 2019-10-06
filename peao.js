class Peao extends Peca{

    constructor(tipo, posI, posJ, id){
        super(tipo, posI, posJ, id);
    }

    mover(tabuleiro, i, j){
        if(this.tipo == "B"){
            // Verifica se o peao nao esta indo para tras
            if(this.posI < i)
                return false;

            //Verifica colisao 
            if( this.posJ == j  && tabuleiro.tabuleiro[i][j] != 0)
                return false;
            
            //"Comendo" a peca do inimigo
            if(tabuleiro.tabuleiro[i][j] > 6 && Math.abs(this.posI - i) == 1 && Math.abs(this.posJ - j) == 1){
                tabuleiro.rmPeca(i,j);
                return true;
            }

            //Verifica as condicoes do primeiro movimento
            if(this.posI == 6){
                if(Math.abs(this.posI - i) > 2)
                    return false;
                if(tabuleiro.tabuleiro[i+1][j] != 0 && Math.abs(this.posI - i) == 2)//Verifica se o peao nao ira pular uma peca
                    return false;     
            }else{
                if(Math.abs(this.posI - i) > 1)
                    return false;   
            }
        }

        if(this.tipo == "P"){   
            // Verifica se o peao nao esta indo para tras
            if(this.posI > i)
                return false;
            
            //Verifica colisao 
            if( this.posJ == j  && tabuleiro.tabuleiro[i][j] != 0)
                return false;
            
            //"Comendo" a peca do inimigo
            if(tabuleiro.tabuleiro[i][j] <= 6  && Math.abs(this.posI - i) == 1 && Math.abs(this.posJ - j) == 1 && tabuleiro.tabuleiro[i][j] != 0){
                    tabuleiro.rmPeca(i,j);
                    return true;
            }

            //Verifica as condicoes do primeiro movimento
            if(this.posI == 1){
                if(Math.abs(this.posI - i) > 2)
                    return false;              
                if(tabuleiro.tabuleiro[i-1][j] != 0 && Math.abs(this.posI - i) == 2)//Verifica se o peao nao ira pular uma peca
                    return false;
            }else{
                if(Math.abs(this.posI - i) > 1)
                     return false;
            }
        }

        //Não permite movimentar para o lado
        if(this.posJ != j)
            return false;
        
        return true;
    }
}