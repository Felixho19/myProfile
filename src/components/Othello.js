import React from "react";
import { Container, Row, Col, Media} from "reactstrap";

var WHITE = 0;
var BLACK = 1;

function Piece (x, y, color){
    this.color = color;
    this.col = x;
    this.row = y;
    this.flipper = () => {
        this.color = this.color ^ 1;
    }
    this.get_color = () => {
        return this.color;
    }
}
function Board (rows, cols, topLeftColor){
    this.row = rows;
    this.col = cols;
    this.init_board = () => {
        return Array.from(Array(this.row), () => Array(this.col).fill(null));
    }
    this.board = this.init_board();
    this.getBoard = () => {
        return this.board;
    }
    this.drop_on_board = function(x, y , color){
        this.board[y][x] = Piece(x, y, color);
    }
    this.starting_positions = (FirstColor) => {
        var SecondColor = FirstColor === WHITE ? BLACK : WHITE;
        var x = Math.floor(this.col / 2);
        var y = Math.floor(this.row / 2);
        this.drop_on_board(x - 1, y - 1, FirstColor);
        this.drop_on_board(x, y, FirstColor);
        this.drop_on_board(x, y - 1, SecondColor);
        this.drop_on_board(x - 1, y, SecondColor);
    }
    this.starting_positions(topLeftColor);
}
function Game(cols, rows, color, topLeftColor){
    this.row = rows;
    this.col = cols;
    this.board = Board(rows, cols, topLeftColor);
    this.currentPlayer = color;
    this.getCurrentPlayer = () => {
        return this.currentPlayer;
    }
    this.num_white_piece = () => {
        var count = 0;
        for(var y = 0; y < this.row ; y++){
            for(var x = 0; x < this.col ; x++){
                count += this.board.board[y][x] === WHITE ? 1 : 0;
            }
        }
        return count;
    }
    this.num_black_piece = () => {
        var count = 0;
        for(var y = 0; y < this.row ; y++){
            for(var x = 0; x < this.col ; x++){
                count += this.board.board[y][x] === BLACK ? 1 : 0;
            }
        }
        return count;
    }
    this.flip_each_direction = () => {
        
    }
    this.test_drop_valid_piece = (y, x, color) => {
        var pieces = [];
        var directions = ['right', 'left', 'top', 'bottom', 'top_right', 'top_left', 'bottom_right', 'bottom_left'];

    }
}
class Othelle extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }
    render() {
        return (<div/>);
    }
}
export default Othelle;