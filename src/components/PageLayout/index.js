import React from "react";
import { Arwes, Project } from "arwes";
import Header from "../Header";
import "./styles.css";
import bg from "../../static/background-main.jpg";

const Layout = ({ InnerContent, title }) => (
    <Arwes animate show background={bg}>
      <Header />
      <div className="layout-inner">
        <Project animate header={title}>
          {InnerContent}
        </Project>
      </div>
    </Arwes>
);

export default Layout;
