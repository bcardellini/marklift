import React from "react";

import Footer from "./Footer";
import Header from "./Header";
import Previewer from "./Previewer";

export default class Layout extends React.Component {
  render() {
    const title = "marklîft";
    return (
      <div className="appWrap">
        <Header title={title} />
        <Previewer />
        <Footer />
      </div>
    );
  }
}
