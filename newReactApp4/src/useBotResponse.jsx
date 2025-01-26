import useSWR from "swr";

// Fetcher function for SWR
const fetcher = (url) => fetch(url).then((res) => res.json());

export function useBotResponse(userMessage) {
  // Only make the request if userMessage is provided
  const { data, error, isValidating, mutate } = useSWR(
    userMessage
      ? `https://mocki.io/v1/your-mock-id?message=${encodeURIComponent(
          userMessage
        )}`
      : null,
    fetcher
  );

  return {
    response: data ? data.response : null,
    error,
    isLoading: !data && !error,
    isValidating,
    refetch: mutate, // Allows for manual refetch
  };
}
