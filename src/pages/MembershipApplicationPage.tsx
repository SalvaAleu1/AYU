import { useState } from "react";
import type { FormEvent } from "react";
import PageHero from "../components/PageHero";
import { applicationPrivacyPoints } from "../data/membershipData";

type ApplicationFields = {
  fullName: string;
  dateOfBirth: string;
  membershipBasis: "" | "origin" | "resident";
  jubaArea: string;
  phone: string;
  email: string;
  declarationAccepted: boolean;
  privacyAccepted: boolean;
  website: string;
};

type SubmitState =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "success"; reference: string }
  | { status: "error"; message: string };

const initialFields: ApplicationFields = {
  fullName: "",
  dateOfBirth: "",
  membershipBasis: "",
  jubaArea: "",
  phone: "",
  email: "",
  declarationAccepted: false,
  privacyAccepted: false,
  website: "",
};

function calculateAge(dateOfBirth: string) {
  const birthDate = new Date(`${dateOfBirth}T00:00:00`);
  if (Number.isNaN(birthDate.getTime())) return null;

  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();
  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) age -= 1;
  return age;
}

function validate(fields: ApplicationFields, document: File | null) {
  if (fields.fullName.trim().length < 3) return "Enter your full name.";
  const age = calculateAge(fields.dateOfBirth);
  if (age === null) return "Enter a valid date of birth.";
  if (age < 18 || age > 45) return "Absolute Membership is constitutionally limited to ages 18 to 45.";
  if (!fields.membershipBasis) return "Select the membership basis that applies to you.";
  if (fields.jubaArea.trim().length < 2) return "Enter your current area of residence in Juba.";
  if (fields.phone.replace(/\D/g, "").length < 7) return "Enter a valid phone number.";
  if (fields.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) return "Enter a valid email address or leave the email field blank.";
  if (!fields.declarationAccepted) return "Confirm that the information provided is accurate.";
  if (!fields.privacyAccepted) return "Confirm that you agree to the use of your information for AYU membership administration.";

  if (document) {
    const allowedTypes = ["application/pdf", "image/jpeg", "image/png"];
    if (!allowedTypes.includes(document.type)) return "Supporting documents must be PDF, JPG or PNG files.";
    if (document.size > 5 * 1024 * 1024) return "Supporting documents must not exceed 5 MB.";
  }

  return null;
}

export default function MembershipApplicationPage() {
  const [fields, setFields] = useState<ApplicationFields>(initialFields);
  const [document, setDocument] = useState<File | null>(null);
  const [submitState, setSubmitState] = useState<SubmitState>({ status: "idle" });

  const updateField = <K extends keyof ApplicationFields>(key: K, value: ApplicationFields[K]) => {
    setFields((current) => ({ ...current, [key]: value }));
    if (submitState.status === "error") setSubmitState({ status: "idle" });
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formElement = event.currentTarget;
    const validationError = validate(fields, document);
    if (validationError) {
      setSubmitState({ status: "error", message: validationError });
      return;
    }

    setSubmitState({ status: "submitting" });

    const payload = new FormData();
    payload.append("fullName", fields.fullName.trim());
    payload.append("dateOfBirth", fields.dateOfBirth);
    payload.append("membershipBasis", fields.membershipBasis);
    payload.append("jubaArea", fields.jubaArea.trim());
    payload.append("phone", fields.phone.trim());
    payload.append("email", fields.email.trim());
    payload.append("declarationAccepted", fields.declarationAccepted ? "yes" : "no");
    payload.append("privacyAccepted", fields.privacyAccepted ? "yes" : "no");
    payload.append("website", fields.website);
    if (document) payload.append("supportingDocument", document);

    try {
      const response = await fetch("/api/membership/applications", {
        method: "POST",
        body: payload,
        credentials: "same-origin",
        headers: { Accept: "application/json" },
      });

      const result = await response.json().catch(() => null) as { reference?: string; message?: string } | null;
      if (!response.ok || !result?.reference) {
        throw new Error(result?.message || "Your application could not be submitted. Please try again.");
      }

      setSubmitState({ status: "success", reference: result.reference });
      setFields(initialFields);
      setDocument(null);
      formElement.reset();
    } catch (error) {
      setSubmitState({
        status: "error",
        message: error instanceof Error ? error.message : "Your application could not be submitted. Please try again.",
      });
    }
  };

  return (
    <>
      <PageHero
        eyebrow="Membership Application"
        title="Apply for Absolute Membership of AYU-Juba."
        description="Eligible Apuk youth based in Juba can submit their membership information through this form. Please provide accurate contact and eligibility information."
        aside={
          <dl className="page-fact-list">
            <div><dt>Age requirement</dt><dd>18–45 years</dd></div>
            <div><dt>Membership type</dt><dd>Absolute Membership</dd></div>
            <div><dt>Registration fee</dt><dd>30,000 SSP per term</dd></div>
            <div><dt>Privacy</dt><dd>Personal information is private by default</dd></div>
          </dl>
        }
      />

      <section className="section section-white">
        <div className="container application-layout">
          <form className="membership-application-form" onSubmit={onSubmit} noValidate>
            <div className="form-section-heading">
              <span>01</span>
              <div>
                <h2>Eligibility & identity</h2>
                <p>Provide the basic information required for an AYU membership application.</p>
              </div>
            </div>

            <div className="form-grid">
              <label className="field field-wide">
                <span>Full name</span>
                <input
                  type="text"
                  autoComplete="name"
                  maxLength={120}
                  value={fields.fullName}
                  onChange={(event) => updateField("fullName", event.target.value)}
                  required
                />
              </label>

              <label className="field">
                <span>Date of birth</span>
                <input
                  type="date"
                  value={fields.dateOfBirth}
                  onChange={(event) => updateField("dateOfBirth", event.target.value)}
                  required
                />
              </label>

              <label className="field">
                <span>Membership basis</span>
                <select
                  value={fields.membershipBasis}
                  onChange={(event) => updateField("membershipBasis", event.target.value as ApplicationFields["membershipBasis"])}
                  required
                >
                  <option value="">Select one</option>
                  <option value="origin">Apuk citizen by origin</option>
                  <option value="resident">Resident</option>
                </select>
              </label>

              <label className="field field-wide">
                <span>Current area of residence in Juba</span>
                <input
                  type="text"
                  autoComplete="address-level2"
                  maxLength={120}
                  value={fields.jubaArea}
                  onChange={(event) => updateField("jubaArea", event.target.value)}
                  required
                />
              </label>
            </div>

            <div className="form-section-heading">
              <span>02</span>
              <div>
                <h2>Contact information</h2>
                <p>Use contact details through which AYU can reach you regarding your membership application.</p>
              </div>
            </div>

            <div className="form-grid">
              <label className="field">
                <span>Phone number</span>
                <input
                  type="tel"
                  autoComplete="tel"
                  maxLength={30}
                  value={fields.phone}
                  onChange={(event) => updateField("phone", event.target.value)}
                  required
                />
              </label>

              <label className="field">
                <span>Email address <small>(optional)</small></span>
                <input
                  type="email"
                  autoComplete="email"
                  maxLength={160}
                  value={fields.email}
                  onChange={(event) => updateField("email", event.target.value)}
                />
              </label>

              <label className="field field-wide">
                <span>Supporting document <small>(optional, PDF/JPG/PNG up to 5 MB)</small></span>
                <input
                  type="file"
                  accept="application/pdf,image/jpeg,image/png"
                  onChange={(event) => setDocument(event.target.files?.[0] ?? null)}
                />
              </label>
            </div>

            <div className="form-section-heading">
              <span>03</span>
              <div>
                <h2>Declaration & consent</h2>
                <p>Confirm the accuracy of the information you are submitting and its use for membership administration.</p>
              </div>
            </div>

            <div className="consent-stack">
              <label className="checkbox-field">
                <input
                  type="checkbox"
                  checked={fields.declarationAccepted}
                  onChange={(event) => updateField("declarationAccepted", event.target.checked)}
                />
                <span>I confirm that the information in this application is accurate to the best of my knowledge.</span>
              </label>

              <label className="checkbox-field">
                <input
                  type="checkbox"
                  checked={fields.privacyAccepted}
                  onChange={(event) => updateField("privacyAccepted", event.target.checked)}
                />
                <span>I agree that AYU-Juba may use the information I provide for membership administration and official communication.</span>
              </label>
            </div>

            <label className="application-trap" aria-hidden="true">
              Website
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={fields.website}
                onChange={(event) => updateField("website", event.target.value)}
              />
            </label>

            <div className="form-submit-row">
              <button className="button button-dark" type="submit" disabled={submitState.status === "submitting"}>
                {submitState.status === "submitting" ? "Submitting…" : "Submit membership application"}
              </button>
              <a className="text-link" href="/?page=membership">Review membership information</a>
            </div>

            <div className="application-status" aria-live="polite">
              {submitState.status === "error" ? <p className="form-error">{submitState.message}</p> : null}
              {submitState.status === "success" ? (
                <div className="form-success">
                  <strong>Application submitted successfully.</strong>
                  <p>Your reference is <b>{submitState.reference}</b>. Keep this reference for your records.</p>
                </div>
              ) : null}
            </div>
          </form>

          <aside className="application-aside">
            <p className="eyebrow">Your Information</p>
            <h2>Privacy and responsible data use.</h2>
            <div className="privacy-point-list">
              {applicationPrivacyPoints.map((point) => <p key={point}>{point}</p>)}
            </div>
            <p className="application-aside-note">Honorary Membership is not applied for through this form; it is governed separately by the Constitution.</p>
          </aside>
        </div>
      </section>
    </>
  );
}
