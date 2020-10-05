import React from "react";
import Layout from "../components/PageLayout";
import { Words, Button } from "arwes";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="App">
      <Layout
        title="Welcome to CF-22"
        InnerContent={
          <React.Fragment>
            <p>
              Home Page
              {(anim) => (
                <p>
                  <Words animate show={anim.entered}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis laboris nisi ut
                    aliquip ex. Duis aute irure. Consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud.
                  </Words>
                </p>
              )}
            </p>
            <Link to="/transmission">
              <Button>Next</Button>
            </Link>
          </React.Fragment>
        }
      />
    </div>
  );
}

export default Home;
