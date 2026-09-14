export type MemberSummary = {
  memberNumber: string;
  fullName: string;
  membershipType: "absolute" | "honorary";
  membershipStatus: "active" | "inactive" | "suspended";
  termLabel?: string | null;
  joinedAt?: string | null;
  phone?: string | null;
  email?: string | null;
  jubaArea?: string | null;
  shortBio?: string | null;
  dateOfBirth?: string | null;
  hasProfilePhoto?: boolean;
};

export type PrivacyPreferences = {
  directoryVisible: boolean;
  photoVisible: boolean;
  bioVisible: boolean;
  emailVisible: boolean;
  phoneVisible: boolean;
  updatedAt?: string | null;
};

export type PortalPayload = {
  member: MemberSummary;
  privacy: PrivacyPreferences;
  announcements: Array<{ id: string; title: string; body: string; published_at: string }>;
  documents: Array<{ id: string; title: string; description?: string | null; url?: string | null; published_at: string }>;
  forms: Array<{ id: string; title: string; description?: string | null; destination_url?: string | null; opens_at?: string | null; closes_at?: string | null }>;
};

export async function apiJson<T>(url: string, init?: RequestInit): Promise<T> {
  const response = await fetch(url, {
    credentials: "same-origin",
    headers: {
      Accept: "application/json",
      ...(init?.body ? { "Content-Type": "application/json" } : {}),
      ...(init?.headers || {}),
    },
    ...init,
  });

  const body = await response.json().catch(() => null) as (T & { message?: string }) | null;
  if (!response.ok) {
    const error = new Error(body?.message || "The request could not be completed.") as Error & { status?: number };
    error.status = response.status;
    throw error;
  }
  return body as T;
}

export function isUnauthorized(error: unknown) {
  return error instanceof Error && (error as Error & { status?: number }).status === 401;
}
