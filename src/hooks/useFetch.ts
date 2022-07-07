import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { ref, watchEffect } from "vue";

export const Api = axios.create({ baseURL: "http://localhost:3001" });

export default function (
  fetchOptions: AxiosRequestConfig<any>,
  firstFetch: boolean = true
) {
  const response = ref<AxiosResponse | null>(null);
  const error = ref<unknown>(null);

  const fetch = async (props: AxiosRequestConfig<any> = fetchOptions) => {
    return Api({ ...fetchOptions, ...props })
      .then(res => {
        response.value = res;
        return res;
      })
      .catch(err => {
        error.value = err;
        return err;
      });
  };

  watchEffect(() => {
    if (firstFetch) fetch(fetchOptions);
  });

  return { response, fetch, error };
}
