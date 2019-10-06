class Cavalo extends Peca{

    constructor(tipo, posI, posJ, id){
        super(tipo, posI, posJ, id);
    }

    mover(tabuleiro, i, j){
        var x = this.posI - i;
        var y = this.posJ - j;
        if(this.tipo == "B"){
            if((x == 2 && y == 1) || (x==1 && y==2) || (x == -1 && y == 2)|| (x == -2 && y == 1) || (x == -2 && y == -1)|| (x == -1 && y == -2) || (x == 1 && y == -2) || (x == 2 && y == -1)){
                if(tabuleiro.tabuleiro[i][j] > 6){
                    tabuleiro.rmPeca(i,j);
                    return true;
                }
                if(tabuleiro.tabuleiro[i][j] == 0)
                    return true;
                
            }
            return false;
        }
        if(this.tipo == "P"){
            if((x == 2 && y == 1) || (x==1 && y==2) || (x == -1 && y == 2)|| (x == -2 && y == 1) || (x == -2 && y == -1)|| (x == -1 && y == -2) || (x == 1 && y == -2) || (x == 2 && y == -1)){
                if(tabuleiro.tabuleiro[i][j] <= 6){
                    tabuleiro.rmPeca(i,j);
                    return true;
                }
            }
            return false;
        }
    }
}