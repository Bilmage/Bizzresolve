/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text } from "@aws-amplify/ui-react";
export default function Header(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="10px 10px 10px 10px"
      backgroundColor="rgba(255,232,212,1)"
      {...getOverrideProps(overrides, "Header")}
      {...rest}
    >
      <Text
        fontFamily="Poppins"
        fontSize="64px"
        fontWeight="500"
        color="rgba(35,31,32,1)"
        lineHeight="96px"
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
        children="Our Services"
        {...getOverrideProps(overrides, "Our Services")}
      ></Text>
      <Icon
        width="250px"
        height="0px"
        viewBox={{ minX: 0, minY: 0, width: 250, height: 1 }}
        paths={[
          {
            d: "M1.5 -3C0.671573 -3 0 -2.32843 0 -1.5C0 -0.671573 0.671573 0 1.5 0L1.5 -3ZM248.5 0C249.328 0 250 -0.671573 250 -1.5C250 -2.32843 249.328 -3 248.5 -3L248.5 0ZM1.5 0L248.5 0L248.5 -3L1.5 -3L1.5 0Z",
            stroke: "rgba(255,122,0,1)",
            fillRule: "nonzero",
            strokeWidth: 3,
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Line 1")}
      ></Icon>
    </Flex>
  );
}
