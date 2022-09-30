import React from "react";
import { Flex, Text } from "@aws-amplify/ui-react";

export default function HeadingCard(props) {
  const { heading = "heading", subHeading = "subheading" } = props;

  return (
    <Flex width="100vw" gap="10px" direction="column" position="relative" padding="80px 0px 40px 0px">
      <Flex gap="8px" direction="column" alignItems="center" shrink="0" position="relative" padding="0px 0px 0px 0px">
        <Text
          fontFamily="Inter"
          fontSize="32px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="48px"
          textAlign="center"
          display="flex"
          direction="column"
          justifyContent="center"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
        >
          {heading}
        </Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="center"
          display="flex"
          direction="column"
          justifyContent="center"
          width="100%"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
        >
          {subHeading}
        </Text>
      </Flex>
    </Flex>
  );
}
