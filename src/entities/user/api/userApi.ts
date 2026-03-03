import { api } from '@/shared/api/client';
import type { User } from '../model/types';

export const userApi = {
  getUser: () => api.get<User>('/api/v1/users/me'),
  deleteUser: () => api.delete<void>('/api/v1/users/me'),
};
