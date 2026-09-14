import { useEffect, useState } from "react";
import { apiJson } from "../lib/memberApi";

export default function MemberLogoutPage() {
  const [message, setMessage] = useState("Signing you out…");

  useEffect(() => {
    apiJson("/api/auth/logout", { method: "POST" })
      .then(() => window.location.replace("/?page=member-login"))
      .catch(() => setMessage("You could not be signed out. Return to the portal and try again."));
  }, []);

  return (
    <section className="portal-loading" aria-live="polite">
      <div className="container"><p>{message}</p></div>
    </section>
  );
}
