import { Flex, View } from "@aws-amplify/ui-react";
import { LevelSelectionCardCollection, NavBar } from "../../src/ui-components";
import HeadingCard from "../../src/components/HeadingCard";

import { useRouter } from "next/router";

export default function Practice() {
  const router = useRouter();

  return (
    <>
      <View backgroundImage="linear-gradient(-45deg, rgba(221,214,243,1), rgba(250,172,168,1))" paddingBottom="10rem">
        <NavBar width={"100vw"} />

        <Flex direction={"column"} alignItems={"center"}>
          <HeadingCard heading="Get your daily practice 🚀" subHeading="Say goodbye to those worksheets!" />
          <LevelSelectionCardCollection
            wrap="wrap"
            maxWidth={"80vw"}
            justifyContent="center"
            overrideItems={({ item, index }) => ({
              overrides: {
                "Card Button": {
                  onClick: () => {
                    router.push(`/game/${item.linkTo}`);
                  },
                },
              },
            })}
          />
        </Flex>
      </View>
    </>
  );
}
