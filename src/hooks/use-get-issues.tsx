import { useQuery } from "@tanstack/react-query";
import { stateStore } from "../store/state-store";
import APIs from "../apis";

const useGetIssue = () => {
  const { currentState } = stateStore();
  const { data, isLoading, error } = useQuery({
    queryKey: ["issues"],
    queryFn: () => APIs.getIssues(),
    gcTime: 1000 * 60 * 5,
    retry: false,
    refetchOnWindowFocus: false,
    select: (data) => {
      if (currentState === "전체" || currentState === "") {
        return data;
      }
      return data.filter((item) => {
        return item.state === currentState;
      });
    },
  });

  return {
    data,
    isLoading,
    error,
  };
};

export default useGetIssue;
