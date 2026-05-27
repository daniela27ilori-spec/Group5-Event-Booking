const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api/v1';

const buildQuery = (params?: Record<string, unknown>) => {
  if (!params) return '';
  const query = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      query.append(key, String(value));
    }
  });
  const queryString = query.toString();
  return queryString ? `?${queryString}` : '';
};

const getHeaders = () => {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
  }
  return headers;
};

const parseResponse = async (response: Response) => {
  const text = await response.text();
  let result: any = text;
  try {
    result = JSON.parse(text);
  } catch {
    // ignore non-json body
  }

  if (!response.ok) {
    const message = result?.message || result?.error || response.statusText;
    throw new Error(message || 'API request failed');
  }

  return result?.data ?? result;
};

const api = {
  get: async <T>(endpoint: string, params?: Record<string, unknown>) => {
    const response = await fetch(`${API_BASE_URL}${endpoint}${buildQuery(params)}`, {
      headers: getHeaders(),
    });
    return parseResponse(response) as Promise<T>;
  },

  post: async <T>(endpoint: string, data: unknown) => {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(data),
    });
    return parseResponse(response) as Promise<T>;
  },

  put: async <T>(endpoint: string, data: unknown) => {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'PUT',
      headers: getHeaders(),
      body: JSON.stringify(data),
    });
    return parseResponse(response) as Promise<T>;
  },

  patch: async <T>(endpoint: string, data: unknown) => {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'PATCH',
      headers: getHeaders(),
      body: JSON.stringify(data),
    });
    return parseResponse(response) as Promise<T>;
  },

  delete: async <T>(endpoint: string) => {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'DELETE',
      headers: getHeaders(),
    });
    return parseResponse(response) as Promise<T>;
  },
};

export default api;