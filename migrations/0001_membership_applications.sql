CREATE TABLE IF NOT EXISTS membership_applications (
  id TEXT PRIMARY KEY,
  application_ref TEXT NOT NULL UNIQUE,
  full_name TEXT NOT NULL,
  date_of_birth TEXT NOT NULL,
  membership_basis TEXT NOT NULL CHECK (membership_basis IN ('origin', 'resident')),
  juba_area TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  supporting_document_key TEXT,
  supporting_document_name TEXT,
  supporting_document_type TEXT,
  status TEXT NOT NULL DEFAULT 'received',
  consent_at TEXT NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_membership_applications_reference
  ON membership_applications(application_ref);

CREATE INDEX IF NOT EXISTS idx_membership_applications_created_at
  ON membership_applications(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_membership_applications_status
  ON membership_applications(status);
