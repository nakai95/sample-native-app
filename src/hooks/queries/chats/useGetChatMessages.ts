import { useRepository } from "@/context/repository";
import { useQuery } from "@tanstack/react-query";

export const useGetChatMessages = (roomId: string) => {
  const {
    chats: { getChatMessages },
  } = useRepository();
  const { data, error, isFetching, refetch } = useQuery({
    queryKey: ["chats", "getChatMessages", roomId],
    queryFn: () => getChatMessages(roomId),
    refetchOnMount: true,
  });
  return {
    messages: data,
    error,
    isFetching,
    refetch,
  };
};
