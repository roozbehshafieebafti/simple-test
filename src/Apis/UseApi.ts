import { useCallback, useState } from "react";

type ApiResponse<Response, Params> = {
  apiCall: (params?: Params) => Promise<{
    data: Response | unknown;
    isSuccess: boolean;
    isError: boolean;
  }>;
  data: Response | undefined;
  loading: boolean;
};

export function useApi<Response, Params>(
  callBack: (params?: Params) => Promise<Response>
): ApiResponse<Response, Params> {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Response>();

  const apiCall = useCallback(async (params?: Params) => {
    try {
      setLoading(true);
      const result = await callBack(params);
      setData(result);
      setLoading(false);
      return {
        data: result,
        isError: false,
        isSuccess: true,
      };
    } catch (error) {
      return {
        data: error,
        isError: true,
        isSuccess: false,
      };
    }
  }, [callBack]);

  return {
    apiCall,
    data,
    loading,
  };
}
