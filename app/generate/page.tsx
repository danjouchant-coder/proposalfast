"use client";

import { useState } from "react";

export default function GeneratePage() {
  const [form, setForm] = useState({
    clientName: "",
    service: "",
    price: "",
    details: ""
  });

  const [proposal, setProposal] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  function generateProposal(data: typeof form) {
    return `COMMERCIAL PROPOSAL

Client: ${data.clientName}
Service: ${data.service}

Project Overview
${data.details || "Execution focused on delivering measurable results aligned with your objectives."}

Scope of Work
- Strategic planning
- Execution and optimization
- Continuous improvement
- Performance tracking

Investment
${data.price}

Next Step
If this proposal aligns with your expectations, we can start immediately upon confirmation.`;
  }

  async function handleGenerate(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    // estrutura já pronta para IA depois
    const result = generateProposal(form);

    setProposal(result);
    setLoading(false);
  }

  function handleCopy() {
    navigator.clipboard.writeText(proposal);
    alert("Copied!");
  }

  return (
    <main className="container" style={{ maxWidth: 900 }}>
      <header className="nav">
        <strong>CLOSERAI</strong>
      </header>

      <section className="grid" style={{ gap: 24 }}>
        {/* FORM */}
        <div className="card">
          <h1 style={{ marginTop: 0 }}>Generate Proposal</h1>
          <p className="small">
            Turn raw lead info into a persuasive commercial proposal.
          </p>

          <form onSubmit={handleGenerate} className="grid">
            <input
              name="clientName"
              placeholder="Client name"
              value={form.clientName}
              onChange={handleChange}
              required
            />

            <input
              name="service"
              placeholder="Service"
              value={form.service}
              onChange={handleChange}
              required
            />

            <input
              name="price"
              placeholder="Price"
              value={form.price}
              onChange={handleChange}
              required
            />

            <textarea
              name="details"
              placeholder="Project details"
              value={form.details}
              onChange={handleChange}
            />

            <button type="submit">
              {loading ? "Generating..." : "Generate Proposal"}
            </button>
          </form>
        </div>

        {/* OUTPUT */}
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

          {proposal && (
            <button onClick={handleCopy} style={{ marginTop: 12 }}>
              Copy Proposal
            </button>
          )}
        </div>
      </section>
    </main>
  );
}
