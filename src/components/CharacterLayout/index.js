import React from "react";
import { Arwes, Project, Words } from "arwes";
import "./styles.css";
import bg from "../../static/background-main.jpg";
import Sheet from "../CharacterSheet";

const Layout = () => (
  <div className="char-wrap">
    <div className="char--main">
      <Arwes animate show background={bg}></Arwes>
    </div>
    <div className="char--layout">
      <div className="char--sheet">
        <Sheet />
      </div>
      <div className="char--info">
        <Project animate header="Building a character">
          {(anim) => (
            <p>
              <Words animate show={anim.entered}>
                {
                  "Fill in your name, species (human or another of you choice from whatever series), your crime, contact if you purchase one."
                }
              </Words>
            </p>
          )}
        </Project>
      </div>
    </div>
  </div>
);

export default Layout;
