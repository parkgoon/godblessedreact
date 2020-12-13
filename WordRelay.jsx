const React=require('react');
const { Componet } = React;


class WordRelay extends Component {
    state = {
        text: 'test',
    };

    render(){
        return <h1>{this.state.text}</h1>;
    }
}

module.exports = WordRelay;
