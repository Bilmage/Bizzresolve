/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, View } from "@aws-amplify/ui-react";
export default function Banner(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="938px"
      height="959px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Banner")}
      {...rest}
    >
      <Image
        width="835px"
        height="1083px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="calc(50% - 541.5px - -54px)"
        left="calc(50% - 417.5px - -0.5px)"
        padding="0px 0px 0px 0px"
        objectFit="contain"
        {...getOverrideProps(overrides, "Banner36562870")}
      ></Image>
    </View>
  );
}
