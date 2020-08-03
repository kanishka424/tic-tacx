import React,{Component} from 'react'
import Board from './Board'




class Game extends React.Component{

    constructor(){
        super();
        this.state={
            histroy:[
                {
                    squares:Arrays.fill(null),
                }
            ],
            xIsNext:true,
        }
    }

    handleClick(i) {
        const history=this.state.history;
        const current= history[history.length-1];
        const squares=current.squares.slice();
        if(this.calculateWinnner(squares)||squares[i]){
            return;
        }
        squares[i]=this.state.xIsNext?'X':'O';
        this.setState({
            history:history.concat([
                {
                    squares:squares
                }
            ])
        xIsNext:!this.state.xIsNext});
        console.log("exiting handleClick ")
     }


    render(){
        const history=this.state.history;
        const current=history[history.length-1];
        const calculateWinner(current.squares);
        let status;
        if(winner){
            status='the winner is'+winner;
        }else{
            status='next player is'+(this.state.xIsNext?'X':'O')
        }
        return(
            <div className="game">
                <div className="game-board">
                    <Board
                    squares={current.squares}
                    onClick={this.handleClick(i)}
                    />
                </div>
                <div className="game-info" >
                    <div>{status}</div>
                    <div>{/*TODO*/}</div>
                </div>
            </div>
        )
    }



} 


export default Game