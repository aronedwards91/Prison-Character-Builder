import React from "react";
import Layout from "../components/PageLayout";
import { Words } from "arwes";

function Transmission() {
  return (
    <div className="App">
      <Layout
        title="Welcome to CF-22"
        InnerContent={
          <p>
            transmission
            {(anim) => (
              <p>
                <Words animate show={anim.entered}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis laboris nisi ut aliquip ex. Duis
                  aute irure. Consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud.
                </Words>
              </p>
            )}
          </p>
        }
      />
    </div>
  );
}

export default Transmission;
