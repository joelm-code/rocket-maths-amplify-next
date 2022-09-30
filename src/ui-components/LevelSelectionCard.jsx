/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Badge, Button, Flex, Text } from "@aws-amplify/ui-react";
export default function LevelSelectionCard(props) {
  const { level, overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      justifyContent="center"
      position="relative"
      borderRadius="8px"
      padding="24px 24px 24px 24px"
      backgroundColor="rgba(255,255,255,0.5)"
      {...rest}
      {...getOverrideProps(overrides, "LevelSelectionCard")}
    >
      <Flex
        gap="8px"
        direction="column"
        width="216px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        overflow="hidden"
        position="relative"
        padding="10px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,0)"
        {...getOverrideProps(overrides, "Card Contents")}
      >
        <Flex
          gap="16px"
          justifyContent="space-between"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Header Container")}
        >
          <Text
            fontFamily="Inter"
            fontSize="24px"
            fontWeight="700"
            color="rgba(0,0,0,1)"
            textTransform="capitalize"
            lineHeight="36px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={level?.cardTitle}
            {...getOverrideProps(overrides, "Card Title")}
          ></Text>
          <Badge
            display={
              level?.badgeExists && level?.badgeExists == true
                ? "inline"
                : "none"
            }
            gap="10px"
            width="fit-content"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            height="24px"
            position="relative"
            borderRadius="32px"
            fontSize="12px"
            color="rgba(54,94,61,1)"
            lineHeight="12px"
            fontFamily="Inter"
            fontWeight="400"
            textAlign="left"
            direction="column"
            size="small"
            variation="success"
            backgroundColor={level?.badgeColor}
            children={level?.badgeTitle}
            {...getOverrideProps(overrides, "Badge")}
          ></Badge>
        </Flex>
        <Flex
          gap="-14px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="34px 30px 34px 30px"
          {...getOverrideProps(overrides, "Content Container")}
        >
          <Text
            fontFamily="Inter"
            fontSize="48px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="48px"
            textAlign="center"
            display="flex"
            direction="column"
            justifyContent="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={level?.displayText}
            {...getOverrideProps(overrides, "Display Text")}
          ></Text>
        </Flex>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(48,64,80,1)"
          lineHeight="24px"
          textAlign="center"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="0.01px"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={level?.cardDescription}
          {...getOverrideProps(overrides, "Description")}
        ></Text>
        <Button
          display="flex"
          gap="0"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          backgroundColor="rgba(162,104,227,1)"
          size="default"
          isDisabled={false}
          variation="primary"
          as="a"
          color="white"
          children={level?.buttonLabel}
          {...getOverrideProps(overrides, "Card Button")}
        ></Button>
      </Flex>
    </Flex>
  );
}
