import { useQuery } from '@tanstack/react-query';
import { useAuthStore } from '@/entities/auth/model/useAuthStore';
import { userApi } from '../api/userApi';

export const userKeys = {
  all: ['user'] as const,
  me: () => [...userKeys.all, 'me'] as const,
};

export const useUserQuery = () => {
  const { isAuthenticated, isLoading: isAuthLoading } = useAuthStore();

  const { data: user, isLoading, isError, error } = useQuery({
    queryKey: userKeys.me(),
    queryFn: userApi.getUser,
    enabled: isAuthenticated && !isAuthLoading,
  });

  return { user, isLoading: isLoading || isAuthLoading, isError, error };
};
