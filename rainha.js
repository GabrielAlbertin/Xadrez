class Rainha extends Peca{
    constructor(tipo, posI, posJ, id){
        super(tipo, posI, posJ, id);
    }
    mover(tabuleiro, i, j){
        var x = this.posI;
        var y = this.posJ;
        if(this.tipo == "B"){
            //==================================HORI/VERT============================================
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
            }
            //=======================================================BORDAS============================================
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

            //===================================================BORDA===================================================
            if(Math.abs(this.posI - i) <= 1 && Math.abs(this.posJ - j) <=1){
                if(tabuleiro.tabuleiro[i][j] > 6){
                    tabuleiro.rmPeca(i,j);
                    return true;
                }
                if(tabuleiro.tabuleiro[i][j] == 0)
                    return true;
            }
        }

        //===================================================PRETA======================================================
        if(this.tipo == "P"){

            //===========================================HOR/VET==============================================
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
            }
            //================================================DIAGONAL========================================
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
        //=======================================================BORDAS=================================
            if(Math.abs(this.posI - i) <= 1 && Math.abs(this.posJ - j) <=1){
                if(tabuleiro.tabuleiro[i][j] <= 6){
                    tabuleiro.rmPeca(i,j);
                    return true;
                }
            }
        return false
    }
}