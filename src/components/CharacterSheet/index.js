import React, { useState } from "react";
import { Frame, Words, Button, Line } from "arwes";
import "./styles.css";

const inputId = "file-img-input";

const Layout = () => {
  const [cardImg, setCardImg] = useState(null);
  const [contacts, setContacts] = useState("Test");
  const [skills, setSkills] = useState([]);
  const [points, setPoints] = useState(3);

  const adjPoints = (increase) => {
    if (!increase && points > 0) {
      setPoints(points - 1);
    } else if (increase) {
      setPoints(points + 1);
    }
  };
  const addSkill = (skill) => {
    const newArray = [...skills];
    newArray.push(skill);
    setSkills(newArray);
    adjPoints();
  };

  function thisFileUpload() {
    document.getElementById(inputId).click();
  }
  function imgInputTrigger(e) {
    var reader = new FileReader();
    reader.onload = function (e) {
      setCardImg(e.target.result);
    };
    const files = Array.from(e.target.files);
    reader.readAsDataURL(e.target.files[0]);
  }

  return (
    <div>
      <div className="row">
        <div className="img-wrap sheet--item">
          <Frame show animate level={3} corners={4} layer="primary">
            <img className="c-image" alt="img" src={cardImg} />
          </Frame>
          <div className="addImgBtn no-print">
            <input
              type="file"
              id={inputId}
              onChange={imgInputTrigger}
              style={{ display: "none" }}
            />
            <Button onClick={thisFileUpload}>[+]</Button>
          </div>
        </div>
        <div className="sheet--item">
          <Frame show animate level={3} corners={4} layer="primary">
            <div className="sheet-flexitem">
              <div className="row">
                <Words className="sheet--input-label">name: </Words>
                <input className="sheet--input" />
              </div>
              <div className="row">
                <Words className="sheet--input-label">species: </Words>
                <input className="sheet--input" />
              </div>
              <div className="row">
                <Words className="sheet--input-label">crime: </Words>
                <input className="sheet--input" />
              </div>
              <div className="row">
                <Words className="sheet--input-label">sentence: </Words>
                <input className="sheet--input" />
              </div>
              <Words>possible contacts: </Words>
              <div>{contacts}</div>
            </div>
          </Frame>
        </div>
        <div className="sheet--item">
          <Frame show animate level={3} corners={4} layer="primary">
            <p className="sheet--input-label">
              {"Health:                 / 3"}
            </p>
            <div className="sheet--input-label">
              {"Stress:                 / 3"}
            </div>
            <Words style={{ padding: "10px" }}>Skills</Words>
            <Line animate />
            <div className="sheet--skill-fill">{skills.join("\n")}</div>
          </Frame>
        </div>
      </div>
      <div className="row sheet--charbg">
        <Frame show animate level={3} corners={4} layer="primary">
          <h4 style={{ padding: "0 20px" }}>Background</h4>
          <textarea
            rows="6"
            className="sheet-textarea"
            placeholder="Enter Background here..."
          ></textarea>
        </Frame>
      </div>
      <Options points={points} adjPoints={adjPoints} addSkill={addSkill} />
    </div>
  );
};

const Skill = {
  Persuation: "The ability to logically convince another",
  Charm: "The ability to use your charisma to influence others",
  Intimidation: "How easily you can scare others",
  Bluff: "convincing liar",
  Strength: "Sheer physical ability",
  Calm: "Inner mental strength",
  Sneak: "How quietly you can move around",
  Pickpocket: "How sneaky your fingers are",
  Electrics: "Your knowledge of electrical systems",
  Hacking: "You knowledge of computer systems",
  Brawler: "Natural fighting skills",
  Gymnast: "Your capacity for acrobatics",
  Impersonation: "Your ability to impersonate others",
  Medic: "Help provide injury treatment",
};
const SkillAlien = {
  Darkvision: "See in the dark",
  Hypersmell: "Bloodhound like nasal ability",
  Echolocation: "3d sound based vision",
  StickyHands: "lizard like cling ability",
};
const contacts = {
  Deliveries: "Know someone in the deliveries sector",
  Mob: "Have connections in organised crime, providing you with protection",
  Guard: "Know one of the guards",
  Politician:
    "Political connections protect you somewhat from the prison's punishments",
  Construction: "Know someone who helped build another similar prison",
};
const Options = ({ points, adjPoints, addSkill }) => {
  const noPoints = points <= 0;

  return (
    <div className="row sheet--charbg">
      <Frame show animate level={3} corners={4} layer="primary">
        <div className="row row-space" style={{ padding: "0 20px" }}>
          <h3>Options</h3>
          <h3>{points} - Points</h3>
        </div>
        <Words>
          You have 3 points to spend, use them too add some skills to your
          character, alternatively you can add one contact, they will be able to
          provide you with some aid on occation
        </Words>
        <Line animate />
        <h4>Skills</h4>
        <Line animate />
        <div className="flex-wrap">
          {Object.keys(Skill).map((key) => (
            <Button
              animate
              style={{ margin: "5px" }}
              layer={noPoints ? "alert" : 'control'}
              onClick={() => addSkill(key)}
            >
              {key}: <span className="sheet--skill-opt">{Skill[key]}</span>
            </Button>
          ))}
        </div>
        <Line animate />
        <h4>Alien Skills (Requires you to be non-human)</h4>
        <Line animate />
        <div className="flex-wrap">
          {Object.keys(SkillAlien).map((key) => (
            <Button
              animate
              style={{ margin: "5px" }}
              layer={noPoints ? "alert" : 'control'}
              onClick={() => addSkill(key)}
            >
              {key}: <span className="sheet--skill-opt">{SkillAlien[key]}</span>
            </Button>
          ))}
        </div>
        <Line animate />
        <h4>Contacts</h4>
      </Frame>
    </div>
  );
};

export default Layout;