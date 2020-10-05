import React from "react";
import Layout from "../components/PageLayout";
import { Words, Button } from "arwes";
import { Link } from "react-router-dom";

function Transmission() {
  return (
    <div className="App" style={{ whiteSpace: "pre-line", textAlign: "left" }}>
      <Layout
        title="New Arrival"
        InnerContent={(p) => (
          <>
            <p>
              <Words animate show={p.entered}>
                {`Dear Warden Grim,\n
                \n
                As per protocol I m messaging you about your newest arrivals, are rather interesting group, taking it upon themselves to commit an act of grand theft, thankfully our agents found a small thread to pull on and managed to unravel their little scheme before they pulled it off.\n
                They have been uncooperative and quiet, but with the evidence we have gathered we seem to have made a clean sweep in gathering up the whole crew, but if you manage to get any of them to spill any more beans you have my ear as always.\n
                Hope they won’t cause you any trouble, but be warned they aren’t stupid, not by criminal standards anyhow, all the best and good job as always, I hope we can catch up for a few drinks soon.\n
                \n
                All the best,\n
                Sheriff Antshill, DI, XO-Crew`}
              </Words>
            </p>
            <div style={{ textAlign: "right", marginTop: "20px" }}>
              <Link to="/character">
                <Button animate layer="success">
                  Attachment
                </Button>
              </Link>
            </div>
          </>
        )}
      />
    </div>
  );
}

export default Transmission;
