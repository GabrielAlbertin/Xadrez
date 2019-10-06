class Rei extends Peca{

    constructor(tipo, posI, posJ, id){
        super(tipo, posI, posJ, id);
    }
    mover(tabuleiro, i, j){

        if(this.tipo == "B"){
            console.log(Math.abs(this.posI - i))
            console.log(Math.abs(this.posj - j))
            if(Math.abs(this.posI - i) <= 1 && Math.abs(this.posJ - j) <=1){
                if(tabuleiro.tabuleiro[i][j] > 6){
                    tabuleiro.rmPeca(i,j);
                    return true;
                }
                if(tabuleiro.tabuleiro[i][j] == 0)
                    return true;
            }
        }
        if(this.tipo == "P"){
            if(Math.abs(this.posI - i) <= 1 && Math.abs(this.posJ - j) <=1){
                if(tabuleiro.tabuleiro[i][j] <= 6){
                    tabuleiro.rmPeca(i,j);
                    return true;
                }
            }
        }
        
        return false
    }
}