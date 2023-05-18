/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function AccreditedNavBar(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="875px"
      direction="row"
      width="1348px"
      height="unset"
      justifyContent="space-between"
      alignItems="center"
      position="relative"
      padding="24px 32px 24px 32px"
      {...getOverrideProps(overrides, "AccreditedNavBar")}
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
        {...getOverrideProps(overrides, "Logo36563744")}
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
          {...getOverrideProps(overrides, "Logo36563745")}
        ></Text>
      </View>
      <Flex
        gap="133px"
        direction="row"
        width="792px"
        height="unset"
        justifyContent="space-between"
        alignItems="center"
        shrink="0"
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
          children="Our Partners"
          {...getOverrideProps(overrides, "Our Partners")}
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
          children="Contact"
          {...getOverrideProps(overrides, "Contact")}
        ></Text>
        <Flex
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          borderRadius="54px"
          padding="10px 10px 10px 10px"
          backgroundColor="rgba(247,132,49,1)"
          {...getOverrideProps(overrides, "Link")}
        >
          <View
            width="20px"
            height="20px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Plus")}
          >
            <Icon
              width="14px"
              height="14px"
              viewBox={{ minX: 0, minY: 0, width: 14, height: 14 }}
              paths={[
                {
                  d: "M7 0L7 -1L7 0ZM8 6L7 6L7 7L8 7L8 6ZM8 8L8 7L7 7L7 8L8 8ZM6 8L7 8L7 7L6 7L6 8ZM0 7L-1 7L0 7ZM6 6L6 7L7 7L7 6L6 6ZM7 1L7 1L8.41421 -0.414214C8.03914 -0.789286 7.53043 -1 7 -1L7 1ZM7 1L7 1L9 1C9 0.469567 8.78929 -0.0391412 8.41421 -0.414214L7 1ZM7 1L7 6L9 6L9 1L7 1ZM8 7L13 7L13 5L8 5L8 7ZM13 7L13 7L14.4142 5.58579C14.0391 5.21071 13.5304 5 13 5L13 7ZM13 7L13 7L15 7C15 6.46957 14.7893 5.96086 14.4142 5.58579L13 7ZM13 7L13 7L14.4142 8.41421C14.7893 8.03914 15 7.53043 15 7L13 7ZM13 7L13 7L13 9C13.5304 9 14.0391 8.78929 14.4142 8.41421L13 7ZM13 7L8 7L8 9L13 9L13 7ZM7 8L7 13L9 13L9 8L7 8ZM7 13L7 13L8.41421 14.4142C8.78929 14.0391 9 13.5304 9 13L7 13ZM7 13L7 13L7 15C7.53043 15 8.03914 14.7893 8.41421 14.4142L7 13ZM7 13L7 13L5.58579 14.4142C5.96086 14.7893 6.46957 15 7 15L7 13ZM7 13L7 13L5 13C5 13.5304 5.21071 14.0391 5.58579 14.4142L7 13ZM7 13L7 8L5 8L5 13L7 13ZM6 7L1 7L1 9L6 9L6 7ZM1 7L1 7L-0.414214 8.41421C-0.0391412 8.78929 0.469567 9 1 9L1 7ZM1 7L1 7L-1 7C-1 7.53043 -0.789286 8.03914 -0.414214 8.41421L1 7ZM1 7L1 7L-0.414214 5.58579C-0.789286 5.96086 -1 6.46957 -1 7L1 7ZM1 7L1 7L1 5C0.469567 5 -0.0391412 5.21071 -0.414214 5.58579L1 7ZM1 7L6 7L6 5L1 5L1 7ZM7 6L7 1L5 1L5 6L7 6ZM7 1L7 1L5.58579 -0.414214C5.21071 -0.0391412 5 0.469567 5 1L7 1ZM7 1L7 1L7 -1C6.46957 -1 5.96086 -0.789286 5.58579 -0.414214L7 1Z",
                  stroke: "rgba(255,255,255,1)",
                  fillRule: "nonzero",
                  strokeWidth: 1,
                },
                {
                  d: "M7 0C7.26522 4.44089e-16 7.51957 0.105357 7.70711 0.292893C7.89464 0.48043 8 0.734784 8 1L8 6L13 6C13.2652 6 13.5196 6.10536 13.7071 6.29289C13.8946 6.48043 14 6.73478 14 7C14 7.26522 13.8946 7.51957 13.7071 7.70711C13.5196 7.89464 13.2652 8 13 8L8 8L8 13C8 13.2652 7.89464 13.5196 7.70711 13.7071C7.51957 13.8946 7.26522 14 7 14C6.73478 14 6.48043 13.8946 6.29289 13.7071C6.10536 13.5196 6 13.2652 6 13L6 8L1 8C0.734784 8 0.48043 7.89464 0.292893 7.70711C0.105357 7.51957 4.44089e-16 7.26522 0 7C0 6.73478 0.105357 6.48043 0.292893 6.29289C0.48043 6.10536 0.734784 6 1 6L6 6L6 1C6 0.734784 6.10536 0.48043 6.29289 0.292893C6.48043 0.105357 6.73478 4.44089e-16 7 0Z",
                  fill: "rgba(255,255,255,1)",
                  fillRule: "evenodd",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="15%"
              bottom="15%"
              left="15%"
              right="15%"
              {...getOverrideProps(overrides, "Vector")}
            ></Icon>
          </View>
          <Text
            fontFamily="Poppins"
            fontSize="18px"
            fontWeight="700"
            color="rgba(255,255,255,1)"
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
            children="Get Accredited"
            {...getOverrideProps(overrides, "Get Accredited")}
          ></Text>
        </Flex>
        <Image
          width="65px"
          height="65px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          borderRadius="160px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          {...getOverrideProps(overrides, "image")}
        ></Image>
      </Flex>
    </Flex>
  );
}
