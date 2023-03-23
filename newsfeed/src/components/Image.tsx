import * as React from "react";
import { useFragment } from "react-relay";
import { graphql } from "relay-runtime";
import { ImageFragment$data, ImageFragment$key } from "./__generated__/ImageFragment.graphql";

const ImageFragment = graphql`
  fragment ImageFragment on Image {
    url
    altText
  }
`

type Props = {
  image: ImageFragment$key;
  width?: number;
  height?: number;
  className?: string;
};

export default function Image({
  image, width, height, className
}: Props): React.ReactElement {
  const data:ImageFragment$data = useFragment<ImageFragment$key>( ImageFragment, image);
  return (
    <img
      alt={data.altText}
      key={data.url}
      src={data.url}
      width={width}
      height={height}
      className={className}
    />
  );
}
