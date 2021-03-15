import "antd/dist/antd.css";
import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Join from "./components/Join/Join";
import Chat from "./components/Chat/Chat";
import ImgUpload from "./components/ImgUpload/ImgUpload";
import ImgModal from "./components/Modal/ImgModal";

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Join} />
      <Route path="/chat" component={Chat} />
      <Route path="/modal" component={ImgModal} />
      <Route path="/img" component={ImgUpload} />
    </Router>
  );
};

export default App;
