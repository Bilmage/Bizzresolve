/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function BusinessCard(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="4px"
      direction="column"
      width="742px"
      height="389px"
      justifyContent="center"
      alignItems="flex-start"
      position="relative"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      borderRadius="30px"
      padding="0px 0px 0px 10px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "BusinessCard")}
      {...rest}
    >
      <Flex
        gap="16px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Liked")}
      >
        <Flex
          gap="9px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "User Liked")}
        >
          <Flex
            gap="10px"
            direction="row"
            width="304px"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="10px 10px 10px 10px"
            backgroundColor="rgba(255,255,255,1)"
            {...getOverrideProps(overrides, "Ratings")}
          >
            <Text
              fontFamily="Inter"
              fontSize="14px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="43px"
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
              children="4 of 5"
              {...getOverrideProps(overrides, "4 of 5")}
            ></Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        gap="16px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Body")}
      >
        <Image
          width="80px"
          height="80px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          borderRadius="64px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          {...getOverrideProps(overrides, "image")}
        ></Image>
        <Flex
          gap="8px"
          direction="column"
          width="541px"
          height="unset"
          justifyContent="center"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame")}
        >
          <Flex
            gap="16px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 10px 0px 10px"
            {...getOverrideProps(overrides, "Name")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="700"
              color="rgba(13,26,38,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0.01px"
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
              children="Safaricom"
              {...getOverrideProps(overrides, "Safaricom")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(92,102,112,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0.01px"
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
              children="Business"
              {...getOverrideProps(overrides, "Business")}
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
              padding="0px 10px 0px 10px"
              backgroundColor="rgba(247,132,49,0.46)"
              {...getOverrideProps(overrides, "New36563788")}
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
                {...getOverrideProps(overrides, "Heart")}
              >
                <Icon
                  width="16.05px"
                  height="13.71px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 16.0478515625,
                    height: 13.7060546875,
                  }}
                  paths={[
                    {
                      d: "M1.17115 1.22115C1.92126 0.471268 2.93849 0.0500067 3.99915 0.0500067C5.0598 0.0500067 6.07703 0.471268 6.82715 1.22115L7.99915 2.39215L9.17115 1.22115C9.54013 0.839112 9.98151 0.534383 10.4695 0.324747C10.9575 0.115111 11.4824 0.00476629 12.0135 0.000151027C12.5447 -0.00446424 13.0714 0.0967427 13.563 0.297866C14.0545 0.49899 14.5012 0.796002 14.8767 1.17157C15.2523 1.54714 15.5493 1.99375 15.7504 2.48534C15.9516 2.97692 16.0528 3.50364 16.0481 4.03476C16.0435 4.56588 15.9332 5.09075 15.7236 5.57877C15.5139 6.06679 15.2092 6.50817 14.8271 6.87715L7.99915 13.7062L1.17115 6.87715C0.421261 6.12704 0 5.10981 0 4.04915C4.44089e-16 2.9885 0.421261 1.97126 1.17115 1.22115Z",
                      fill: "rgba(247,132,49,1)",
                      fillRule: "evenodd",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="19.75%"
                  bottom="11.72%"
                  left="10%"
                  right="9.75%"
                  {...getOverrideProps(overrides, "Vector36563790")}
                ></Icon>
              </View>
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="400"
                color="rgba(92,102,112,1)"
                lineHeight="24px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                letterSpacing="0.01px"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="New"
                {...getOverrideProps(overrides, "New36563791")}
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
            {...getOverrideProps(overrides, "Description")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(13,26,38,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0.01px"
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
              children="It is the largest telecommunications provider in Kenya, and one of the most profitable companies in the East and Central Africa region."
              {...getOverrideProps(
                overrides,
                "It is the largest telecommunications provider in Kenya, and one of the most profitable companies in the East and Central Africa region."
              )}
            ></Text>
          </Flex>
          <Flex
            gap="16px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 10px 0px 10px"
            {...getOverrideProps(overrides, "Location")}
          >
            <Image
              width="50px"
              height="50px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              objectFit="contain"
              {...getOverrideProps(overrides, "Visit")}
            ></Image>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(13,26,38,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0.01px"
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
              children="Nairobi, westlands"
              {...getOverrideProps(overrides, "Nairobi, westlands")}
            ></Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        gap="16px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-end"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Certified36563797")}
      >
        <Flex
          gap="50px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="10px 10px 10px 10px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "CertifiedLogo")}
        >
          <Image
            width="50px"
            height="50px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            {...getOverrideProps(overrides, "5254203_54753 1")}
          ></Image>
          <Text
            fontFamily="Inter"
            fontSize="14px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="43px"
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
            children="Certified"
            {...getOverrideProps(overrides, "Certified36563800")}
          ></Text>
        </Flex>
      </Flex>
      <Flex
        gap="30px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Call to Action")}
      >
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
          {...getOverrideProps(overrides, "Link36563802")}
        >
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
            children="Show more"
            {...getOverrideProps(overrides, "Show more")}
          ></Text>
        </Flex>
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
          backgroundColor="rgba(239,240,240,1)"
          {...getOverrideProps(overrides, "Link36563804")}
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
            {...getOverrideProps(overrides, "HeartOutline")}
          >
            <Icon
              width="18px"
              height="15.36px"
              viewBox={{ minX: 0, minY: 0, width: 18, height: 15.3642578125 }}
              paths={[
                {
                  d: "M1.31804 1.31804L2.02514 2.02515L2.02515 2.02514L1.31804 1.31804ZM1.31804 7.68204L2.02515 6.97493L2.02514 6.97493L1.31804 7.68204ZM9.00004 15.364L8.29293 16.0711C8.48047 16.2587 8.73482 16.364 9.00004 16.364C9.26526 16.364 9.51961 16.2587 9.70715 16.0711L9.00004 15.364ZM16.682 7.68204L15.9749 6.97493L15.9749 6.97493L16.682 7.68204ZM18.0001 4.50004L17.0001 4.50004L18.0001 4.50004ZM10.318 1.31804L9.61093 0.610932L9.61093 0.610932L10.318 1.31804ZM9.00004 2.63604L8.29293 3.34315C8.48047 3.53068 8.73482 3.63604 9.00004 3.63604C9.26526 3.63604 9.51961 3.53068 9.70715 3.34315L9.00004 2.63604ZM7.68204 1.31804L6.97493 2.02514L6.97493 2.02515L7.68204 1.31804ZM4.50004 0L4.50004 -1L4.50004 0ZM0.610936 0.610928C0.100207 1.12165 -0.304926 1.72797 -0.581331 2.39526L1.26643 3.16064C1.44232 2.73599 1.70013 2.35016 2.02514 2.02515L0.610936 0.610928ZM-0.581331 2.39526C-0.857736 3.06256 -1 3.77776 -1 4.50004L1 4.50004C1 4.04041 1.09053 3.58528 1.26643 3.16064L-0.581331 2.39526ZM-1 4.50004C-1 5.22231 -0.857736 5.93752 -0.581331 6.60481L1.26643 5.83944C1.09053 5.4148 1 4.95967 1 4.50004L-1 4.50004ZM-0.581331 6.60481C-0.304926 7.27211 0.100207 7.87843 0.610936 8.38915L2.02514 6.97493C1.70013 6.64992 1.44232 6.26408 1.26643 5.83944L-0.581331 6.60481ZM0.610932 8.38915L8.29293 16.0711L9.70715 14.6569L2.02515 6.97493L0.610932 8.38915ZM9.70715 16.0711L17.3891 8.38915L15.9749 6.97493L8.29293 14.6569L9.70715 16.0711ZM17.3891 8.38915C18.4206 7.35769 19.0001 5.95874 19.0001 4.50004L17.0001 4.50004C17.0001 5.4283 16.6313 6.31855 15.9749 6.97493L17.3891 8.38915ZM19.0001 4.50004C19.0001 3.04134 18.4206 1.64239 17.3891 0.610932L15.9749 2.02515C16.6313 2.68153 17.0001 3.57177 17.0001 4.50004L19.0001 4.50004ZM17.3891 0.610932C16.3577 -0.420523 14.9587 -0.999989 13.5 -0.999989L13.5 1.00001C14.4283 1.00001 15.3185 1.36876 15.9749 2.02515L17.3891 0.610932ZM13.5 -0.999989C12.0413 -0.999989 10.6424 -0.420523 9.61093 0.610932L11.0251 2.02515C11.6815 1.36876 12.5718 1.00001 13.5 1.00001L13.5 -0.999989ZM9.61093 0.610932L8.29293 1.92893L9.70715 3.34315L11.0251 2.02515L9.61093 0.610932ZM9.70715 1.92893L8.38915 0.610932L6.97493 2.02515L8.29293 3.34315L9.70715 1.92893ZM8.38915 0.610937C7.87843 0.100207 7.27211 -0.304926 6.60481 -0.581331L5.83944 1.26643C6.26408 1.44232 6.64992 1.70013 6.97493 2.02514L8.38915 0.610937ZM6.60481 -0.581331C5.93752 -0.857736 5.22232 -1 4.50004 -1L4.50004 1C4.95967 1 5.4148 1.09053 5.83944 1.26643L6.60481 -0.581331ZM4.50004 -1C3.77776 -1 3.06256 -0.857736 2.39526 -0.581331L3.16064 1.26643C3.58528 1.09053 4.04041 1 4.50004 1L4.50004 -1ZM2.39526 -0.581331C1.72797 -0.304926 1.12165 0.100207 0.610928 0.610937L2.02515 2.02514C2.35016 1.70013 2.73599 1.44232 3.16064 1.26643L2.39526 -0.581331Z",
                  stroke: "rgba(0,0,0,1)",
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
              top="20.83%"
              bottom="15.15%"
              left="12.5%"
              right="12.5%"
              {...getOverrideProps(overrides, "Vector36563806")}
            ></Icon>
          </View>
          <Text
            fontFamily="Poppins"
            fontSize="18px"
            fontWeight="700"
            color="rgba(0,0,0,1)"
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
            children="Save for later"
            {...getOverrideProps(overrides, "Save for later")}
          ></Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
