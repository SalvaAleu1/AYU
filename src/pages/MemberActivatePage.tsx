import { FormEvent, useState } from "react";
import PageHero from "../components/PageHero";
import { apiJson } from "../lib/memberApi";

type ActivationState =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "error"; message: string };

export default function MemberActivatePage() {
  const [memberNumber, setMemberNumber] = useState("");
  const [activationCode, setActivationCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [state, setState] = useState<ActivationState>({ status: "idle" });

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!memberNumber.trim() || !activationCode.trim()) {
      setState({ status: "error", message: "Enter your member number and activation code." });
      return;
    }
    if (password !== confirmPassword) {
      setState({ status: "error", message: "The passwords do not match." });
      return;
    }

    setState({ status: "submitting" });
    try {
      await apiJson("/api/auth/activate", {
        method: "POST",
        body: JSON.stringify({ memberNumber, activationCode, password }),
      });
      window.location.assign("/?page=member-portal");
    } catch (error) {
      setState({ status: "error", message: error instanceof Error ? error.message : "Account activation failed." });
    }
  };

  return (
    <>
      <PageHero
        eyebrow="Member Account Activation"
        title="Set up secure access to your AYU member account."
        description="Use the member number and activation code issued for your AYU account, then create a strong password for future sign-in."
        aside={
          <dl className="page-fact-list">
            <div><dt>Password length</dt><dd>12–128 characters</dd></div>
            <div><dt>Password mix</dt><dd>Uppercase, lowercase & number</dd></div>
            <div><dt>Activation</dt><dd>One-time code</dd></div>
          </dl>
        }
      />

      <section className="section section-white">
        <div className="container auth-layout">
          <form className="auth-card" onSubmit={submit}>
            <div>
              <p className="eyebrow">Activate account</p>
              <h2>Create your password</h2>
            </div>

            <label className="field">
              <span>Member number</span>
              <input type="text" autoCapitalize="characters" autoComplete="username" maxLength={40} value={memberNumber} onChange={(event) => setMemberNumber(event.target.value)} required />
            </label>

            <label className="field">
              <span>Activation code</span>
              <input type="text" autoCapitalize="characters" autoComplete="one-time-code" maxLength={80} value={activationCode} onChange={(event) => setActivationCode(event.target.value)} required />
            </label>

            <label className="field">
              <span>New password</span>
              <input type="password" autoComplete="new-password" maxLength={128} value={password} onChange={(event) => setPassword(event.target.value)} required />
            </label>

            <label className="field">
              <span>Confirm password</span>
              <input type="password" autoComplete="new-password" maxLength={128} value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} required />
            </label>

            <p className="field-hint">Use at least 12 characters including uppercase and lowercase letters and a number.</p>
            {state.status === "error" ? <p className="form-error" aria-live="polite">{state.message}</p> : null}

            <button className="button button-dark" type="submit" disabled={state.status === "submitting"}>
              {state.status === "submitting" ? "Activating…" : "Activate account"}
            </button>
            <a className="text-link" href="/?page=member-login">Already activated? Sign in</a>
          </form>

          <aside className="auth-aside">
            <p className="eyebrow">Secure Activation</p>
            <h2>Activation links your sign-in credentials to your membership record.</h2>
            <p>The activation code can be used only while it is valid. After successful activation it is discarded and cannot be reused.</p>
          </aside>
        </div>
      </section>
    </>
  );
}
