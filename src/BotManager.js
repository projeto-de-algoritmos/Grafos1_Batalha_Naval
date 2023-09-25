
// bot escolhe uma posição aleatória para chutar, verifica se é válida e retorna a posição
export function botChutaItem(tabuleiro){
  var chute;
  var chute_x;
  var chute_y;

  do{
    chute = Math.floor(Math.random() * 100);
    chute_x = Math.floor(chute / 10);
    chute_y = chute % 10;
// para -1 e 2 é porque já chutou nessa posição, então busca outra posição válida
  }while(tabuleiro[chute_y][chute_x] == -1 || tabuleiro[chute_y][chute_x] == 2);

  return [chute_x, chute_y];
}