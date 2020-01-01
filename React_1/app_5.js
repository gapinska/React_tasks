class Message extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            messageIsActive: false
        }
    }

    handleBtnClick = () => {
        this.setState({
            messageIsActive: !this.state.messageIsActive
        })
    }
    render() {

        const text = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic temporibus eligendi repudiandae assumenda enim perferendis dolore! Odio voluptatem dolores nesciunt ex corrupti corporis, aspernatur in aliquam, enim vel vero. Fugiat!"
        return (
            <>
                <button onClick= {this.handleBtnClick} >
                    {this.state.messageIsActive ? Ukryj : Pokaż}
                </button>
                {this.state.messageIsActive ? <p>{text}</p>: null}
            </>
        )
    }
}

ReactDOM.render(<Message/>, document.getElementById('root'))