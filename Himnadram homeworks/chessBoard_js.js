{
   function chessBoard(data){
        let board = data.slice();
        let letter = 'abcdefgh'.slice();
        if((board[1] % 2 == 0 && letter.indexOf(board[0]) % 2 == 0) || board[1] % 2 != 0 && letter.indexOf(board[0] % 2 != 0)){
            return "white";
        }
        return "black";
    }
    console.log(chessBoard('h5'));
}
{
    function chessBoard(n,l){
        letters = ['a','b','c','d','e','f','g','h'];
        numbers = [1, 2, 3, 4, 5, 6, 7, 8];
        if((numbers.indexOf(n) + letters.indexOf(l)) % 2 == 0){
            console.log('black');
        }
        else console.log('white');
    }
    chessBoard(3,'c');
}