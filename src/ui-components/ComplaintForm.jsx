/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function ComplaintForm(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="20px"
      direction="column"
      width="656px"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="20px 20px 20px 20px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "ComplaintForm")}
      {...rest}
    >
      <Flex
        width="unset"
        height="unset"
        {...getOverrideProps(overrides, "TextField36563271")}
      ></Flex>
      <Flex
        width="unset"
        height="unset"
        {...getOverrideProps(overrides, "TextField36563272")}
      ></Flex>
      <Flex
        gap="10px"
        direction="row"
        width="636px"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="10px 10px 10px 10px"
        {...getOverrideProps(overrides, "Address")}
      >
        <Flex
          width="unset"
          height="unset"
          {...getOverrideProps(overrides, "TextField36563274")}
        ></Flex>
        <Flex
          width="unset"
          height="unset"
          {...getOverrideProps(overrides, "TextField36563275")}
        ></Flex>
      </Flex>
      <Flex
        width="unset"
        height="unset"
        {...getOverrideProps(overrides, "TextField36563276")}
      ></Flex>
      <Flex
        width="unset"
        height="unset"
        {...getOverrideProps(overrides, "TextField36563277")}
      ></Flex>
      <Flex
        width="unset"
        height="214px"
        {...getOverrideProps(overrides, "TextAreaField")}
      ></Flex>
      <Flex
        gap="10px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        border="1px SOLID rgba(142,142,142,1)"
        padding="39px 15px 39px 15px"
        {...getOverrideProps(overrides, "Drag and Drop Field")}
      >
        <Flex
          gap="24px"
          direction="row"
          width="377px"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Description")}
        >
          <View
            width="24px"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "CloudUploadOutline")}
          >
            <Icon
              width="17.99px"
              height="17.99px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 17.9874267578125,
                height: 17.994140625,
              }}
              paths={[
                {
                  d: "M5.00403 14.9944C5.55631 14.9941 6.00373 14.5461 6.00336 13.9938C6.00299 13.4415 5.55497 12.9941 5.00269 12.9944L5.00403 14.9944ZM4.08736 4.07845L4.26989 5.06165C4.67596 4.98626 4.99391 4.66899 5.07017 4.26308L4.08736 4.07845ZM13.9194 4.07845L12.9366 4.26308C13.0125 4.66746 13.3284 4.98404 13.7326 5.06086L13.9194 4.07845ZM12.9998 12.9945C12.4475 12.9964 12.0014 13.4458 12.0034 13.998C12.0053 14.5503 12.4547 14.9964 13.007 14.9944L12.9998 12.9945ZM5.29625 8.28734C4.90573 8.67787 4.90573 9.31103 5.29625 9.70155C5.68678 10.0921 6.31994 10.0921 6.71047 9.70155L5.29625 8.28734ZM9.00336 5.99445L9.71047 5.28734C9.31994 4.89682 8.68678 4.89682 8.29625 5.28734L9.00336 5.99445ZM11.2963 9.70155C11.6868 10.0921 12.3199 10.0921 12.7105 9.70155C13.101 9.31103 13.101 8.67787 12.7105 8.28734L11.2963 9.70155ZM8.00336 17.9944C8.00336 18.5467 8.45107 18.9944 9.00336 18.9944C9.55564 18.9944 10.0034 18.5467 10.0034 17.9944L8.00336 17.9944ZM5.00269 12.9944C4.00506 12.9951 3.04318 12.623 2.3058 11.951L0.958689 13.4293C2.06477 14.4372 3.50758 14.9955 5.00403 14.9944L5.00269 12.9944ZM2.3058 11.951C1.56841 11.279 1.10874 10.3558 1.01697 9.36239L-0.974552 9.54636C-0.836902 11.0365 -0.147393 12.4213 0.958689 13.4293L2.3058 11.951ZM1.01697 9.36239C0.925202 8.36898 1.20797 7.37715 1.80978 6.58148L0.214666 5.37499C-0.688055 6.56849 -1.1122 8.05625 -0.974552 9.54636L1.01697 9.36239ZM1.80978 6.58148C2.4116 5.78581 3.28902 5.24375 4.26989 5.06165L3.90483 3.09525C2.43352 3.3684 1.11739 4.18149 0.214666 5.37499L1.80978 6.58148ZM5.07017 4.26308C5.24247 3.34593 5.72987 2.51782 6.44808 1.92197L5.17108 0.382728C4.09395 1.27635 3.36296 2.51831 3.10455 3.89381L5.07017 4.26308ZM6.44808 1.92197C7.1663 1.32612 8.07016 1 9.00336 1L9.00336 -1C7.60379 -1 6.24822 -0.510896 5.17108 0.382728L6.44808 1.92197ZM9.00336 1C9.93656 1 10.8404 1.32612 11.5586 1.92197L12.8356 0.382728C11.7585 -0.510896 10.4029 -1 9.00336 -1L9.00336 1ZM11.5586 1.92197C12.2768 2.51782 12.7642 3.34593 12.9366 4.26308L14.9022 3.89381C14.6438 2.51831 13.9128 1.27635 12.8356 0.382728L11.5586 1.92197ZM13.7326 5.06086C14.7103 5.24668 15.5837 5.79011 16.1824 6.58511L17.78 5.38202C16.8822 4.18972 15.5724 3.37472 14.1061 3.09603L13.7326 5.06086ZM16.1824 6.58511C16.781 7.3801 17.062 8.36963 16.9704 9.3606L18.9619 9.54457C19.0992 8.05836 18.6779 6.57432 17.78 5.38202L16.1824 6.58511ZM16.9704 9.3606C16.8789 10.3516 16.4214 11.2729 15.6873 11.9448L17.0375 13.4202C18.1386 12.4125 18.8247 11.0308 18.9619 9.54457L16.9704 9.3606ZM15.6873 11.9448C14.9531 12.6166 13.995 12.9909 12.9998 12.9945L13.007 14.9944C14.4995 14.9891 15.9365 14.4278 17.0375 13.4202L15.6873 11.9448ZM6.71047 9.70155L9.71047 6.70156L8.29625 5.28734L5.29625 8.28734L6.71047 9.70155ZM8.29625 6.70156L11.2963 9.70155L12.7105 8.28734L9.71047 5.28734L8.29625 6.70156ZM8.00336 5.99445L8.00336 17.9944L10.0034 17.9944L10.0034 5.99445L8.00336 5.99445Z",
                  stroke: "rgba(142,142,142,1)",
                  fillRule: "nonzero",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="12.52%"
              bottom="12.5%"
              left="12.49%"
              right="12.57%"
              {...getOverrideProps(overrides, "Vector")}
            ></Icon>
          </View>
          <Text
            fontFamily="Inter"
            fontSize="14px"
            fontWeight="400"
            color="rgba(142,142,142,1)"
            lineHeight="22.399999618530273px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.35px"
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
            children="Upload Additional file. File size of your documents should not exceed 30MB"
            {...getOverrideProps(overrides, "Label text")}
          ></Text>
        </Flex>
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
        {...getOverrideProps(overrides, "Checkbox")}
      >
        <Flex
          width="48px"
          height="48px"
          {...getOverrideProps(overrides, "Checkboxes")}
        ></Flex>
        <Text
          fontFamily="Inter"
          fontSize="14px"
          fontWeight="400"
          color="rgba(56,60,62,1)"
          lineHeight="22.399999618530273px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.35px"
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
          children="I want to protect my data by signing an NDA"
          {...getOverrideProps(
            overrides,
            "I want to protect my data by signing an NDA"
          )}
        ></Text>
      </Flex>
      <Flex
        width="unset"
        height="unset"
        {...getOverrideProps(overrides, "Button")}
      ></Flex>
    </Flex>
  );
}
