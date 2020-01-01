class App extends React.Component {
    state= {
        text: ""
    }

    handleInputChange(e) {
        this.setState({
            text: e.target.value
        })
    }

    render(){
        return (
            <React.Fragment>
                <input placeholder= "wpisz..." onChange={this.handleInputChange.bind(this)} type="text"/>
                <button>Reset</button>
                <h1>{this.state.text}</h1>
            </React.Fragment>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("root"))