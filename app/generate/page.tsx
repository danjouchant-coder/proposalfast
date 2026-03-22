"use client";

import { useState } from "react";

export default function GeneratePage() {
  const [clientName, setClientName] = useState("");
  const [service, setService] = useState("");
  const [price, setPrice] = useState("");
  const [details, setDetails] = useState("");
  const [proposal, setProposal] = useState("");

  function handleGenerate(e: React.FormEvent) {
    e.preventDefault();

    const text = `Commercial Proposal

Client: ${clientName}
Service: ${service}
Price: ${price}

Project Scope
${details || "Custom service execution according to the client's goals and priorities."}

What is included
- Strategic planning
- Execution and optimization
- Clear communication
- Focus on measurable results

Investment
${price}

Closing
If this direction makes sense for you, I can start as soon as you confirm.`;

    setProposal(text);
  }

  return (
    <main className="container" style={{ maxWidth: 900 }}>
      <header className="nav">
        <strong>CLOSERAI</strong>
      </header>

      <section className="grid" style={{ gap: 24 }}>
        <div className="card">
          <h1 style={{ marginTop: 0 }}>Generate Proposal</h1>
          <p className="small">
            Turn lead information into a clean commercial proposal.
          </p>

          <form onSubmit={handleGenerate} className="grid">
            <input
              type="text"
              placeholder="Client name"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              required
            />

            <input
              type="text"
              placeholder="Service"
              value={service}
              onChange={(e) => setService(e.target.value)}
              required
            />

            <input
              type="text"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />

            <textarea
              placeholder="Project details"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
            />

            <button type="submit">Generate Proposal</button>
          </form>
        </div>

        <div className="card">
          <h2 style={{ marginTop: 0 }}>Output</h2>
          <pre
            style={{
              whiteSpace: "pre-wrap",
              fontFamily: "Arial, Helvetica, sans-serif",
              margin: 0
            }}
          >
            {proposal || "Your proposal will appear here."}
          </pre>
        </div>
      </section>
    </main>
  );
}
