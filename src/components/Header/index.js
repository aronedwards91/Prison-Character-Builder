import React from "react";
import { Header, Content } from "arwes";
import "./styles.css";

const MainHeader = ({ headerComps }) => (
  <div className="header--wrap">
    <Header animate show>
      <Content>
        <div className="header-inner">
          <h2 style={{ margin: 0 }}>CF-22 “Brigadoor” Prison System</h2>
          <div>{headerComps}</div>
        </div>
      </Content>
    </Header>
  </div>
);

export default MainHeader;
