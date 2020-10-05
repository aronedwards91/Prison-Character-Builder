import React from "react";
import Layout from "../components/PageLayout";
import { Words, Button } from "arwes";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="App" style={{ whiteSpace: 'pre-line', textAlign: "left"}}>
      <Layout
        title="Welcome to CF-22"
        InnerContent={(p) => (
          <React.Fragment>
            <p>
              <h2>Prison Escape</h2>
              <Words animate show={p.entered}>
                {`The name of the game here is to escape from prison CF-22, you
                will be playing as convicts recently incarcerated here. Your job
                is to escape, but as a group, your ties as a group are strong
                and you should not be willing to sacrifice your team, especially
                as all we be required for your escape to succeed.
                \nYou will know little, but there are many others around you with knowledge to
                trade, learn, plan, and plan more, a poor plan will result in
                you swiftly being returned to the prison and likely for a long
                stint in solitary. There are many factions here, you can work
                with one, or try to play them against each other, but remember
                these are all criminals, crossing the wrong person may result in
                a dangerous enemy. 
                \nThe prison does not normally use capitol punishment, but it has its limits on behaviours, the other
                prisoners also hold no such lofty ideals.`}
              </Words>
            </p>
            <p>
              <h2>Roleplaying</h2>
              <Words animate show={p.entered}>
                {`As a roleplayer, your job is to build yourself an interesting character whose shoes you would be curious to fill, you do not have to like them, character faults, weaknesses and quirks add all the more depth to a character. Consider playing on a tv archetype, or version of a character you like, just to help you get a starting point for their motivations and behaviour. Avoid creating an idealised self, as this will block you from separating yourself from the character, aiming for their consistent success rather then interesting interactions & behaviour. Remember your character will grow and change as they are influenced and developed by events.
                  A backstory is incredibly important to setting up a believable and intriguing character, ask yourself a few questions about them & their past;\n\n 
                  - where they rich or poor\n
                  - where they born into crime or fell from grace\n
                  - did they like their home\n
                  - where they involved in any big events\n
                  - what professions did they have\n
                  - who was their role model\n
                  - what is their highest desire (wealth, peace, love, respect…)\n
                  - what is their position on violence\n
                  - what was their childhood like\n
                  - do they have any dark secrets best left buried?\n
                  \n\n
                  Leave group dynamics for the first session as then we will establish how the players are tied together.`}
              </Words>
            </p>
            <div style={{ textAlign: "right", marginTop: "20px" }}>
              <Link to="/transmission">
                <Button animate>Incoming Transmission...</Button>
              </Link>
            </div>
          </React.Fragment>
        )}
      />
    </div>
  );
}

export default Home;
