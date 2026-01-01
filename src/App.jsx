import { useState } from "react";
import enigmes from "./enigmes";
import Enigme from "./components/Enigme";
import "./App.css";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [skipped, setSkipped] = useState([]);
  const [successfulCount, setSuccessfulCount] = useState(0);
  const [showHome, setShowHome] = useState(true); // Écran d'accueil au démarrage

  const enigmeCourante = enigmes[currentIndex];

  const progress = successfulCount;
  const totalEnigmes = enigmes.length;

  // Changement de fond tous les 10 succès (ajuste si besoin)
  const backgroundIndex = Math.floor(progress / 10) % 4 + 1;
  const backgroundUrl = `/viking-bg${backgroundIndex}.jpg`;

  const success = () => {
    setSuccessfulCount(successfulCount + 1);
    setCurrentIndex(currentIndex + 1);
  };

  const skip = () => {
    setSkipped([...skipped, enigmeCourante]);
    setCurrentIndex(currentIndex + 1);
  };

  const reset = () => {
    setCurrentIndex(0);
    setSkipped([]);
    setSuccessfulCount(0);
  };

  // =============== RENDER ===============
  if (showHome) {
    // Page d'accueil
    return (
      <div className="home-screen">
        <div className="home-overlay">

          <h1>Je suis Flóki dit "Le Roux"</h1>
          <h2>Viens me défier dans mes énigmes !</h2>
          <button
            className="start-button"
            onClick={() => setShowHome(false)}
          >
            JOUER ⚔️
          </button>
        </div>
      </div>
    );
  }

  // Jeu terminé
  if (currentIndex >= enigmes.length) {
    if (skipped.length > 0) {
      // Énigmes restantes (skipped)
      return (
        <div className="screen" style={{ backgroundImage: `url(${backgroundUrl})` }}>
          <div className="game-container">
            <h2>🔁 Énigmes restantes</h2>
            <Enigme
              data={skipped[0]}
              onSuccess={() => {
                setSuccessfulCount(successfulCount + 1);
                setSkipped(skipped.slice(1));
              }}
              onSkip={() => setSkipped(skipped.slice(1))}
            />
          </div>
        </div>
      );
    }

    // Écran final anniversaire
    return (
      <div className="screen" style={{ backgroundImage: `url(${backgroundUrl})` }}>
        <div className="panel finale">
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

  // Jeu normal
  return (
    <div className="screen" style={{ backgroundImage: `url(${backgroundUrl})` }}>
      <div className="game-container">
        <h1>Les énigmes de Flóki dit "Le Roux"</h1>

        <div className="progress-bar-container">
          <div
            className="progress-bar"
            style={{ width: `${(progress / totalEnigmes) * 100}%` }}
          />
        </div>

        <Enigme
          key={currentIndex}
          data={enigmeCourante}
          onSuccess={success}
          onSkip={skip}
        />

        <button className="reset-button" onClick={reset}>
          🔄 Rejouer depuis le début
        </button>
      </div>
    </div>
  );
}

export default App;