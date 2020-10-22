import { FetchApi } from "./utils";
import { ApiPoll, ApiPollList, ApiPollCreatePayload } from "./mocks";

export const lpqRessource = (fetchApi: ReturnType<FetchApi>) => ({
  getPolls: (): Promise<ApiPollList> => fetchApi.get(`polls/`),
  getPoll: (params: { id: string }): Promise<ApiPoll> =>
    fetchApi.get(`polls/${params.id}/`),
  createPoll: (params: { payload: ApiPollCreatePayload }) =>
    fetchApi.post(`polls/`, params.payload),
});
