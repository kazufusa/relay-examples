/**
 * @generated SignedSource<<d9e1dd69fe1200848830392f8c0cdd26>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PosterByline$data = {
  readonly name: string | null;
  readonly profilePicture: {
    readonly url: string;
  } | null;
  readonly " $fragmentType": "PosterByline";
};
export type PosterByline$key = {
  readonly " $data"?: PosterByline$data;
  readonly " $fragmentSpreads": FragmentRefs<"PosterByline">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PosterByline",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Image",
      "kind": "LinkedField",
      "name": "profilePicture",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "url",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Actor",
  "abstractKey": "__isActor"
};

(node as any).hash = "7fe4a405070e94ade83f455c39ce68ee";

export default node;
