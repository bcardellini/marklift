import React from "react";
import Reference from "./Reference"
//const flexibility = require('flexibility');
const marked = require('marked');
require('../sass/marklift.scss');


export default class Previewer extends React.Component {

  constructor () {
    super();
    this.state = {  md: "sample markdown",
                    html: {__html:"<p>Preview will be rendered here</p>"},
                    mu: "HTML markup will be displayed here",
                    mode: "rendered"
                 };
  }

  updateMarkup(md) {
    var mu = marked(md, {sanitize: true, gfm: true, breaks: true});
    mu = mu.replace(/<br>/g,"<br>\n");
    this.setState({mu});
    this.setState({html:{__html:mu}});
  }

  markdownChange(e) {
    const md = e.target.value;
    this.updateMarkup(md);
  }

  modeClick(e){
    const newMode = e.target.innerHTML;
    if ( this.state.mode !== newMode ) {
      this.setState({mode:newMode});
    }
  }

  render() {
    const navItems = ["rendered","markup","reference"].map(
      (mode, i) => <li className={mode+'Nav'} key={i} onClick={this.modeClick.bind(this)}>{mode}</li>
    );
    const markUpClass = "markUp " + this.state.mode;

    return (
      <div className="marklift">
        <div className="markliftInner">
          <div className="markDown">
            <h2>markdown</h2>
            <textarea onChange={this.markdownChange.bind(this)} spellcheck="false" placeholder="enter markdown here" />
          </div>
          <div className={markUpClass}>
            <nav><ul>{navItems}</ul></nav>
            <div className="sliderContainer">
              <div className="slider">
                <div className="rendered" dangerouslySetInnerHTML={this.state.html}>
                </div>
                <div className="markup">
                  {this.state.mu}
                </div>
                <div className="reference">
                  <Reference/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
