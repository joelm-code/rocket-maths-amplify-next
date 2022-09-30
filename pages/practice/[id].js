import { DataStore } from "@aws-amplify/datastore";
import { Levels } from "../../src/models";
import { withSSRContext } from "aws-amplify";

import { useRouter } from "next/router";

import React, { useState, useEffect } from "react";

const PracticeLevel = ({ data }) => {
  const router = useRouter();

  useEffect(() => {
    const id = router.query.id;
    const levelCode = {
      custom: true,
      firstDigit: Number(id.slice(0, 1)),
      secondDigit: Number(id.slice(2, 3)),
      operator: id.slice(4).toString(),
    };
    //console.log(levelCode);
  }, []);

  return (
    <>
      {data.map((item) => (
        <h1 key={item.id}>{item.linkTo}</h1>
      ))}
    </>
  );
};

export default PracticeLevel;

export async function getStaticProps() {
  const models = await DataStore.query(Levels);
  const data = JSON.parse(JSON.stringify(models));
  return {
    props: {
      data,
    },
  };
}

export async function getStaticPaths(req) {
  const { DataStore } = withSSRContext(req);
  const models = await DataStore.query(Levels);
  const paths = models.map((item) => ({ params: { id: `${item.linkTo}` } }));
  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  };
}
