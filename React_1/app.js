//komponent funkcyjny

const App = () => {
    return (
        <>
        <h1>First component</h1>        
        </>
    )
}

//komponent klasowy

class App2 extends React.Component {
    state = {
        number: 0
    }
    render(){
        return (
            <section>
                <h2>Komponent klasowy this.state.number</h2>
            </section>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))