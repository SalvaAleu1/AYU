PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS payment_channels (
  id TEXT PRIMARY KEY,
  label TEXT NOT NULL,
  method_type TEXT NOT NULL CHECK (method_type IN ('cash-office', 'bank-transfer', 'mobile-money', 'other')),
  currency TEXT NOT NULL CHECK (currency IN ('SSP', 'USD')),
  instructions TEXT NOT NULL,
  is_active INTEGER NOT NULL DEFAULT 0 CHECK (is_active IN (0, 1)),
  is_public INTEGER NOT NULL DEFAULT 0 CHECK (is_public IN (0, 1)),
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_payment_channels_public ON payment_channels(is_active, is_public, sort_order);

CREATE TABLE IF NOT EXISTS member_contributions (
  id TEXT PRIMARY KEY,
  member_id TEXT NOT NULL,
  contribution_type TEXT NOT NULL CHECK (contribution_type IN ('registration-fee', 'subscription', 'donation', 'project-support', 'fundraising', 'other')),
  title TEXT NOT NULL,
  description TEXT,
  amount_minor INTEGER NOT NULL CHECK (amount_minor >= 0),
  currency TEXT NOT NULL CHECK (currency IN ('SSP', 'USD')),
  payment_method TEXT,
  payment_reference TEXT,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'received', 'reversed')),
  received_at TEXT,
  recorded_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  FOREIGN KEY (member_id) REFERENCES members(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_member_contributions_member ON member_contributions(member_id, recorded_at DESC);
CREATE INDEX IF NOT EXISTS idx_member_contributions_status ON member_contributions(status, received_at DESC);

CREATE TABLE IF NOT EXISTS member_receipts (
  id TEXT PRIMARY KEY,
  contribution_id TEXT NOT NULL UNIQUE,
  member_id TEXT NOT NULL,
  receipt_number TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  amount_minor INTEGER NOT NULL CHECK (amount_minor >= 0),
  currency TEXT NOT NULL CHECK (currency IN ('SSP', 'USD')),
  payment_method TEXT,
  payment_reference TEXT,
  issued_at TEXT NOT NULL,
  created_at TEXT NOT NULL,
  FOREIGN KEY (contribution_id) REFERENCES member_contributions(id) ON DELETE RESTRICT,
  FOREIGN KEY (member_id) REFERENCES members(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_member_receipts_member ON member_receipts(member_id, issued_at DESC);

CREATE TABLE IF NOT EXISTS governance_documents (
  id TEXT PRIMARY KEY,
  category TEXT NOT NULL CHECK (category IN ('constitution', 'annual-report', 'audit-report', 'resolution', 'policy', 'bylaw', 'code', 'public-notice', 'other')),
  title TEXT NOT NULL,
  summary TEXT,
  period_label TEXT,
  document_url TEXT,
  file_key TEXT,
  published_at TEXT,
  is_published INTEGER NOT NULL DEFAULT 0 CHECK (is_published IN (0, 1)),
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_governance_documents_public ON governance_documents(is_published, category, published_at DESC);

CREATE TABLE IF NOT EXISTS constitution_versions (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  year INTEGER NOT NULL,
  effective_date TEXT,
  source_label TEXT,
  is_current INTEGER NOT NULL DEFAULT 0 CHECK (is_current IN (0, 1)),
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

CREATE UNIQUE INDEX IF NOT EXISTS idx_constitution_current ON constitution_versions(is_current) WHERE is_current = 1;
