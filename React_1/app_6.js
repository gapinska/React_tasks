class Counter extends React.Component {
    state = {
        count: 0,
        result: 0
    }
    
    handleMathClick(type, number = 1){
        if(type==="subtraction") {
            this.setState(prevState => ({
                count: ++prevState.count,
                result: prevState.result - number
            }))
        } else if (type==="adding"){
            this.setState(prevState => ({
                count: ++prevState.count,
                result: prevState.result + number
            }))
        } else if (type==="reset"){
            this.setState(prevState => ({
                count: 0,
                result: 0
            }))
        }
    }
    
    render(){
        return (
            <>
            <button onClick={this.handleMathClick.bind(this, "subtraction", 1)}>-1</button>
            <button onClick={() => this.handleMathClick("adding"} >+1</button>
            <button onClick={() => this.handleMathClick("reset")}>Reset</button>
            <h1>Liczba kliknięć: {this.state.count}</h1>
            <h1>Wynik: {this.state.result}</h1>
            </>
        )
    }
}