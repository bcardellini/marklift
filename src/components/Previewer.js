import React from "react";

var marked = require('marked');
require('../sass/marklift.scss');


export default class Previewer extends React.Component {

  constructor () {
    super();
    this.state = { md: "sample markdown", html:{__html:"Preview will appear here"} };
  }

  changeCode(md) {
    const mu = marked(md, {sanitize: true, gfm: true});
    this.setState({mu});
    this.setState({html:{__html:mu}});
  }

  mdChange(e) {
    const md = e.target.value;
    this.changeCode(md);
  }

  render() {
    return (
      <div class="marklift">
        <div class="markDown">
          <textarea onChange={this.mdChange.bind(this)} placeholder="enter Markdown here" />
        </div>
        <div class="markUp">
          {this.state.mu}
        </div>
        <div class="htmlPreview" dangerouslySetInnerHTML={this.state.html}>
        </div>
      </div>
    );
  }
}
