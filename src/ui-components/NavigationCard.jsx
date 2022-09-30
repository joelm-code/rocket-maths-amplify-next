/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Badge, Button, Flex, Image, Text } from "@aws-amplify/ui-react";
export default function NavigationCard(props) {
  const { navigation, overrides, ...rest } = props;
  return (
    <Flex
      gap="16px"
      direction="column"
      width="323px"
      position="relative"
      borderRadius="8px"
      padding="34px 34px 34px 34px"
      backgroundColor="rgba(255,255,255,0.5)"
      minWidth="320px"
      boxShadow="medium"
      {...rest}
      {...getOverrideProps(overrides, "NavigationCard")}
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
          children={navigation?.cardTitle}
          {...getOverrideProps(overrides, "Card Title")}
        ></Text>
        <Badge
          display={
            navigation?.badgeExists && navigation?.badgeExists == true
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
          color="black"
          lineHeight="12px"
          fontFamily="Inter"
          fontWeight="400"
          textAlign="left"
          direction="column"
          size="small"
          variation="success"
          backgroundColor={navigation?.badgeColor}
          children={navigation?.badgeTitle}
          {...getOverrideProps(overrides, "Badge")}
        ></Badge>
      </Flex>
      <Image
        height="220px"
        shrink="0"
        alignSelf="center"
        objectFit="fill"
        position="relative"
        borderRadius="16px"
        padding="0px 0px 0px 0px"
        src={`${navigation?.image}${""}`}
        maxWidth="220px"
        opacity={
          navigation?.isLocked && navigation?.isLocked == true ? "80%" : "100%"
        }
        {...getOverrideProps(overrides, "Card Image")}
      ></Image>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(48,64,80,1)"
        lineHeight="24px"
        textAlign="left"
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
        children={navigation?.cardDescription}
        {...getOverrideProps(overrides, "Card Description")}
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
        backgroundColor={
          navigation?.isLocked && navigation?.isLocked == true
            ? "neutral.20"
            : ""
        }
        size="default"
        isDisabled={false}
        variation="primary"
        color={
          navigation?.isLocked && navigation?.isLocked == true
            ? "neutral.80"
            : "white"
        }
        disabled={navigation?.isLocked}
        as={
          navigation?.isLocked && navigation?.isLocked == true ? "button" : "a"
        }
        href={`${"/"}${navigation?.linkTo}`}
        children={
          navigation?.isLocked && navigation?.isLocked == true
            ? "Locked"
            : navigation?.cardTitle
        }
        {...getOverrideProps(overrides, "Card Button")}
      ></Button>
    </Flex>
  );
}
