const React = require('react');
const { Component } = React;


class WordRelay extends Component {
    state = {
        word: '삼손',
        value: '',
        result: '',
    };

    onSubmitForm=(e)=>{
        e.preventDefault();
        if(this.state.word[this.state.word.length -1] === this.state.value[0]){
            this.setState({
                result: '어쭈',
                word: this.state.value,
                value: '',
            });
            this.input.focus();
        }else {
            this.setState({
                result: '머래',
                value: '',
            })
            this.input.focus();
        }
    };

    onChangeInput =(e)=>{
        this.setState({value: e.target.value});
    };

    onRefInput=(c)=>{
        this.input =c;
    }

    render(){
        return (
            <>
                <div>{this.state.word} 쿵쿵따</div>
                <form onSubmit={this.onSubmitForm}>
                    <input ref={this.onRefInput} value={this.state.value} onChange={this.onChangeInput} />
                    <button>입력!</button>
                </form>
                <div>{this.state.result}</div>
                <br/><div> published by (주)삼손  </div>
            </>
        );
    }
}

module.exports = WordRelay;
