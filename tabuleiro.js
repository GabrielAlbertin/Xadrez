class Tabuleiro{

    constructor(tabuleiro){
        this.tabuleiro = tabuleiro;
    }

    //esse metodo deve colocar a peca na posicao i, j no tabuleiro.
    addPeca(peca, i,j){
        this.tabuleiro[i][j] = peca.get_id();
        pecas[pecas.length] = peca;
    }

    //esse metodo deve remover a peca da posicao i, j do tabuleiro.
    rmPeca(i, j){
        this.tabuleiro[i][j] = 0;
        for(var x = 0; x < pecas.length; x++) {
            if(pecas[x].get_posI() == i && pecas[x].get_posJ() == j){
                //console.log(`Retirar: ${pecas.splice(x,1)}`);
                pecas.splice(x,1);
            }
        }
    }

    //esse metodo deve retornar uma referencia para o objeto localizado na posicao i, j do tabuleiro.
    getPeca(i, j){
        for(var x = 0; x < pecas.length; x++) {
            if(pecas[x].get_posI() == i && pecas[x].get_posJ() == j)
                return pecas[x];
        }
        return false;
    }

    //esse metodo deve retornar uma matriz 8x8. As posicoes vazias do tabuleiro devem ter 0. As demais, deve conter o id de cada peca.
    getRepresentacao(){

        this.tabuleiro = new Array(8);
        for(var i = 0; i < 8; i++) {
            this.tabuleiro[i] = [];
            for(var j = 0; j < 8; j++)
               this.tabuleiro[i][j] = 0; // ID_1 = 0
        }
        console.log(pecas);
        for(var i = 0; i < pecas.length; i++) {
    
            this.tabuleiro[pecas[i].get_posI()][pecas[i].get_posJ()] = pecas[i].get_id(); // ID_1 = 0
        }

        return this.tabuleiro;
    }
}