import { FetchApi } from "./utils";
import { ApiPoll } from "./mocks";

export const lpqRessource = (fetchApi: ReturnType<FetchApi>) => ({
  getPolls: () => fetchApi.get(`polls/`),
  getPoll: (params: { id: string }) => fetchApi.get(`polls/${params.id}/`),
  createPoll: (params: { payload: ApiPoll }) =>
    fetchApi.post(`polls/`, params.payload),
});
