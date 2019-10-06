function JogoXadrez() {
	var tabuleiro = new Tabuleiro ();

	// Esse método retorna um array 8x8 contendo o estado do tabuleiro.
	this.getTabuleiro = function() {
		 return tabuleiro.getRepresentacao();
	}

	// Esse método reinicia o jogo.
	this.reiniciar = function() {
		for(let i = 0; i < 8; i++){
			for(let j = 0; j < 8; j++){
				tabuleiro.tabuleiro[i][j] = 0;
			}
		}
		for(let i = 0; i < 39; i++){
			pecas.pop();
		}
		console.log(pecas);
		console.log(tabuleiro.tabuleiro);
	}

	// Esse método retorna uma referência para o objeto peça que está na posição i,j do tabuleiro.
	// Se a posição não tiver uma peça pertencente ao jogador atual, esse método deve retornar null;
	this.getPeca = function(i, j) {
		
		for(x = 0; x < pecas.length; x++){
			if (i == pecas[x].get_posI() && j == pecas[x].get_posJ())
				return pecas[x];
		}
		return null;
	}

	// Esse método move a peça para a posição i, j do tabuleiro.
	// Se o movimento não for possível, esse método deve retornar false. Caso contrário, deve retornar true;
	// Não é necessário se preocupar com a existência de outra peça. Caso a posição final da peça esteja ocupada por outra, a peça deverá ser substituída pela nova.
	// Sempre que esse método for executado com sucesso (retornando true) o turno deve ser atualizado, passando o controle para o outro jogador. Obs: não é permitido que o usuário mova uma peça de outro jogador.
	this.moverPeca = function(peca, i, j) {
		var res = peca.mover(tabuleiro,i,j);

		if (res == false){
			return false;
		} 

		tabuleiro.rmPeca(peca.get_posI(), peca.get_posJ());
		tabuleiro.addPeca(peca, i, j);
		
		peca.set_posI(i);
		peca.set_posJ(j);

		return true;
	}

	this.finalJogo = function(){
		var fim1 = true;
		var fim2 = true;
		for(let i = 0; i < 8; i++){
			for(let j = 0; j < 8; j++){
				if(tabuleiro.tabuleiro[i][j] == W_KING)
					fim1 = false;
				
				if(tabuleiro.tabuleiro[i][j] == B_KING)
					fim2 = false;
			}
		}

		if(fim1 == false && fim2 == false){
			return false;
		}else{
			return true;
		}
	}

	this.peaoRainha = function(){
		var peca;
		for(let i = 0; i < 8; i++){
			for(let j = 0; j < 8; j++){
				if( i == 0 && tabuleiro.tabuleiro[i][j] == W_PAWN)
				{
					var esq = (prompt("R <- Rainha\nB <- Bispo\nC <- Cavalo\nT <- Torre"));
					switch(esq){
						case "R":
							peca = new Rainha ("B", i,j, W_QUEEN);
							tabuleiro.rmPeca(i,j);
							tabuleiro.addPeca(peca,i,j);							 
						break;
						case "B":
							peca = new Bispo ("B", i,j, W_BISHOP);
							tabuleiro.rmPeca(i,j);
							tabuleiro.addPeca(peca,i,j); 
						break;
						case "C":
							peca = new Cavalo ("B", i,j, W_KNIGHT);
							tabuleiro.rmPeca(i,j);
							tabuleiro.addPeca(peca,i,j);  
						break;
						case "T":
							peca = new Torre ("B", i,j, W_ROOK);
							tabuleiro.rmPeca(i,j);
							tabuleiro.addPeca(peca,i,j);  
						break;
					}
					tabuleiro.rmPeca(i,j);
					tabuleiro.addPeca(peca,i,j);
				}
				if( i == 7 && tabuleiro.tabuleiro[i][j] == B_PAWN)
				{
					var esq = (prompt("R <- Rainha\nB <- Bispo\nC <- Cavalo\nT <- Torre"));
					switch(esq){
						case "R":
							peca = new Rainha ("P", i,j, B_QUEEN);
							tabuleiro.rmPeca(i,j);
							tabuleiro.addPeca(peca,i,j);							 
						break;
						case "B":
							peca = new Bispo ("P", i,j, B_BISHOP);
							tabuleiro.rmPeca(i,j);
							tabuleiro.addPeca(peca,i,j); 
						break;
						case "C":
							peca = new Cavalo ("P", i,j, B_KNIGHT);
							tabuleiro.rmPeca(i,j);
							tabuleiro.addPeca(peca,i,j);  
						break;
						case "T":
							peca = new Torre ("P", i,j, B_ROOK);
							tabuleiro.rmPeca(i,j);
							tabuleiro.addPeca(peca,i,j);  
						break;
					}
					tabuleiro.rmPeca(i,j);
					tabuleiro.addPeca(peca,i,j);
				}
			}
		}
	}
}
