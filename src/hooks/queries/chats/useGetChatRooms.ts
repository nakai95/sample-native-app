import { useRepository } from "@/context/repository";
import { useQuery } from "@tanstack/react-query";

export const useGetChatRooms = () => {
  const {
    chats: { getChatRooms },
  } = useRepository();
  const { data, error, isFetching, refetch } = useQuery({
    queryKey: ["chats", "getChatRooms"],
    queryFn: getChatRooms,
  });
  return {
    rooms: data,
    error,
    isFetching,
    refetch,
  };
};
