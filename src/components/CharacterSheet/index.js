import React, { useState } from "react";
import { Frame, Words, Button, Line } from "arwes";
import "./styles.css";

const inputId = "file-img-input";
const defaultPoints = 3;

const Layout = () => {
  const [cardImg, setCardImg] = useState(null);
  const [contacts, setContact] = useState("");
  const [skills, setSkills] = useState([]);
  const [points, setPoints] = useState(defaultPoints);

  const adjPoints = (increase) => {
    if (!increase && points > 0) {
      setPoints(points - 1);
    } else if (increase) {
      setPoints(points + 1);
    }
  };

  function thisFileUpload() {
    document.getElementById(inputId).click();
  }
  function imgInputTrigger(e) {
    var reader = new FileReader();
    reader.onload = function (e) {
      setCardImg(e.target.result);
    };
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
            <div className="printhide">
              <Button onClick={thisFileUpload}>[+]</Button>
            </div>
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
            <Line animate style={{ margin: "10px 0 0" }} />
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
      <Options
        points={points}
        adjPoints={adjPoints}
        skills={skills}
        setSkills={setSkills}
        setContact={setContact}
        setPoints={setPoints}
      />
    </div>
  );
};

const Skill = {
  Persuation: "The ability to logically convince another",
  Charm: "The ability to use your charisma to influence others",
  Intimidation: "How easily you can scare others",
  Bluff: "Convincing liar",
  Strength: "Sheer physical ability",
  Athletics: "Endurance and speed",
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
const skillArr = Object.keys(Skill).map(() => false);
const SkillAlien = {
  Darkvision: "See in the dark",
  Hypersmell: "Bloodhound like nasal ability",
  Echolocation: "3d sound based vision",
  StickyHands: "Lizard like cling ability",
  EmpathicLink: "Read moods and feelings",
  Regeneration: "heal quickly from wounds",
  FlameBorn: "Immunity to heat",
  Sprightly: "Jump 3 times human ability",
};
const skillAlienArr = Object.keys(SkillAlien).map(() => false);
const contacts = {
  Deliveries: "Know someone in the deliveries sector",
  Mob: "Have connections in organised crime, providing you with protection",
  Guard: "Know one of the guards",
  Politician:
    "Political connections protect you somewhat from the prison's punishments",
  Construction: "Know someone who helped build another similar prison",
};

const Options = ({
  points,
  adjPoints,
  skills,
  setSkills,
  setPoints,
  setContact,
}) => {
  const [pickedContact, setPickedC] = useState(false);
  const [pickedSkills, setPickedSkills] = useState(skillArr);
  const [pickedASkills, setPickedASkills] = useState(skillAlienArr);
  const noPoints = points <= 0;

  const addSkill = (skill, index, alien = false) => {
    const newArray = [...skills];
    newArray.push(skill);
    setSkills(newArray);
    adjPoints();
    if (alien) {
      const newArray = [...pickedASkills];
      newArray[index] = true;
      setPickedASkills(newArray);
    } else {
      const newArray = [...pickedSkills];
      newArray[index] = true;
      setPickedSkills(newArray);
    }
  };
  const clearSkills = () => {
    setPoints(defaultPoints);
    setPickedSkills(skillArr);
    setPickedASkills(skillAlienArr);
    setSkills([]);
  };
  function addContact(contact) {
    if (!pickedContact) {
      setContact(contact);
      setPickedC(true);
      adjPoints();
    } else {
      window.alert("Cannot pick more contacts");
    }
  }
  function clearContact() {
    setContact("");
    setPickedC(false);
    adjPoints(true);
  }

  return (
    <div className="row sheet--charbg printhide">
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
        <div className="row">
          <h4>Skills</h4>
          {skills.length > 0 && (
            <Button
              animate
              style={{ margin: "10px" }}
              layer="success"
              onClick={() => clearSkills()}
            >
              [X] Clear Skills
            </Button>
          )}
        </div>
        <Line animate />
        <div className="flex-wrap">
          {Object.keys(Skill).map((key, index) => (
            <Button
              animate
              disabled={pickedSkills[index]}
              style={{ margin: "5px" }}
              layer={noPoints ? "alert" : "control"}
              onClick={() => addSkill(key, index)}
            >
              {key}: <span className="sheet--skill-opt">{Skill[key]}</span>
            </Button>
          ))}
        </div>
        <Line animate />
        <h4>Alien Skills (Requires you to be non-human)</h4>
        <Line animate />
        <div className="flex-wrap">
          {Object.keys(SkillAlien).map((key, index) => (
            <Button
              animate
              disabled={pickedASkills[index]}
              style={{ margin: "5px" }}
              layer={noPoints ? "alert" : "control"}
              onClick={() => addSkill(key, index, true)}
            >
              {key}: <span className="sheet--skill-opt">{SkillAlien[key]}</span>
            </Button>
          ))}
        </div>
        <Line animate />
        <h4>Contacts</h4>
        <Words>
          You are limited to 1 contact should you choose to take one
        </Words>
        <Line animate />
        {pickedContact && (
          <Button
            animate
            style={{ margin: "10px" }}
            layer="success"
            onClick={() => clearContact()}
          >
            [X] Remove Contact
          </Button>
        )}
        {Object.keys(contacts).map((key) => (
          <Button
            animate
            style={{ margin: "5px" }}
            layer={noPoints || pickedContact ? "alert" : "control"}
            onClick={() => addContact(key)}
          >
            {key}: <span className="sheet--skill-opt">{contacts[key]}</span>
          </Button>
        ))}
      </Frame>
    </div>
  );
};

export default Layout;
