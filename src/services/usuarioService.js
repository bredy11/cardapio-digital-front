import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const usuarioService = {
  cadastrar(usuario) {
    return apiClient.post('/usuarios', usuario);
  },
};