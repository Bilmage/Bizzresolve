/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex } from "@aws-amplify/ui-react";
export default function HeaderBanner(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="column"
      width="2751px"
      height="unset"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="144px 266px 144px 266px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "HeaderBanner")}
      {...rest}
    >
      <Flex
        width="581px"
        height="unset"
        {...getOverrideProps(overrides, "Header")}
      ></Flex>
    </Flex>
  );
}
