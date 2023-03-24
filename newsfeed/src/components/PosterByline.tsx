import * as React from "react";
import { useFragment } from "react-relay";
import { graphql } from "relay-runtime";
import Image from "./Image";
import { PosterBylineFragment$key } from "./__generated__/PosterBylineFragment.graphql";

const PosterBylineFragment = graphql`
  fragment PosterBylineFragment on Actor {
    name
    profilePicture {
      ...ImageFragment @arguments(width: 60, height: 60)
    }
  }
`;

type Props = {
  poster: PosterBylineFragment$key;
};

export default function PosterByline({ poster }: Props): React.ReactElement {
  const data = useFragment<PosterBylineFragment$key>(
    PosterBylineFragment,
    poster
  );
  return (
    <div className="byline">
      <Image
        image={data.profilePicture}
        width={60}
        height={60}
        className="byline__image"
      />
      <div className="byline__name">{data.name}</div>
    </div>
  );
}
