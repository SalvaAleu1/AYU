PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS members (
  id TEXT PRIMARY KEY,
  member_number TEXT NOT NULL UNIQUE,
  full_name TEXT NOT NULL,
  date_of_birth TEXT,
  membership_type TEXT NOT NULL DEFAULT 'absolute' CHECK (membership_type IN ('absolute', 'honorary')),
  membership_status TEXT NOT NULL DEFAULT 'active' CHECK (membership_status IN ('active', 'inactive', 'suspended')),
  term_label TEXT,
  joined_at TEXT,
  phone TEXT,
  email TEXT,
  juba_area TEXT,
  short_bio TEXT,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_members_status ON members(membership_status);
CREATE INDEX IF NOT EXISTS idx_members_email ON members(email);
CREATE INDEX IF NOT EXISTS idx_members_phone ON members(phone);

CREATE TABLE IF NOT EXISTS member_accounts (
  id TEXT PRIMARY KEY,
  member_id TEXT NOT NULL UNIQUE,
  password_hash TEXT,
  activation_token_hash TEXT,
  activation_expires_at TEXT,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'active', 'disabled')),
  password_changed_at TEXT,
  activated_at TEXT,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  FOREIGN KEY (member_id) REFERENCES members(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_member_accounts_status ON member_accounts(status);

CREATE TABLE IF NOT EXISTS member_sessions (
  id TEXT PRIMARY KEY,
  account_id TEXT NOT NULL,
  member_id TEXT NOT NULL,
  token_hash TEXT NOT NULL UNIQUE,
  expires_at TEXT NOT NULL,
  created_at TEXT NOT NULL,
  last_seen_at TEXT NOT NULL,
  FOREIGN KEY (account_id) REFERENCES member_accounts(id) ON DELETE CASCADE,
  FOREIGN KEY (member_id) REFERENCES members(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_member_sessions_member ON member_sessions(member_id);
CREATE INDEX IF NOT EXISTS idx_member_sessions_expires ON member_sessions(expires_at);

CREATE TABLE IF NOT EXISTS auth_rate_limits (
  key_hash TEXT PRIMARY KEY,
  window_started_at TEXT NOT NULL,
  attempts INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS member_privacy_preferences (
  member_id TEXT PRIMARY KEY,
  directory_visible INTEGER NOT NULL DEFAULT 0 CHECK (directory_visible IN (0, 1)),
  photo_visible INTEGER NOT NULL DEFAULT 0 CHECK (photo_visible IN (0, 1)),
  bio_visible INTEGER NOT NULL DEFAULT 0 CHECK (bio_visible IN (0, 1)),
  email_visible INTEGER NOT NULL DEFAULT 0 CHECK (email_visible IN (0, 1)),
  phone_visible INTEGER NOT NULL DEFAULT 0 CHECK (phone_visible IN (0, 1)),
  updated_at TEXT NOT NULL,
  FOREIGN KEY (member_id) REFERENCES members(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS member_announcements (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  body TEXT NOT NULL,
  published_at TEXT NOT NULL,
  audience TEXT NOT NULL DEFAULT 'all-members' CHECK (audience IN ('all-members', 'absolute-members', 'honorary-members')),
  is_published INTEGER NOT NULL DEFAULT 0 CHECK (is_published IN (0, 1)),
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_member_announcements_published ON member_announcements(is_published, published_at);

CREATE TABLE IF NOT EXISTS member_documents (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  file_key TEXT,
  external_url TEXT,
  audience TEXT NOT NULL DEFAULT 'all-members' CHECK (audience IN ('all-members', 'absolute-members', 'honorary-members')),
  published_at TEXT NOT NULL,
  is_published INTEGER NOT NULL DEFAULT 0 CHECK (is_published IN (0, 1)),
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_member_documents_published ON member_documents(is_published, published_at);

CREATE TABLE IF NOT EXISTS member_forms (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  destination_url TEXT,
  audience TEXT NOT NULL DEFAULT 'all-members' CHECK (audience IN ('all-members', 'absolute-members', 'honorary-members')),
  opens_at TEXT,
  closes_at TEXT,
  is_published INTEGER NOT NULL DEFAULT 0 CHECK (is_published IN (0, 1)),
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_member_forms_published ON member_forms(is_published, opens_at, closes_at);
