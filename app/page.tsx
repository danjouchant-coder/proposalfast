import Link from "next/link";

export default function HomePage() {
  return (
    <main className="container">
      <header className="nav">
        <strong>CLOSERAI</strong>
        <div className="row">
          <Link className="btn btn-secondary" href="/pricing">
            Pricing
          </Link>
          <Link className="btn" href="/auth/signup">
            Start Free
          </Link>
        </div>
      </header>

      <section className="hero">
        <span className="small">AI proposals for marketing freelancers</span>
        <h1>Turn any lead into a closed deal in 60 seconds.</h1>
        <p>
          Generate persuasive, clean, high-conversion proposals for paid ads, social media,
          creative services, and retainers — without writing from scratch.
        </p>
        <div className="row">
          <Link className="btn" href="/auth/signup">
            Generate My Proposal
          </Link>
          <Link className="btn btn-secondary" href="/pricing">
            See Pricing
          </Link>
        </div>
      </section>

      <section className="grid grid-3">
        <div className="card">
          <h3>Faster replies</h3>
          <p className="small">Answer inbound leads while intent is still hot.</p>
        </div>
        <div className="card">
          <h3>Better positioning</h3>
          <p className="small">Proposals built around value, clarity, and outcomes.</p>
        </div>
        <div className="card">
          <h3>More closes</h3>
          <p className="small">Look sharper than freelancers still writing manually.</p>
        </div>
      </section>
    </main>
  );
}
