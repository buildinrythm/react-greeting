import { useState } from "react";

function App() {
  // 1. React state
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");

  // 2. Button click handler
  const handleGreet = () => {
    if (!name.trim()) return;
    setGreeting(`Mae govannen, ${name}! Welcome to Middle-earth.`);
  };

  // 3. UI
  return (
    <div className="container mt-5">
      <div className="card bg-dark text-warning p-4">
        <h1 className="text-center mb-4">
          The Greeting of Middle-earth
        </h1>

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Enter your name, traveler"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button
          className="btn btn-warning w-100"
          onClick={handleGreet}
        >
          Speak, Friend, and Enter
        </button>

        {greeting && (
          <p className="mt-3 text-center fst-italic">
            {greeting}
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
