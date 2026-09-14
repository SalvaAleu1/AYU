import { FormEvent, useEffect, useState } from "react";
import MemberPortalNav from "../components/MemberPortalNav";
import { apiJson, isUnauthorized, type MemberSummary } from "../lib/memberApi";

type State =
  | { status: "loading" }
  | { status: "ready"; member: MemberSummary }
  | { status: "signed-out" }
  | { status: "error"; message: string };

type EditableProfileField = "phone" | "email" | "jubaArea" | "shortBio";

export default function MemberProfilePage() {
  const [state, setState] = useState<State>({ status: "loading" });
  const [message, setMessage] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    apiJson<{ member: MemberSummary }>("/api/member/profile")
      .then(({ member }) => setState({ status: "ready", member }))
      .catch((error) => setState(isUnauthorized(error)
        ? { status: "signed-out" }
        : { status: "error", message: error instanceof Error ? error.message : "Your profile could not be loaded." }));
  }, []);

  if (state.status === "signed-out") {
    window.location.replace("/?page=member-login");
    return null;
  }

  if (state.status === "loading") return <div className="portal-loading"><div className="container">Loading your profile…</div></div>;
  if (state.status === "error") return <div className="portal-loading"><div className="container">{state.message}</div></div>;

  const member = state.member;
  const update = (field: EditableProfileField, value: string) => {
    setState({ status: "ready", member: { ...member, [field]: value } });
    setMessage("");
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSaving(true);
    setMessage("");
    try {
      await apiJson<{ updated: boolean }>("/api/member/profile", {
        method: "PUT",
        body: JSON.stringify({
          phone: member.phone || "",
          email: member.email || "",
          jubaArea: member.jubaArea || "",
          shortBio: member.shortBio || "",
        }),
      });
      setMessage("Profile updated successfully.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Your profile could not be updated.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="portal-page">
      <section className="portal-topbar"><div className="container portal-topbar-inner"><a className="portal-brand" href="/?page=member-portal"><img src="/ayu-logo.webp" alt="" width="44" height="42" /><span>AYU Member Portal</span></a><MemberPortalNav active="profile" /></div></section>

      <section className="portal-inner-hero"><div className="container"><p className="eyebrow eyebrow-light">My Profile</p><h1>{member.fullName}</h1><p>Keep your contact information current while your constitutional membership record remains protected.</p></div></section>

      <section className="section section-white portal-section">
        <div className="container profile-settings-grid">
          <div className="portal-panel">
            <p className="eyebrow">Membership Record</p>
            <dl className="portal-detail-list">
              <div><dt>Member number</dt><dd>{member.memberNumber}</dd></div>
              <div><dt>Full name</dt><dd>{member.fullName}</dd></div>
              <div><dt>Membership type</dt><dd>{member.membershipType === "honorary" ? "Honorary" : "Absolute"}</dd></div>
              <div><dt>Status</dt><dd>{member.membershipStatus}</dd></div>
              {member.termLabel ? <div><dt>Term</dt><dd>{member.termLabel}</dd></div> : null}
            </dl>
          </div>

          <form className="portal-panel profile-edit-form" onSubmit={submit}>
            <p className="eyebrow">Contact & Bio</p>
            <h2>Profile information</h2>
            <label className="field"><span>Phone</span><input type="tel" maxLength={30} value={member.phone || ""} onChange={(event) => update("phone", event.target.value)} /></label>
            <label className="field"><span>Email</span><input type="email" maxLength={160} value={member.email || ""} onChange={(event) => update("email", event.target.value)} /></label>
            <label className="field"><span>Area of residence in Juba</span><input type="text" maxLength={120} value={member.jubaArea || ""} onChange={(event) => update("jubaArea", event.target.value)} /></label>
            <label className="field"><span>Short bio</span><textarea rows={5} maxLength={600} value={member.shortBio || ""} onChange={(event) => update("shortBio", event.target.value)} /></label>
            <p className="field-hint">Public visibility is controlled separately from your profile information.</p>
            {message ? <p className="portal-form-message" aria-live="polite">{message}</p> : null}
            <button className="button button-dark" type="submit" disabled={saving}>{saving ? "Saving…" : "Save profile"}</button>
          </form>
        </div>
      </section>
    </div>
  );
}
