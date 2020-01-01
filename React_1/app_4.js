class App extends React.Component {
    state= {
        text: ""
    }

    handleInputChange(e) {
        this.setState({
            text: e.target.value
        })
    }

    handleResetClick = () => {
        this.setState({
            text: ""
        })
    }

    render(){
        return (
            <React.Fragment>
                <input text={this.state.text} placeholder= "wpisz..." onChange={this.handleInputChange.bind(this)} type="text"/>
                <button onClick={this.handleResetClick}>Reset</button>
                <h1>{this.state.text.toUpperCase()}</h1>
            </React.Fragment>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("root"))