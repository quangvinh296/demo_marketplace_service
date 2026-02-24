"use client";

import { useCallback } from "react";
import { useLoading } from "@/contexts/loading-context";

export function useAsyncLoading() {
  const { setLoading, setLoadingText } = useLoading();

  const withLoading = useCallback(
    async <T,>(
      asyncFn: () => Promise<T>,
      loadingText = "Loading..."
    ): Promise<T> => {
      setLoadingText(loadingText);
      setLoading(true);
      try {
        const result = await asyncFn();
        return result;
      } finally {
        setLoading(false);
      }
    },
    [setLoading, setLoadingText]
  );

  return { withLoading };
}
