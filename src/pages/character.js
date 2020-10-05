import React from "react";
import Layout from "../components/PageLayout";
import { Words, Button } from "arwes";
import CharLayout from "../components/CharacterLayout";

function Transmission() {
  return (
    <div className="char--main">
      <CharLayout
        title="New Arrival"
        InnerContent={(p) => (
          <>
            <p>Char page</p>
          </>
        )}
      />
    </div>
  );
}

export default Transmission;
