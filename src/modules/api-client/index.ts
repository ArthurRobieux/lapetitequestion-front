import { lpqRessource } from "./lpq";
import { fetchApi } from "./utils";

export const initApiClient = (host: string) => ({
  lpq: lpqRessource(fetchApi(host)),
});

export const apiClient = initApiClient("http://127.0.0.1:8000/api/");
