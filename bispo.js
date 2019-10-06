class Bispo extends Peca{

    constructor(tipo, posI, posJ, id){
        super(tipo, posI, posJ, id);
    }
    mover(tabuleiro, i, j){
        var x = this.posI;
        var y = this.posJ;
        if(this.tipo == "B"){
            if( (this.posI - i) > 0 && (this.posJ - j) < 0){//Diagonal superior a direita
                while(x != i && y != j){
                    x--;
                    y++;
                    if(x == i && y == j){
                        if(tabuleiro.tabuleiro[i][j] > 6){
                            tabuleiro.rmPeca(i,j);
                            return true;
                        }
                        if(tabuleiro.tabuleiro[i][j] == 0)
                            return true;
                        
                    }
                    if(tabuleiro.tabuleiro[x][y] != 0)
                        return false;
                    
                }
            }

            if( (this.posI - i) < 0 && (this.posJ - j) > 0){//Diagonal inferior a esquerda
                while(x != i && y != j){
                    x++;
                    y--;
                    if(x == i && y == j){
                        if(tabuleiro.tabuleiro[i][j] > 6){
                            tabuleiro.rmPeca(i,j);
                            return true;
                        }
                        if(tabuleiro.tabuleiro[i][j] == 0)
                            return true;
                        
                    }
                    if(tabuleiro.tabuleiro[x][y] != 0)
                        return false;
                    
                }
            }
            if( (this.posI - i) > 0 && (this.posJ - j) > 0){//Diagonal superior a esquerda
                while(x != i && y != j){
                    x--;
                    y--;
                    if(x == i && y == j){
                        if(tabuleiro.tabuleiro[i][j] > 6){
                            tabuleiro.rmPeca(i,j);
                            return true;
                        }
                        if(tabuleiro.tabuleiro[i][j] == 0)
                            return true;
                        
                    }
                    if(tabuleiro.tabuleiro[x][y] != 0)
                        return false;
                    
                }
            }
            if( (this.posI - i) < 0 && (this.posJ - j) < 0){//Diagonal inferiro a direta
                while(x != i && y != j){
                    x++;
                    y++;
                    if(x == i && y == j){
                        if(tabuleiro.tabuleiro[i][j] > 6){
                            tabuleiro.rmPeca(i,j);
                            return true;
                        }
                        if(tabuleiro.tabuleiro[i][j] == 0)
                            return true;
                        
                    }
                    if(tabuleiro.tabuleiro[x][y] != 0)
                        return false;
                    
                }
            }
        }
        if(this.tipo == "P"){
            if( (this.posI - i) > 0 && (this.posJ - j) < 0){//Diagonal superior a direita
                while(x != i && y != j){
                    x--;
                    y++;
                    if(x == i && y == j){
                        if(tabuleiro.tabuleiro[i][j] <= 6){
                            tabuleiro.rmPeca(i,j);
                            return true;
                        }  
                    }
                    if(tabuleiro.tabuleiro[x][y] != 0)
                        return false;
                    
                }
            }

            if( (this.posI - i) < 0 && (this.posJ - j) > 0){//Diagonal inferior a esquerda
                while(x != i && y != j){
                    x++;
                    y--;
                    if(x == i && y == j){
                        if(tabuleiro.tabuleiro[i][j] <= 6){
                            tabuleiro.rmPeca(i,j);
                            return true;
                        }                       
                    }
                    if(tabuleiro.tabuleiro[x][y] != 0)
                        return false;
                    
                }
            }
            if( (this.posI - i) > 0 && (this.posJ - j) > 0){//Diagonal superior a esquerda
                while(x != i && y != j){
                    x--;
                    y--;
                    if(x == i && y == j){
                        if(tabuleiro.tabuleiro[i][j] <= 6){
                            tabuleiro.rmPeca(i,j);
                            return true;
                        }                        
                    }
                    if(tabuleiro.tabuleiro[x][y] != 0)
                        return false;
                    
                }
            }
            if( (this.posI - i) < 0 && (this.posJ - j) < 0){//Diagonal inferiro a direta
                while(x != i && y != j){
                    x++;
                    y++;
                    if(x == i && y == j){
                        if(tabuleiro.tabuleiro[i][j] <= 6){
                            tabuleiro.rmPeca(i,j);
                            return true;
                        }                       
                    }
                    if(tabuleiro.tabuleiro[x][y] != 0)
                        return false;
                    
                }
            }
        }
        return false;
    }
}