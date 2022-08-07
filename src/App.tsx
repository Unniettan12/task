import React, { useState } from "react";
import Phase1 from "./components/Phase1";
import Phase2 from "./components/Phase2";
import Phase3 from "./components/Phase3";

const App: React.FC = () => {
  const [phase, setPhase] = useState<Number>(1);

  return (
    <div className="w-screen h-screen">
      <div>
        {phase === 1 ? (
          <Phase1 setPhase={setPhase} />
        ) : phase === 2 ? (
          <Phase2 />
        ) : (
          <Phase3 />
        )}
      </div>
    </div>
  );
};

export default App;
