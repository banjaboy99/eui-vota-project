const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:5000/api';

export async function healthCheck() {
  const res = await fetch(`${API_BASE}/health`);
  if (!res.ok) throw new Error('API not healthy');
  return res.json();
}