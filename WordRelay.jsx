const React = require('react');
const { Component } = React;


class WordRelay extends Component {
    state = {
        text: '끝말잇기 : webpack.config.js 통하여 babel rule 적용 ; wordrelay.jsx 통하려 렌더링 ; package.json 에 node 의존성 생성 ; app.js 를 참조하여 index.html 표현',
    };

    render(){
        return <h1>{this.state.text}</h1>;
    }
}

module.exports = WordRelay;
