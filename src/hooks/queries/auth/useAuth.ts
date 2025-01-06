import { useRepository } from "@/context/repository";
import { useMutation } from "@tanstack/react-query";

export const useAuth = () => {
  const {
    auth: { signIn },
  } = useRepository();
  const { data, error, isPending, mutate } = useMutation({
    mutationFn: signIn,
  });
  return {
    data,
    error,
    isPending,
    signIn: mutate,
  };
};
