import { Flex, View } from "@aws-amplify/ui-react";
import { HomeCardCollection, NavBar } from "../src/ui-components";
import HeadingCard from "../src/components/HeadingCard";

import { useRouter } from "next/router";

function Home() {
  const router = useRouter();

  return (
    <>
      <View backgroundImage="linear-gradient(-45deg, rgba(221,214,243,1), rgba(250,172,168,1))" paddingBottom="10rem">
        <NavBar width={"100vw"} />
        <Flex direction={"column"} alignItems={"center"}>
          <HeadingCard heading="Welcome Captain 🚀" subHeading="Choose your adventure" />

          <HomeCardCollection
            justifyContent={"center"}
            wrap={"wrap"}
            overrideItems={({ item, index }) => ({
              overrides: {
                "Card Button": {
                  onClick: () => {
                    router.push(`/${item.linkTo}`);
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

export default Home;
