type StatePanelProps = {
  title: string;
  message: string;
  tone?: "neutral" | "error";
};

export function StatePanel({ title, message, tone = "neutral" }: StatePanelProps) {
  return (
    <div className={tone === "error" ? "state-panel state-panel-error" : "state-panel"} role={tone === "error" ? "alert" : "status"}>
      <strong>{title}</strong>
      <p>{message}</p>
    </div>
  );
}

export function LoadingState({ label = "Loading" }: { label?: string }) {
  return (
    <div className="loading-state" role="status" aria-live="polite">
      <span className="loading-spinner" aria-hidden="true" />
      <span>{label}</span>
    </div>
  );
}
