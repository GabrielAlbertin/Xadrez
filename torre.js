class Torre extends Peca{

    constructor(tipo, posI, posJ, id){
        super(tipo, posI, posJ, id);
    }

    mover(tabuleiro, i, j){
        if(this.tipo == "B") { 
            if(this.posI == i && this.posJ != j){
                var aux = this.posJ;
                while(aux != j){
                    if(this.posJ > j){
                        aux--;
                    }else{
                        aux++;
                    }
                    if(aux == j){
                        if(tabuleiro.tabuleiro[i][j] > 6){
                            tabuleiro.rmPeca(i,j);
                            return true;
                        }
                    }
                    if(tabuleiro.tabuleiro[i][aux] != 0){
                        return false;
                    }
                }
                return true;
            }else if(this.posI != i && this.posJ == j){
                var aux = this.posI;
                while(aux != i){
                    if(this.posI > i){
                        aux--;
                    }else{
                        aux++;
                    }
                    if(aux == i){
                        if(tabuleiro.tabuleiro[i][j] > 6){
                            tabuleiro.rmPeca(i,j);
                            return true;
                        }
                    }

                    if(tabuleiro.tabuleiro[aux][j] != 0){
                        return false;
                    }

                }
                return true;
            }else{
                return false;
            }
        }
        //Peca preta
        if(this.tipo == "P") {
            if(this.posI == i && this.posJ != j){
                var aux = this.posJ;
                while(aux != j){
                    if(this.posJ > j){
                        aux--;
                    }else{
                        aux++;
                    }
                    if(aux == j){
                        if(tabuleiro.tabuleiro[i][j] <= 6 && tabuleiro.tabuleiro[i][j] != 0){
                            tabuleiro.rmPeca(i,j);
                            return true;
                        }
                    }
                    if(tabuleiro.tabuleiro[i][aux] != 0){
                        return false;
                    }
                }
                return true;
            }else if(this.posI != i && this.posJ == j){
                var aux = this.posI;
                while(aux != i){
                    if(this.posI > i){
                        aux--;
                    }else{
                        aux++;
                    }
                    if(aux == i){
                        if(tabuleiro.tabuleiro[i][j] <= 6 && tabuleiro.tabuleiro[i][j] != 0){
                            tabuleiro.rmPeca(i,j);
                            return true;
                        }
                    }
                    if(tabuleiro.tabuleiro[aux][j] != 0){
                        return false;
                    }
                }
                return true;
            }else{
                return false;
            } 
        }
        return true;
    }
}