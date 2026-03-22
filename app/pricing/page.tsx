import Link from "next/link";

export default function PricingPage() {
  return (
    <main className="container">
      <header className="nav">
        <Link href="/">CLOSERAI</Link>
        <Link className="btn btn-secondary" href="/auth/login">
          Login
        </Link>
      </header>

      <section className="grid grid-3" style={{ paddingTop: 40 }}>
        <div className="card">
          <h2>Free</h2>
          <h3>$0</h3>
          <p>3 proposals</p>
          <Link className="btn" href="/auth/signup">
            Start Free
          </Link>
        </div>

        <div className="card">
          <h2>Pro</h2>
          <h3>$19</h3>
          <p>Unlimited proposals</p>
          <Link className="btn" href="/auth/signup">
            Go Pro
          </Link>
        </div>
      </section>
    </main>
  );
}
