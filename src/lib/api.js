export const API_BASE_URL = process.env.API_BASE_URL || 'https://wehoware-saas.vercel.app';
export const API_CLIENT_ID = process.env.API_CLIENT_ID || 'bbd8a4a6-b5d8-4af9-aa5d-becfdcadc3ba';

export async function fetchServices(options = {}) {
  const { limit = 100, page = 1, sort = 'createdAt', order = 'desc' } = options;
  const url = `${API_BASE_URL}/api/public/services?clientId=${API_CLIENT_ID}&page=${page}&limit=${limit}&sort=${sort}&order=${order}`;

  try {
    const res = await fetch(url, { cache: 'no-store' });
    if (!res.ok) return { data: [], pagination: null };
    const json = await res.json();

    let data = [];
    let pagination = null;
    let schema = null;

    if (Array.isArray(json)) {
      data = json;
    } else if (Array.isArray(json.data)) {
      data = json.data;
      pagination = json.pagination || null;
      schema = json.schema || null;
    } else if (Array.isArray(json.services)) {
      data = json.services;
      pagination = json.pagination || null;
      schema = json.schema || null;
    }

    return { data, pagination, schema };
  } catch {
    return { data: [], pagination: null, schema: null };
  }
}
