import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

function useGithubUser(username) {
  
  const {
    data,
    error,
    isValidating,
    mutate: swrMutate,
  } = useSWR(
    username ? `https://api.github.com/users/${username}` : null,
    fetcher
  );

  
  const refetch = () => {
    if (username) {
      swrMutate();
    }
  };

  return {
    data,
    error,
    isLoading: !data && !error,
    isValidating,
    refetch,
  };
}

export default useGithubUser;
