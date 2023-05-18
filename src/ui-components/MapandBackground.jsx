/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function MapandBackground(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="739px"
      height="891px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "MapandBackground")}
      {...rest}
    >
      <View
        width="399px"
        height="891px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="calc(50% - 445.5px - 0px)"
        left="calc(50% - 199.5px - -170px)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "MapBackground")}
      >
        <View
          width="434px"
          height="969px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="calc(50% - 484.5px - 0px)"
          left="calc(50% - 217px - -0.5px)"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(247,132,49,1)"
          {...getOverrideProps(overrides, "Rectangle 31")}
        ></View>
      </View>
      <View
        width="681px"
        height="762px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="calc(50% - 381px - -35.5px)"
        left="calc(50% - 340.5px - 29px)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "ContactMapContainer")}
      >
        <Image
          width="569px"
          height="814px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="calc(50% - 407px - -2px)"
          left="calc(50% - 284.5px - 34px)"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          {...getOverrideProps(overrides, "ContactMap")}
        ></Image>
        <Flex
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          position="absolute"
          top="15px"
          left="44px"
          padding="10px 10px 10px 10px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Headquarters")}
        >
          <Text
            fontFamily="Montserrat"
            fontSize="8px"
            fontWeight="600"
            color="rgba(9,130,254,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Headquarters&#xA;Company s. r. o.&#xA;Street. 51&#xA;100 00 Prague"
            {...getOverrideProps(
              overrides,
              "Headquarters Company s. r. o. Street. 51 100 00 Prague"
            )}
          ></Text>
        </Flex>
      </View>
    </View>
  );
}
