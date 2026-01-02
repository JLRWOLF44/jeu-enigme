import { useState, useEffect } from "react"; 
import enigmes from "./enigmes";
import Enigme from "./components/Enigme";
import "./App.css";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [skipped, setSkipped] = useState([]);
  const [successfulCount, setSuccessfulCount] = useState(0);
  const [showHome, setShowHome] = useState(true);
  const [isReturning, setIsReturning] = useState(false);

  const enigmeCourante = enigmes[currentIndex];

  const progress = successfulCount;
  const totalEnigmes = enigmes.length;

  // Fond qui change tous les 10 succès
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
    localStorage.removeItem("vikingQuestProgress"); 
  };

  // Chargement de la sauvegarde au démarrage
  useEffect(() => {
    const saved = localStorage.getItem("vikingQuestProgress");
    if (saved) {
      const data = JSON.parse(saved);
      setCurrentIndex(data.currentIndex || 0);
      setSkipped(data.skipped || []);
      setSuccessfulCount(data.successfulCount || 0);
      setShowHome(true);
      setIsReturning(true);
      setTimeout(() => setIsReturning(false), 5000); 
    }
  }, []);

  // Sauvegarde automatique à chaque changement
  useEffect(() => {
    if (!showHome) { 
      const data = {
        currentIndex,
        skipped,
        successfulCount,
      };
      localStorage.setItem("vikingQuestProgress", JSON.stringify(data));
    }
  }, [currentIndex, skipped, successfulCount, showHome]);

  // ================== ACCUEIL ==================
  if (showHome) {
    return (
      <div className="home-screen">
        <div className="home-overlay">
          {isReturning && (
            <div className="welcome-back">
              🛡️ Bienvenue de retour, guerrier !<br />
              Ta quête reprend là où tu l'as laissée.
            </div>
          )}

          <h1>Je suis Flóki dit "Le Roux"</h1>
          <h2>Viens me défier dans mes énigmes !</h2>
          <button className="start-button" onClick={() => setShowHome(false)}>
            JOUER ⚔️
          </button>
        </div>
      </div>
    );
  }

  // ================== FIN DU JEU ==================
  if (currentIndex >= enigmes.length) {
    if (skipped.length > 0) {
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

  // ================== JEU NORMAL ==================
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