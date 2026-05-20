const BASE_URL = "http://localhost:8000/api";

export const getAvailableCars = async ({ pickupDate, returnDate, type }) => {
  const params = new URLSearchParams({ pickupDate, returnDate });
  if (type) params.append("type", type);

  const res = await fetch(`${BASE_URL}/cars/available?${params}`);
  const data = await res.json();

  if (!res.ok) throw new Error(data.message);
  return data;
};

export const createReservation = async (reservationData) => {
  const res = await fetch(`${BASE_URL}/reservations`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(reservationData),
  });
  const data = await res.json();

  if (!res.ok) throw new Error(data.message);
  return data;
};

export const getReservation = async (reference) => {
  const res = await fetch(`${BASE_URL}/reservations/${reference}`);
  const data = await res.json();

  if (!res.ok) throw new Error(data.message);
  return data;
};