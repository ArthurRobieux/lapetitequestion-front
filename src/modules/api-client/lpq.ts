import { FetchApi } from "./utils";
import {
  ApiPoll,
  ApiPollList,
  ApiPollCreatePayload,
  ApiPollAnswerPayload,
} from "./mocks";

export const lpqRessource = (fetchApi: ReturnType<FetchApi>) => ({
  getPolls: (): Promise<ApiPollList> => fetchApi.get(`polls/`),
  getPoll: (params: { id: string }): Promise<ApiPoll> =>
    fetchApi.get(`polls/${params.id}/`),
  createPoll: (params: { payload: ApiPollCreatePayload }) =>
    fetchApi.post(`polls/`, params.payload),
  deletePoll: (params: { id: number }) =>
    fetchApi.delete(`polls/${params.id}/`),
  createAnswers: (params: { id: number; payload: ApiPollAnswerPayload }) =>
    fetchApi.post(`polls/${params.id}/`, params.payload),
});
