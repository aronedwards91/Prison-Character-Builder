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
      <div className="char--info printhide">
        <Project animate header="Building a character">
          {(anim) => (
            <p>
              <Words animate show={anim.entered} style={{whiteSpace: 'pre-line'}}>
                {
                  `Fill in your name, species (human or another of you choice from whatever series), your crime & given sentence. \n To fill out Contacts & Skills, below the character page you can select from the options given.\n\n
                  Click the [+] bottom on the left box to select a character portrait, google it your friend here.\n
                  Some of the skills are 'Alien' if you want to take one of these make sure your species is not human, and you may select any species from a popular franchise as long as they take a humanoid shape.\n
                  For background, give your character a suitable and interesting background to flesh them out and make them more interesting, you can refer to the questions on the home page to help fill this out.
                  \n\nOnce this is complete and you are happy with your character, press CTRL + P, to open up the print menu (chrome is best for this), then save it as a pdf and email/whatsapp me the result.`
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
