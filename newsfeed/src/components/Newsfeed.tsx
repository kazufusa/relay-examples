import * as React from "react";
import { graphql } from "relay-runtime";
import {
  useLazyLoadQuery,
} from "react-relay";
import type { NewsfeedQuery as NewsfeedQueryType } from "./__generated__/NewsfeedQuery.graphql";
import NewsfeedContents from "./NewsfeedContents";

const NewsfeedQuery = graphql`
  query NewsfeedQuery {
    ...NewsfeedContentsFragment
  }
`;

export default function Newsfeed() {
  const query = useLazyLoadQuery<NewsfeedQueryType>(NewsfeedQuery, {});

  return (
    <div className="newsfeed">
      <NewsfeedContents query={query} />
    </div>
  );
}
