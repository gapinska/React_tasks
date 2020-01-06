class Counter extends React.Component {
    state = {
        count: 0,
        result: 0
    }
    
    handleMathClick = (type, number = 1) => {
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
            <MathButton 
            name="-10" 
            number="10" 
            type="subtraction" 
            click={this.handleMathClick}
            />
            <MathButton 
            name="-1" 
            number="1" 
            type="subtraction" 
            click={this.handleMathClick}            
            />
            <MathButton 
            name="reset"  
            type="reset" 
            click={this.handleMathClick}            
            />
            <MathButton 
            name="+10"
            number="10"   
            type="adding" 
            click={this.handleMathClick}            
            />
            <ResultPanel count={this.state.count} result={this.state.result}/>            
            </>
        )
    }
}

const MathButton = (props) => {
    const number = parseInt(props.number)
    return (
    <button onClick = {() => props.click(props.type, number)}>{props.name}</button>
    )

}

const ResultPanel = (props) => {
    return (
        <>
<h1>Liczba kliknięć: {props.count} {props.count>10 ? <span> more than 10</span> : null}</h1>
        <h1>Wynik: {props.result}</h1>
        </>
    )
}


const startValue = 0
ReactDOM.render(<Counter result={startValue} />, document.getElementById('root'))