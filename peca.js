class Peca {

        constructor(tipo, posI, posJ, id){
            this.tipo = tipo;
            this.posI = posI;
            this.posJ = posJ;
            this.id = id;
        }
        

        get_tipo (){
            return this.tipo;
        }

        get_posI (){
            return this.posI;
        }

        get_posJ (){
            return this.posJ;
        }

        get_id (){
            return this.id;
        }

        set_posI(i){
            this.posI = i;
        }

        set_posJ(j){
            this.posJ = j;
        }

       
        mover(tabuleiro, i , j){

            // Não pode mover uma peça para fora do tabuleiro.
		    if (i > 7 || i < 0 || j > 7 || j < 0)
                return false;

            // Não pode mover uma peça para o mesmo lugar.
            if (peca.get_posI() == i && peca.get_posJ() == j)
                return false;


        }
}