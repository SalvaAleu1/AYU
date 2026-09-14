import { useEffect, useState } from "react";
import MemberPortalNav from "../components/MemberPortalNav";
import { apiJson, isUnauthorized, type PrivacyPreferences } from "../lib/memberApi";

type State =
  | { status: "loading" }
  | { status: "ready"; preferences: PrivacyPreferences }
  | { status: "signed-out" }
  | { status: "error"; message: string };

const preferenceCopy = [
  {
    key: "directoryVisible" as const,
    title: "Appear in a future public member directory",
    description: "Your member profile remains private unless you explicitly allow directory visibility."
  },
  {
    key: "photoVisible" as const,
    title: "Show profile photo",
    description: "Applies only when directory visibility is enabled and a profile photo exists."
  },
  {
    key: "bioVisible" as const,
    title: "Show short bio",
    description: "Allows your short profile biography to appear with a public directory entry."
  },
  {
    key: "emailVisible" as const,
    title: "Show email address",
    description: "Your email remains private unless you explicitly choose to make it visible."
  },
  {
    key: "phoneVisible" as const,
    title: "Show phone number",
    description: "Your phone number remains private unless you explicitly choose to make it visible."
  },
];

export default function MemberPrivacyPage() {
  const [state, setState] = useState<State>({ status: "loading" });
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    apiJson<{ preferences: PrivacyPreferences }>("/api/member/privacy")
      .then(({ preferences }) => setState({ status: "ready", preferences }))
      .catch((error) => setState(isUnauthorized(error)
        ? { status: "signed-out" }
        : { status: "error", message: error instanceof Error ? error.message : "Privacy settings could not be loaded." }));
  }, []);

  if (state.status === "signed-out") {
    window.location.replace("/?page=member-login");
    return null;
  }
  if (state.status === "loading") return <div className="portal-loading"><div className="container">Loading privacy settings…</div></div>;
  if (state.status === "error") return <div className="portal-loading"><div className="container">{state.message}</div></div>;

  const update = (key: keyof PrivacyPreferences, value: boolean) => {
    setState({ status: "ready", preferences: { ...state.preferences, [key]: value } });
    setMessage("");
  };

  const save = async () => {
    setSaving(true);
    setMessage("");
    try {
      const result = await apiJson<{ preferences: PrivacyPreferences }>("/api/member/privacy", {
        method: "PUT",
        body: JSON.stringify(state.preferences),
      });
      setState({ status: "ready", preferences: result.preferences });
      setMessage("Privacy settings updated successfully.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Privacy settings could not be updated.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="portal-page">
      <section className="portal-topbar"><div className="container portal-topbar-inner"><a className="portal-brand" href="/?page=member-portal"><img src="/ayu-logo.webp" alt="" width="44" height="42" /><span>AYU Member Portal</span></a><MemberPortalNav active="privacy" /></div></section>

      <section className="portal-inner-hero"><div className="container"><p className="eyebrow eyebrow-light">Privacy</p><h1>Control what can be made public.</h1><p>Your membership information is private by default. Public visibility requires your explicit choice.</p></div></section>

      <section className="section section-white portal-section">
        <div className="container privacy-settings-layout">
          <div className="privacy-settings-panel">
            {preferenceCopy.map((item) => (
              <label className="privacy-toggle-row" key={item.key}>
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.description}</p>
                </div>
                <span className="toggle-control">
                  <input
                    type="checkbox"
                    checked={Boolean(state.preferences[item.key])}
                    onChange={(event) => update(item.key, event.target.checked)}
                  />
                  <span aria-hidden="true" />
                </span>
              </label>
            ))}

            <div className="privacy-save-row">
              <button className="button button-dark" type="button" onClick={save} disabled={saving}>{saving ? "Saving…" : "Save privacy settings"}</button>
              {message ? <p className="portal-form-message" aria-live="polite">{message}</p> : null}
            </div>
          </div>

          <aside className="portal-panel privacy-summary-card">
            <p className="eyebrow">Privacy by Default</p>
            <h2>Your member record is not automatically public.</h2>
            <p>Directory visibility and individual contact fields are controlled separately. Turning on directory visibility does not automatically publish your email, phone number, photo or biography.</p>
            <p>Private membership administration records are not part of these public visibility settings.</p>
          </aside>
        </div>
      </section>
    </div>
  );
}
