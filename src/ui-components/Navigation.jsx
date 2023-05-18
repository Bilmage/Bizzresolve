/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function Navigation(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="875px"
      direction="row"
      width="1898px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="24px 32px 24px 32px"
      {...getOverrideProps(overrides, "Navigation")}
      {...rest}
    >
      <View
        width="117px"
        height="72px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Logo36562846")}
      >
        <Text
          fontFamily="Poppins"
          fontSize="48px"
          fontWeight="700"
          color="rgba(247,132,49,1)"
          lineHeight="72px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Logo"
          {...getOverrideProps(overrides, "Logo36562847")}
        ></Text>
      </View>
      <Flex
        gap="133px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="space-between"
        alignItems="center"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "NavItems")}
      >
        <Text
          fontFamily="Poppins"
          fontSize="18px"
          fontWeight="500"
          color="rgba(49,49,49,1)"
          lineHeight="27px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Home"
          {...getOverrideProps(overrides, "Home")}
        ></Text>
        <Text
          fontFamily="Poppins"
          fontSize="18px"
          fontWeight="500"
          color="rgba(49,49,49,1)"
          lineHeight="27px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="About"
          {...getOverrideProps(overrides, "About")}
        ></Text>
        <Text
          fontFamily="Poppins"
          fontSize="18px"
          fontWeight="500"
          color="rgba(49,49,49,1)"
          lineHeight="27px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="File a complaint"
          {...getOverrideProps(overrides, "File a complaint")}
        ></Text>
      </Flex>
    </Flex>
  );
}
