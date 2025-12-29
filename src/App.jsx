import { useState } from "react";
import enigmes from "./enigmes";
import Enigme from "./components/Enigme";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [skipped, setSkipped] = useState([]);

  const enigmeCourante = enigmes[currentIndex];

  const success = () => {
    setCurrentIndex(currentIndex + 1);
  };

  const skip = () => {
    setSkipped([...skipped, enigmeCourante]);
    setCurrentIndex(currentIndex + 1);
  };

  // Quand toutes les énigmes normales sont faites
  if (currentIndex >= enigmes.length) {
    if (skipped.length > 0) {
      return (
        <div style={{ padding: "2rem" }}>
          <h2>🔁 Énigmes restantes</h2>
          <Enigme
            data={skipped[0]}
            onSuccess={() => setSkipped(skipped.slice(1))}
            onSkip={() => setSkipped(skipped.slice(1))}
          />
        </div>
      );
    }

    return (
      <div style={{ padding: "2rem" }}>
        <h2>⚔️ Tu es digne ⚔️</h2>
        <p>
          À 40 ans, Odin t’accorde sa sagesse,<br />
          les Elfes leur respect,<br />
          la Force te traverse,<br />
          et le bois te reconnaît comme Maître.
        </p>
        <h3>🎂 Joyeux anniversaire 🎂</h3>
      </div>
    );
  }

  return (
    <div className="app">
      <h1>🎂 Mission Anniversaire 🎂</h1>

      <Enigme
      key={currentIndex}
        data={enigmeCourante}
        onSuccess={success}
        onSkip={skip}
      />
    </div>
  );
}

export default App;
