import { useState } from "react";
import enigmes from "./enigmes";
import Enigme from "./components/Enigme";
import "./App.css"; // ← Importe ton CSS propre ici

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

  if (currentIndex >= enigmes.length) {
    if (skipped.length > 0) {
      return (
        <div className="screen">
          <div className="panel">
            <h2>🔁 Énigmes restantes</h2>
            <Enigme
              data={skipped[0]}
              onSuccess={() => setSkipped(skipped.slice(1))}
              onSkip={() => setSkipped(skipped.slice(1))}
            />
          </div>
        </div>
      );
    }

    return (
      <div className="screen">
        <div className="finale">
          <h2>⚔️ Tu es digne ⚔️</h2>
          <p>
            À 40 ans, Odin t’accorde sa sagesse,<br />
            les Elfes leur respect,<br />
            la Force te traverse,<br />
            et le bois te reconnaît comme Maître.
          </p>
          <h3>🎂 Joyeux anniversaire 🎂</h3>
        </div>
      </div>
    );
  }

  return (
    <div className="screen">
      <div className="panel">
        <h1>Les énigmes de Flóki dit "Le Roux"</h1>
        <Enigme
          key={currentIndex}
          data={enigmeCourante}
          onSuccess={success}
          onSkip={skip}
        />
      </div>
    </div>
  );
}

export default App;