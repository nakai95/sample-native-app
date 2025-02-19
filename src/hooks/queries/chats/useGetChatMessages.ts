import { useRepository } from "@/context/repository";
import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";

export const useGetChatMessages = (roomId: string, limit: number) => {
  const queryClient = useQueryClient();
  const {
    chats: { getChatMessages },
  } = useRepository();
  const queryKey = ["chats", "getChatMessages", roomId];

  const { data, error, isFetching, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey,
      queryFn: ({ pageParam }) => getChatMessages(roomId, limit, pageParam),
      initialPageParam: 0,
      getNextPageParam: (lastPage, allPages) => {
        const nextOffset = allPages.length * limit;
        return lastPage.length === limit ? nextOffset : undefined;
      },
      refetchOnMount: true,
      gcTime: 0,
    });

  const clearChatMessagesCache = () => {
    queryClient.removeQueries({ queryKey });
  };

  return {
    messages: data?.pages.flat() ?? [],
    error,
    isFetching,
    hasNextPage,
    fetchNextPage,
    clearChatMessagesCache,
  };
};
