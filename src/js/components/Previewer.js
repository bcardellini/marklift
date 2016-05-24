import React from "react";

var marked = require('marked');


export default class Previewer extends React.Component {

  constructor () {
    super();
    this.state = { md: "sample markdown", html:{__html:"Preview will appear here"} };
  }

  changeCode(md) {
    const mu = marked(md, {sanitize: true});
    this.setState({html:{__html:mu}});
  }

  mdChange(e) {
    const md = e.target.value;
    this.changeCode(md);
  }

  render() {
    return (
      <div class="main">
        <div id="markDown">
          {console.log(this)}
          <textarea onChange={this.mdChange.bind(this)} placeholder="enter Markdown here" />
        </div>
        <div id="markUp" dangerouslySetInnerHTML={this.state.html}>
        </div>
      </div>
    );
  }
}
