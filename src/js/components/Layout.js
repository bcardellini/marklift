import React from "react";

import Footer from "./Footer";
import Header from "./Header";
import Previewer from "./Previewer";

export default class Layout extends React.Component {
  render() {
    // properties
    const title = "marklift";

    return (
      <div>
        <Header title={title} />
        <Previewer />
        <Footer />
      </div>
    );
  }
}
