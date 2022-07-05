import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { ref, watchEffect } from "vue";

const Api = axios.create({ baseURL: (import.meta as any).env.BASE_URL });

export default function (
  fetchOptions: AxiosRequestConfig<any>,
  firstFetch: boolean = true
) {
  const response = ref<AxiosResponse | null>(null);
  const error = ref<unknown>(null);

  const fetch = async (props: AxiosRequestConfig<any>) => {
    return Api(props)
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
