const API_BASE = import.meta.env.API_BASE_URL;

export async function fetchWorkshops() {
  const res = await fetch(`${API_BASE}/workshops/`);
  if (!res.ok) throw new Error("Failed to fetch workshops");
  return res.json();
}

export async function fetchWorkshopById(id) {
  const res = await fetch(`${API_BASE}/workshops/${id}`);
  if (!res.ok) throw new Error("Failed to fetch workshop");
  return res.json();
}

export async function createWorkshop(data) {
  const res = await fetch(`${API_BASE}/workshops/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to create workshop");
  return res.json();
}

export async function updateWorkshop(id, data) {
  const res = await fetch(`${API_BASE}/workshops/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to update workshop");
  return res.json();
}

export async function deleteWorkshop(id) {
  const res = await fetch(`${API_BASE}/workshops/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Failed to delete workshop");
  return res.json();
}
