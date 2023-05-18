/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex } from "@aws-amplify/ui-react";
export default function SearchArea(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="column"
      width="972px"
      height="457px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="0px 15px 0px 15px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "SearchArea")}
      {...rest}
    >
      <Flex
        width="unset"
        height="251px"
        {...getOverrideProps(overrides, "TextField")}
      ></Flex>
      <Flex
        width="unset"
        height="unset"
        {...getOverrideProps(overrides, "SelectField")}
      ></Flex>
    </Flex>
  );
}
