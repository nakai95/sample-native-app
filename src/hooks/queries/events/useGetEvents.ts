import { useRepository } from "@/context/repository";
import { useQuery } from "@tanstack/react-query";

export const useGetEvents = () => {
  const {
    events: { getEvents },
  } = useRepository();
  const { data, error, isFetching, refetch } = useQuery({
    queryKey: ["events", "getEvents"],
    queryFn: getEvents,
  });
  return {
    events: data,
    error,
    isFetching,
    refetch,
  };
};
