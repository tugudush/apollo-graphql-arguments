import React from "react";
import { gql } from "../__generated__";
import { useQuery } from "@apollo/client";
import { Layout, QueryResult } from "../components";
import { useParams } from "react-router-dom";

export const GET_TRACK = gql(`
  # our query goes here
`);

const Track = () => {
  const { trackId = "" } = useParams();
  return <Layout></Layout>;
};

export default Track;
