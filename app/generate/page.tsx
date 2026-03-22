"use client";

import { useState } from "react";

const FREE_LIMIT = 3;

export default function GeneratePage() {
  const [form, setForm] = useState({
    clientName: "",
    service: "",
    price: "",
    details: ""
  });

  const [proposal, setProposal] = useState("");
  const [loading, setLoading] = useState(false);
  const [usageCount, setUsageCount] = useState(0);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  function generateProposal(data: typeof form) {
    return `COMMERCIAL PROPOSAL

Prepared for: ${data.clientName}
Service: ${data.service}

Objective
This proposal is designed to help ${data.clientName} improve results through a focused and professionally executed ${data.service} service.

Project Scope
${data.details || "A tailored execution plan built around the client's priorities, market context, and growth goals."}

What is Included
- Strategic planning aligned with business goals
- Professional execution and ongoing optimization
- Clear communication throughout the project
- Focus on measurable performance and practical results

Investment
${data.price}

Why This Makes Sense
Instead of relying on fragmented actions, this service creates a clearer path toward stronger positioning, better execution, and more consistent results.

Next Step
If this direction aligns with what you are looking for, I can begin as soon as you confirm.`;
  }

  async function handleGenerate(e: React.FormEvent) {
    e.preventDefault();

    if (usageCount >= FREE_LIMIT) {
      alert("Free limit reached. Upgrade to Pro.");
      return;
    }

    setLoading(true);

    const result = generateProposal(form);

    setProposal(result);
    setUsageCount((prev) => prev + 1);
    setLoading(false);
  }

  function handleCopy() {
    navigator.clipboard.writeText(proposal);
    alert("Copied!");
  }

  const remaining = FREE_LIMIT - usageCount;

  return (
    <main className="container" style={{ maxWidth: 900 }}>
      <header className="nav">
        <strong>CLOSERAI</strong>
      </header>

      <section className="grid" style={{ gap: 24 }}>
        <div className="card">
          <h1 style={{ marginTop: 0 }}>Generate Proposal</h1>
          <p className="small">
            Turn raw lead info into a persuasive commercial proposal.
          </p>

          <p className="small">
            Free plan: {usageCount}/{FREE_LIMIT} used
            {remaining > 0 ? ` · ${remaining} remaining` : " · limit reached"}
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

            <button type="submit" disabled={loading || usageCount >= FREE_LIMIT}>
              {loading
                ? "Generating..."
                : usageCount >= FREE_LIMIT
                ? "Upgrade Required"
                : "Generate Proposal"}
            </button>
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
