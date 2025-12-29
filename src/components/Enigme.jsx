import { useState } from "react";

function Enigme({ data, onSuccess, onSkip }) {
  const [answer, setAnswer] = useState("");
  const [tries, setTries] = useState(3);
  const [error, setError] = useState("");

  const verifier = () => {
    if (answer.toLowerCase().trim() === data.reponse) {
      setAnswer("");
      setTries(3);
      setError("");
      onSuccess();
    } else {
      const remaining = tries - 1;
      setTries(remaining);
      setError(`❌ Mauvaise réponse (${remaining} essais restants)`);

      if (remaining === 0) {
        setError("⛔ Plus d’essais possibles");
      }
    }
  };

  return (
    <div>
      <h2>{data.question}</h2>

      <input
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Ta réponse..."
        disabled={tries === 0}
      />

      <div style={{ marginTop: "1rem" }}>
        <button onClick={verifier} disabled={tries === 0}>
          Valider
        </button>

        {tries === 0 && (
          <button onClick={onSkip} style={{ marginLeft: "1rem" }}>
            Passer 🔁
          </button>
        )}
      </div>

      {error && <p>{error}</p>}
    </div>
  );
}

export default Enigme;
