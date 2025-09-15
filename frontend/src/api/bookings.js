const API_BASE = import.meta.env.API_BASE_URL;

export async function fetchBookings() {
  const res = await fetch(`${API_BASE}/bookings/`);
  if (!res.ok) throw new Error("Failed to fetch bookings");
  return res.json();
}

export async function fetchBookingById(id) {
  const res = await fetch(`${API_BASE}/bookings/${id}`);
  if (!res.ok) throw new Error("Failed to fetch booking");
  return res.json();
}

export async function createBooking(data) {
  const res = await fetch(`${API_BASE}/bookings/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to create booking");
  return res.json();
}

export async function updateBooking(id, data) {
  const res = await fetch(`${API_BASE}/bookings/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to update booking");
  return res.json();
}

export async function deleteBooking(id) {
  const res = await fetch(`${API_BASE}/bookings/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Failed to delete booking");
  return res.json();
}
