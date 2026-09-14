import { FormEvent, useState } from "react";
import PageHero from "../components/PageHero";
import { apiJson } from "../lib/memberApi";

type LoginState =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "error"; message: string };

export default function MemberLoginPage() {
  const [memberNumber, setMemberNumber] = useState("");
  const [password, setPassword] = useState("");
  const [state, setState] = useState<LoginState>({ status: "idle" });

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!memberNumber.trim() || !password) {
      setState({ status: "error", message: "Enter your member number and password." });
      return;
    }

    setState({ status: "submitting" });
    try {
      await apiJson("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({ memberNumber: memberNumber.trim(), password }),
      });
      window.location.assign("/?page=member-portal");
    } catch (error) {
      setState({ status: "error", message: error instanceof Error ? error.message : "Sign-in failed." });
    }
  };

  return (
    <>
      <PageHero
        eyebrow="Member Login"
        title="Secure access to your AYU member portal."
        description="Registered AYU-Juba members with an activated account can sign in using their member number and password."
        aside={
          <dl className="page-fact-list">
            <div><dt>Session security</dt><dd>Secure, HTTP-only session</dd></div>
            <div><dt>Portal access</dt><dd>Registered member accounts</dd></div>
            <div><dt>Privacy</dt><dd>Private by default</dd></div>
          </dl>
        }
      />

      <section className="section section-white">
        <div className="container auth-layout">
          <form className="auth-card" onSubmit={submit}>
            <div>
              <p className="eyebrow">Sign in</p>
              <h2>Member Portal</h2>
            </div>

            <label className="field">
              <span>Member number</span>
              <input
                type="text"
                autoCapitalize="characters"
                autoComplete="username"
                maxLength={40}
                value={memberNumber}
                onChange={(event) => setMemberNumber(event.target.value)}
                required
              />
            </label>

            <label className="field">
              <span>Password</span>
              <input
                type="password"
                autoComplete="current-password"
                maxLength={128}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </label>

            {state.status === "error" ? <p className="form-error" aria-live="polite">{state.message}</p> : null}

            <button className="button button-dark" type="submit" disabled={state.status === "submitting"}>
              {state.status === "submitting" ? "Signing in…" : "Sign in"}
            </button>

            <div className="auth-links">
              <a className="text-link" href="/?page=member-activate">Activate member account</a>
              <a className="text-link" href="/?page=membership">Membership information</a>
            </div>
          </form>

          <aside className="auth-aside">
            <p className="eyebrow">Account Security</p>
            <h2>Your account protects private membership information.</h2>
            <p>AYU member sessions use secure browser cookies and automatically expire. Repeated failed sign-in attempts are temporarily limited to protect member accounts.</p>
            <p>Never share your password or activation code with another person.</p>
          </aside>
        </div>
      </section>
    </>
  );
}
