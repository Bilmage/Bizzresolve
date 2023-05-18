/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function ImproveCustomerText(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="column"
      width="1160px"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "ImproveCustomerText")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="10px 10px 10px 10px"
        {...getOverrideProps(overrides, "Headline")}
      >
        <Text
          fontFamily="Poppins"
          fontSize="64px"
          fontWeight="500"
          color="rgba(247,132,49,1)"
          textTransform="capitalize"
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
          children="Improve customer satisfaction.&#xA;"
          {...getOverrideProps(overrides, "Improve customer satisfaction.")}
        ></Text>
      </Flex>
      <Flex
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="10px 10px 10px 10px"
        {...getOverrideProps(overrides, "Paragraph")}
      >
        <Text
          fontFamily="Poppins"
          fontSize="32px"
          fontWeight="500"
          color="rgba(28,27,31,1)"
          lineHeight="48px"
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
          children="Achieve Independent Accreditation and Stand Out as a business committed to customer satisfaction. Display your badge or certificate to customers and earn their trust."
          {...getOverrideProps(
            overrides,
            "Achieve Independent Accreditation and Stand Out as a business committed to customer satisfaction. Display your badge or certificate to customers and earn their trust."
          )}
        ></Text>
      </Flex>
    </Flex>
  );
}
