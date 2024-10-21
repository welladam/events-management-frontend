import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api', // Ajuste a URL conforme necessário
  headers: {
    'Content-Type': 'application/json',
  },
});

// Adicionar interceptadores de requisição ou resposta, se necessário
api.interceptors.request.use((config) => {
  // Exemplo: adicionar token de sessão aos cabeçalhos
  const token = sessionStorage.getItem('authToken');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

export default api;
