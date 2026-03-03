import { defaultShouldDehydrateQuery, Query } from '@tanstack/react-query';

const queryClientOptions = {
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5분동안 fresh 상태 유지
      retry: 1, // 실패 시, 1번만 재시도
      refetchOnMount: false, // 마운트 시 재요청 하지 않음
    },
    /**
     * dehydrate:
     * SSR 환경에서 서버에서 실행된 쿼리 상태를 JSON으로 직렬화해
     * 클라이언트로 전달하는 설정
     *
     * 기본적으로 성공한 쿼리만 직렬화하지만,
     * pending 상태인 쿼리도 포함시켜
     * 서버에서 이미 시작된 fetch를 클라이언트에서
     * 다시 요청하지 않고 이어받을 수 있도록 한다.
     *
     * → 중복 네트워크 요청 방지
     * → hydration 시 UI 깜빡임 방지
     */
    dehydrate: {
      shouldDehydrateQuery: (query: Query) =>
        defaultShouldDehydrateQuery(query) || query.state.status === 'pending',
    },
  },
};

export default queryClientOptions;
