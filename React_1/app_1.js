class ShoppingList extends RTCIceCandidate.Component {
    state = {
        items1: 'ogórki',
        items2: 'sok',
        items3: 'lemoniada'
    }
    render()
    return (
        <>
        <h1>Lista zakupów</h1>
        <ul>
        <li>{this.state.items1}</li>
        <li>{this.state.items2}</li>
        <li>{this.state.items3}</li>
        </ul>
        </>

    )
} 

ReactDOM.render(<ShoppingList/>, document.getElementById('root'))