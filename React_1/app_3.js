class App extends React.Component {
    state= {
        text: ""
    }

    handleClick= () => {
        this.setState({
            text: this.state.text + "a"
        }) 

    }

    render (){
        return (
        <>
        <button onClick={this.handleClick}>Add A</button>
        <PanelResult text={this.state.text}/>
        </>
        )
    }
}

const PanelResult = (props) => {
    return(
    <h1>{props.text}</h1>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"))
