//komponent funkcyjny

const Header = () => {
    return <h1>Witaj na stronie</h1>
}

//komponent klasowy

class Blog extends React.Component {
    // state = {
    //     number: 0
    // }
    render(){
        return (
            <section>
                <h2>Artykuł</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae esse voluptas tempore reprehenderit, dicta, nam at officiis perspiciatis incidunt quis, corporis magni ullam delectus sint dolore nostrum omnis illo ab!</p>
            </section>
        )
    }
}

const App = () => {
    return (
        <>
        <Header/>
        <Blog/>        
        </>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))