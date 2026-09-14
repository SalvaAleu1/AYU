import { FormEvent, useEffect, useState } from "react";
import MemberPortalNav from "../components/MemberPortalNav";
import { apiJson, isUnauthorized } from "../lib/memberApi";

export default function MemberSecurityPage() {
  const [authorized, setAuthorized] = useState(false);
  const [checking, setChecking] = useState(true);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [saving, setSaving] = useState(false);
  const [endingSessions, setEndingSessions] = useState(false);

  useEffect(() => {
    apiJson("/api/auth/session")
      .then(() => {
        setAuthorized(true);
        setChecking(false);
      })
      .catch((error) => {
        if (isUnauthorized(error)) window.location.replace("/?page=member-login");
        else {
          setMessage(error instanceof Error ? error.message : "Account security could not be loaded.");
          setChecking(false);
        }
      });
  }, []);

  const changePassword = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("");
    if (newPassword !== confirmPassword) {
      setMessage("The new passwords do not match.");
      return;
    }

    setSaving(true);
    try {
      await apiJson("/api/auth/change-password", {
        method: "POST",
        body: JSON.stringify({ currentPassword, newPassword }),
      });
      window.location.replace("/?page=member-login");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Your password could not be changed.");
      setSaving(false);
    }
  };

  const endAllSessions = async () => {
    setEndingSessions(true);
    setMessage("");
    try {
      await apiJson("/api/auth/logout-all", { method: "POST" });
      window.location.replace("/?page=member-login");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Your sessions could not be ended.");
      setEndingSessions(false);
    }
  };

  if (checking) return <div className="portal-loading"><div className="container">Loading account security…</div></div>;
  if (!authorized) return <div className="portal-loading"><div className="container">{message || "Account security is unavailable."}</div></div>;

  return (
    <div className="portal-page">
      <section className="portal-topbar"><div className="container portal-topbar-inner"><a className="portal-brand" href="/?page=member-portal"><img src="/ayu-logo.webp" alt="" width="44" height="42" /><span>AYU Member Portal</span></a><MemberPortalNav active="security" /></div></section>

      <section className="portal-inner-hero"><div className="container"><p className="eyebrow eyebrow-light">Account Security</p><h1>Protect your AYU member account.</h1><p>Manage your password and active sessions from this secure area of the member portal.</p></div></section>

      <section className="section section-white portal-section">
        <div className="container security-settings-grid">
          <form className="portal-panel security-form" onSubmit={changePassword}>
            <p className="eyebrow">Password</p>
            <h2>Change password</h2>
            <label className="field"><span>Current password</span><input type="password" autoComplete="current-password" maxLength={128} value={currentPassword} onChange={(event) => setCurrentPassword(event.target.value)} required /></label>
            <label className="field"><span>New password</span><input type="password" autoComplete="new-password" maxLength={128} value={newPassword} onChange={(event) => setNewPassword(event.target.value)} required /></label>
            <label className="field"><span>Confirm new password</span><input type="password" autoComplete="new-password" maxLength={128} value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} required /></label>
            <p className="field-hint">Use 12–128 characters with uppercase and lowercase letters and at least one number.</p>
            {message ? <p className="portal-form-message" aria-live="polite">{message}</p> : null}
            <button className="button button-dark" type="submit" disabled={saving}>{saving ? "Changing…" : "Change password"}</button>
          </form>

          <aside className="portal-panel security-session-card">
            <p className="eyebrow">Sessions</p>
            <h2>Sign out everywhere</h2>
            <p>Use this if you signed in on a device you no longer control or suspect that another person has access to your account.</p>
            <button className="button button-outline-dark" type="button" onClick={endAllSessions} disabled={endingSessions}>{endingSessions ? "Signing out…" : "Sign out all sessions"}</button>
            <div className="security-note"><strong>After a password change</strong><p>All active sessions are ended automatically and you will sign in again with the new password.</p></div>
          </aside>
        </div>
      </section>
    </div>
  );
}
