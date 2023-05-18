/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function ComplaintHeadline(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="row"
      width="854px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="10px 10px 10px 10px"
      {...getOverrideProps(overrides, "ComplaintHeadline")}
      {...rest}
    >
      <Text
        fontFamily="Poppins"
        fontSize="64px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="96px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="How to file a complaint"
        {...getOverrideProps(overrides, "How to file a complaint")}
      ></Text>
    </Flex>
  );
}
