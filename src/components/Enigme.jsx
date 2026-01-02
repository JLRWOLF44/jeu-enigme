import { useState } from "react";
import "./Enigme.css"; // Importez le fichier CSS

function Enigme({ data, onSuccess, onSkip }) {
  const [answer, setAnswer] = useState("");
  const [tries, setTries] = useState(3);
  const [error, setError] = useState("");

  const verifier = () => {
  const reponseNormalisee = answer.toLowerCase().trim();
  const bonneReponse = data.reponse.toLowerCase().trim();

  if (reponseNormalisee === bonneReponse) {
    // Bonne réponse
    setAnswer("");          // Vide le champ
    setTries(3);            // Réinitialise les essais
    setError("");           // Efface l'erreur
    onSuccess();
  } else {
    // Mauvaise réponse
    const remaining = tries - 1;
    setTries(remaining);
    setAnswer("");          // ← Vide le champ automatiquement
    setError(`❌ Mauvaise réponse (${remaining} essai${remaining > 1 ? 's' : ''} restant${remaining > 1 ? 's' : ''})`);

    if (remaining === 0) {
      setError("⛔ Plus d’essais – passe à la suivante !");
    }
  }
};

  return (
    <div className="enigme-container">
      <h2>{data.question}</h2>

      <input
        className="answer-input"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Ta réponse..."
        disabled={tries === 0}
      />

      <div className="button-container">
        <button
          className="validate-button"
          onClick={verifier}
          disabled={tries === 0}
        >
          Valider
        </button>

        {tries === 0 && (
          <button
            className="skip-button"
            onClick={onSkip}
          >
            Passer 🔁
          </button>
        )}
      </div>

      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default Enigme;
