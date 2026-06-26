const BASE_URL = 'https://wehoware-saas.vercel.app';
const CLIENT_ID = 'bbd8a4a6-b5d8-4af9-aa5d-becfdcadc3ba';

export async function fetchServices(options = {}) {
  const { limit = 100, page = 1, sort = 'createdAt', order = 'desc' } = options;
  const url = `${BASE_URL}/api/public/services?clientId=${CLIENT_ID}&page=${page}&limit=${limit}&sort=${sort}&order=${order}`;

  try {
    const res = await fetch(url, { cache: 'no-store' });
    if (!res.ok) return { data: [], pagination: null };
    const json = await res.json();

    let data = [];
    let pagination = null;

    if (Array.isArray(json)) {
      data = json;
    } else if (Array.isArray(json.data)) {
      data = json.data;
      pagination = json.pagination || null;
    } else if (Array.isArray(json.services)) {
      data = json.services;
      pagination = json.pagination || null;
    }

    return { data, pagination };
  } catch {
    return { data: [], pagination: null };
  }
}
