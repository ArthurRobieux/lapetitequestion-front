import React from "react";
import { RouteComponentProps } from "react-router-dom";

// import styles from "./styles.module.scss";
import { Button } from "../../common-ui";
import { poll_results_1, poll_results_2 } from "../../api-client/mocks";

import { PollLayout } from "../PollLayout";

export const PollResults = ({ match }: RouteComponentProps<{ id: string }>) => {
  let pollResultsData = null;
  if (match.params.id === "1") pollResultsData = poll_results_1;
  if (match.params.id === "2") pollResultsData = poll_results_2;

  return (
    <PollLayout>
      Résultats
      <Button
        description="Retour au sondage"
        to={`/poll/${match.params.id}/`}
      />
    </PollLayout>
  );
};
