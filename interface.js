// Identificador de cada peça!
const W_KING   = 1;  // "&#9812" ♔
const W_QUEEN  = 2;  // "&#9813" ♕
const W_ROOK   = 3;  // "&#9814" ♖
const W_BISHOP = 4;  // "&#9815" ♗
const W_KNIGHT = 5;  // "&#9816" ♘
const W_PAWN   = 6;  // "&#9817" ♙
const B_KING   = 7;  // "&#9818" ♚
const B_QUEEN  = 8;  // "&#9819" ♛
const B_ROOK   = 9;  // "&#9820" ♜
const B_BISHOP = 10; // "&#9821" ♝
const B_KNIGHT = 11; // "&#9822" ♞
const B_PAWN   = 12; // "&#9823" ♟

var jogo = new JogoXadrez();
var jogador = 0;
var pecas = [];

function init() {
	cria_tab();
	gerar_tabuleiro();
	atualizar_jogo();
}

function select(i,j) {
	var tabuleiro = document.getElementById('tabuleiro');
	var obj = tabuleiro.rows[i].cells[j]

	if (select.obj_clicado === undefined || select.obj_clicado === null) {
		var peca = jogo.getPeca(i, j);
		
		if(peca == null)
			return;

		if(jogador == 0 && peca.get_tipo() == "P")
			return;
		
		if(jogador == 1 && peca.get_tipo() == "B")
			return;
		if(jogador == 3)
			return;
		

		select.obj_clicado = obj;
		select.obj_bgcolor = obj.style.backgroundColor;
		select.peca = peca;
		obj.style.backgroundColor = "green";
	} else if (jogo.moverPeca(select.peca, i, j)) {
		select.obj_clicado.style.backgroundColor = select.obj_bgcolor;
		select.obj_clicado = null;
		jogo.peaoRainha();
		atualizar_jogo();
		if(jogador == 0){
			jogador = 1;
		}else{
			jogador = 0;
		}
		var resultFim = jogo.finalJogo();
		if(resultFim == true)
			jogador = 3;
	} else {
		alert("Movimento invalido!");
		select.obj_clicado.style.backgroundColor = select.obj_bgcolor;
		select.obj_clicado = null;
	}
}

function atualizar_jogo() {
	const pecas = ["", "♔", "♕", "♖", "♗", "♘", "♙", "♚", "♛", "♜", "♝", "♞", "♟"];
	let tabuleiro = document.getElementById('tabuleiro');
	let tabData = jogo.getTabuleiro();
	for (var i = 0, n = tabuleiro.rows.length; i < n; i++) {
		for (var j = 0, m = tabuleiro.rows[i].cells.length; j < m; j++) {
			obj = tabuleiro.rows[i].cells[j]
				obj.innerHTML = pecas[tabData[i][j]];
		}
	}
}

function reiniciar_jogo() {
	jogo.reiniciar();
	cria_tab();
	atualizar_jogo();
	jogador = 0;
}

function gerar_tabuleiro() {
	var table = "<table id=\"tabuleiro\">";
	var color = false;

	for (var i = 0; i < 8; i++) {
		table += "<tr>";
		for (var j = 0; j < 8; j++) {
			if (color) {
				table += "<td id=\"i" + i + "j" + j + "\" bgcolor=\"silver\" onclick=\"select(" + i + "," + j + ");\"></td>";
			} else {
				table += "<td id=\"i" + i + "j" + j + "\" bgcolor=\"white\" onclick=\"select(" + i + "," + j + ");\"></td>";
			}

			color = !color;
		}
		table += "</tr>";
		color = !color;
	}
	table += "</table>";
	document.write(table);
}
function cria_tab(){
	for(let i = 0; i < 8; i++){
		for(let j = 0; j < 8; j++){
			if(i==0){
				if(j == 0 || j == 7){
					var peca = new Torre ("P", i , j , B_ROOK);
					pecas.push(peca);
				}
				if(j == 1 || j == 6){
					peca = new Cavalo ("P", i , j , B_KNIGHT);
					pecas.push(peca);
				}
				if(j == 2 || j == 5){
					peca = new Bispo ("P", i , j , B_BISHOP);
					pecas.push(peca);
				}
				if(j == 3){
					peca = new Rainha ("P", i , j , B_QUEEN);
					pecas.push(peca);
				}
				if(j == 4){
					peca = new Rei ("P", i , j , B_KING);
					pecas.push(peca);
				}
			}
			if(i==1){
				peca = new Peao ("P", i , j , B_PAWN);
				pecas.push(peca);
			}	
			if(i==6){
				peca = new Peao ("B", i , j , W_PAWN);
				pecas.push(peca);
			}
			if(i==7){
				if(j == 0 || j == 7){
					peca = new Torre ("B", i , j , W_ROOK);
					pecas.push(peca);
				}
				if(j == 1 || j == 6){
					peca = new Cavalo ("B", i , j , W_KNIGHT);
					pecas.push(peca);
				}
				if(j == 2 || j == 5){
					peca = new Bispo ("B", i , j , W_BISHOP);
					pecas.push(peca);
				}
				if(j == 3){
						peca = new Rainha ("B", i , j , W_QUEEN);
						pecas.push(peca);
				}
				if(j == 4){
						peca = new Rei ("B", i , j , W_KING);
						pecas.push(peca);
				}
			}	
		}
    }
}

init();
