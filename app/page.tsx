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

          <Link className="btn" href="/generate">
            Generate
          </Link>

          <Link className="btn" href="/auth/signup">
            Start Free
          </Link>
        </div>
      </header>

      <section className="hero">
        <span className="small">AI proposals for real deals</span>

        <h1>
          Turn any lead into a clean,
          high-converting commercial proposal
        </h1>

        <p>
          Generate structured proposals in seconds and send them
          directly to your client with clarity and confidence.
        </p>

        <div className="row">
          <Link className="btn" href="/generate">
            Generate Proposal
          </Link>

          <Link className="btn btn-secondary" href="/pricing">
            See Pricing
          </Link>
        </div>
      </section>
    </main>
  );
}
