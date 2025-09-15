const API_BASE = import.meta.env.API_BASE_URL;

export async function login(data) {
  const res = await fetch(`${API_BASE}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Login failed");
  return res.json();
}

export async function logout() {
  const res = await fetch(`${API_BASE}/auth/logout`, {
    method: "POST",
  });
  if (!res.ok) throw new Error("Logout failed");
  return res.json();
}

export async function fetchProfile() {
  const res = await fetch(`${API_BASE}/auth/profile`);
  if (!res.ok) throw new Error("Failed to fetch profile");
  return res.json();
}
