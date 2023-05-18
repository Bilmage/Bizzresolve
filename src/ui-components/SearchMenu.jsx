/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function SearchMenu(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="row"
      width="1306px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "SearchMenu")}
      {...rest}
    >
      <Flex
        width="unset"
        height="unset"
        {...getOverrideProps(overrides, "Search view modal")}
      ></Flex>
      <Flex
        gap="10px"
        direction="row"
        width="337px"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 10px 0px 10px"
        {...getOverrideProps(overrides, "SearchButtons")}
      >
        <Flex
          gap="20px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          borderRadius="10px"
          padding="10px 10px 10px 10px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "City36567039")}
        >
          <View
            width="25px"
            height="25px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Location pin")}
          >
            <Icon
              width="25px"
              height="25px"
              viewBox={{ minX: 0, minY: 0, width: 25, height: 25 }}
              paths={[]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0%"
              bottom="0%"
              left="0%"
              right="0%"
              {...getOverrideProps(overrides, "Vector36567041")}
            ></Icon>
            <Icon
              width="14.58px"
              height="20.83px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 14.5830078125,
                height: 20.8330078125,
              }}
              paths={[
                {
                  d: "M1.46875 12.3333L2.31984 11.8083L2.31902 11.807L1.46875 12.3333ZM4.76042 16.9167L3.9118 17.4457L3.91305 17.4477L4.76042 16.9167ZM5.97917 19.2708L5.06535 19.677L5.0701 19.6877L5.07509 19.6982L5.97917 19.2708ZM8.59375 19.2708L7.68415 18.8553L7.68338 18.857L8.59375 19.2708ZM9.8125 16.9167L8.96544 16.3852L8.96514 16.3857L9.8125 16.9167ZM13.1042 12.3333L12.2565 11.8028L12.2516 11.8108L13.1042 12.3333ZM7.29167 -1C2.70813 -1 -1 2.70813 -1 7.29167L1 7.29167C1 3.8127 3.8127 1 7.29167 1L7.29167 -1ZM-1 7.29167C-1 9.30362 -0.419963 11.1822 0.618485 12.8597L2.31902 11.807C1.46163 10.422 1 8.90472 1 7.29167L-1 7.29167ZM0.617661 12.8584C1.14414 13.7118 1.74911 14.4968 2.31872 15.2356C2.89861 15.9877 3.44265 16.6931 3.9118 17.4457L5.60903 16.3877C5.07818 15.5361 4.47118 14.7519 3.90263 14.0144C3.3238 13.2637 2.78294 12.559 2.31984 11.8083L0.617661 12.8584ZM3.91305 17.4477C4.36679 18.1717 4.699 18.8527 5.06535 19.677L6.89298 18.8647C6.50933 18.0015 6.13321 17.2241 5.60778 16.3857L3.91305 17.4477ZM5.07509 19.6982C5.12846 19.8111 5.17125 19.9267 5.25825 20.1378C5.3336 20.3206 5.43508 20.5551 5.57089 20.7814C5.84656 21.2409 6.37513 21.8333 7.29167 21.8333L7.29167 19.8333C7.29098 19.8333 7.30379 19.8336 7.32389 19.8402C7.34368 19.8467 7.35772 19.8553 7.36406 19.8598C7.37132 19.8651 7.34158 19.8453 7.28588 19.7524C7.23029 19.6598 7.17486 19.5394 7.10731 19.3756C7.05141 19.24 6.96529 19.017 6.88324 18.8435L5.07509 19.6982ZM7.29167 21.8333C8.2083 21.8333 8.73735 21.2409 9.01268 20.7788C9.14833 20.5512 9.24884 20.3158 9.32343 20.1311C9.41031 19.9159 9.45041 19.8028 9.50412 19.6846L7.68338 18.857C7.60688 19.0253 7.52198 19.2508 7.46889 19.3823C7.40351 19.5442 7.34907 19.6636 7.29461 19.755C7.23996 19.8467 7.21079 19.8659 7.21867 19.8602C7.22526 19.8554 7.23948 19.8468 7.25935 19.8402C7.27953 19.8336 7.29237 19.8333 7.29167 19.8333L7.29167 21.8333ZM9.50335 19.6863C9.88717 18.8461 10.2079 18.1688 10.6599 17.4477L8.96514 16.3857C8.43789 17.227 8.07117 18.0081 7.68415 18.8553L9.50335 19.6863ZM10.6596 17.4482C11.1292 16.6997 11.6733 15.9968 12.2542 15.2434C12.8247 14.5034 13.4299 13.7155 13.9568 12.8559L12.2516 11.8108C11.7889 12.5657 11.2482 13.2727 10.6703 14.0222C10.1027 14.7584 9.49583 15.5399 8.96544 16.3852L10.6596 17.4482ZM13.9518 12.8639C15.0031 11.1841 15.5833 9.30391 15.5833 7.29167L13.5833 7.29167C13.5833 8.90442 13.1219 10.42 12.2565 11.8028L13.9518 12.8639ZM15.5833 7.29167C15.5833 2.70813 11.8752 -1 7.29167 -1L7.29167 1C10.7706 1 13.5833 3.8127 13.5833 7.29167L15.5833 7.29167ZM7.29167 9.15625C6.40645 9.15625 5.6875 8.4373 5.6875 7.55208L3.6875 7.55208C3.6875 9.54187 5.30188 11.1563 7.29167 11.1563L7.29167 9.15625ZM5.6875 7.55208C5.6875 6.66687 6.40645 5.94792 7.29167 5.94792L7.29167 3.94792C5.30188 3.94792 3.6875 5.5623 3.6875 7.55208L5.6875 7.55208ZM7.29167 5.94792C8.17688 5.94792 8.89583 6.66687 8.89583 7.55208L10.8958 7.55208C10.8958 5.5623 9.28145 3.94792 7.29167 3.94792L7.29167 5.94792ZM8.89583 7.55208C8.89583 8.4373 8.17688 9.15625 7.29167 9.15625L7.29167 11.1563C9.28145 11.1563 10.8958 9.54187 10.8958 7.55208L8.89583 7.55208Z",
                  stroke: "rgba(247,132,49,1)",
                  fillRule: "nonzero",
                  strokeWidth: 1,
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="8.33%"
              bottom="8.33%"
              left="20.83%"
              right="20.83%"
              {...getOverrideProps(overrides, "Vector36567042")}
            ></Icon>
          </View>
          <Text
            fontFamily="Roboto"
            fontSize="18px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.35px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="City"
            {...getOverrideProps(overrides, "City36567043")}
          ></Text>
          <Image
            width="25px"
            height="25px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            objectFit="contain"
            {...getOverrideProps(overrides, "Expand Arrow36567044")}
          ></Image>
        </Flex>
        <Flex
          gap="20px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          borderRadius="10px"
          padding="10px 10px 10px 10px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Filter")}
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
            {...getOverrideProps(overrides, "AdjustmentsOutline")}
          >
            <Icon
              width="16px"
              height="16px"
              viewBox={{ minX: 0, minY: 0, width: 16, height: 16 }}
              paths={[
                {
                  d: "M9 0C9 -0.552285 8.55229 -1 8 -1C7.44772 -1 7 -0.552285 7 0L9 0ZM4 12L5 12L4 12ZM2 10L2 11L2 10ZM0 12L-1 12L0 12ZM1 16C1 16.5523 1.44772 17 2 17C2.55228 17 3 16.5523 3 16L1 16ZM3 0C3 -0.552285 2.55228 -1 2 -1C1.44772 -1 1 -0.552285 1 0L3 0ZM7 16C7 16.5523 7.44772 17 8 17C8.55229 17 9 16.5523 9 16L7 16ZM14 10L14 11L14 10ZM12 12L13 12L12 12ZM13 16C13 16.5523 13.4477 17 14 17C14.5523 17 15 16.5523 15 16L13 16ZM15 0C15 -0.552285 14.5523 -1 14 -1C13.4477 -1 13 -0.552285 13 0L15 0ZM9 2L9 0L7 0L7 2L9 2ZM8 1C7.20435 1 6.44129 1.31607 5.87868 1.87868L7.29289 3.29289C7.48043 3.10536 7.73478 3 8 3L8 1ZM5.87868 1.87868C5.31607 2.44129 5 3.20435 5 4L7 4C7 3.73478 7.10536 3.48043 7.29289 3.29289L5.87868 1.87868ZM5 4C5 4.79565 5.31607 5.55871 5.87868 6.12132L7.29289 4.70711C7.10536 4.51957 7 4.26522 7 4L5 4ZM5.87868 6.12132C6.44129 6.68393 7.20435 7 8 7L8 5C7.73478 5 7.48043 4.89464 7.29289 4.70711L5.87868 6.12132ZM8 3C8.26522 3 8.51957 3.10536 8.70711 3.29289L10.1213 1.87868C9.55871 1.31607 8.79565 1 8 1L8 3ZM8.70711 3.29289C8.89464 3.48043 9 3.73478 9 4L11 4C11 3.20435 10.6839 2.44129 10.1213 1.87868L8.70711 3.29289ZM9 4C9 4.26522 8.89464 4.51957 8.70711 4.70711L10.1213 6.12132C10.6839 5.55871 11 4.79565 11 4L9 4ZM8.70711 4.70711C8.51957 4.89464 8.26522 5 8 5L8 7C8.79565 7 9.55871 6.68393 10.1213 6.12132L8.70711 4.70711ZM2 15C2.79565 15 3.55871 14.6839 4.12132 14.1213L2.70711 12.7071C2.51957 12.8946 2.26522 13 2 13L2 15ZM4.12132 14.1213C4.68393 13.5587 5 12.7956 5 12L3 12C3 12.2652 2.89464 12.5196 2.70711 12.7071L4.12132 14.1213ZM5 12C5 11.2044 4.68393 10.4413 4.12132 9.87868L2.70711 11.2929C2.89464 11.4804 3 11.7348 3 12L5 12ZM4.12132 9.87868C3.55871 9.31607 2.79565 9 2 9L2 11C2.26522 11 2.51957 11.1054 2.70711 11.2929L4.12132 9.87868ZM2 13C1.73478 13 1.48043 12.8946 1.29289 12.7071L-0.12132 14.1213C0.441288 14.6839 1.20435 15 2 15L2 13ZM1.29289 12.7071C1.10536 12.5196 1 12.2652 1 12L-1 12C-1 12.7956 -0.68393 13.5587 -0.12132 14.1213L1.29289 12.7071ZM1 12C1 11.7348 1.10536 11.4804 1.29289 11.2929L-0.12132 9.87868C-0.68393 10.4413 -1 11.2044 -1 12L1 12ZM1.29289 11.2929C1.48043 11.1054 1.73478 11 2 11L2 9C1.20435 9 0.441288 9.31607 -0.12132 9.87868L1.29289 11.2929ZM1 14L1 16L3 16L3 14L1 14ZM3 10L3 0L1 0L1 10L3 10ZM7 6L7 16L9 16L9 6L7 6ZM14 15C14.7957 15 15.5587 14.6839 16.1213 14.1213L14.7071 12.7071C14.5196 12.8946 14.2652 13 14 13L14 15ZM16.1213 14.1213C16.6839 13.5587 17 12.7957 17 12L15 12C15 12.2652 14.8946 12.5196 14.7071 12.7071L16.1213 14.1213ZM17 12C17 11.2043 16.6839 10.4413 16.1213 9.87868L14.7071 11.2929C14.8946 11.4804 15 11.7348 15 12L17 12ZM16.1213 9.87868C15.5587 9.31607 14.7957 9 14 9L14 11C14.2652 11 14.5196 11.1054 14.7071 11.2929L16.1213 9.87868ZM14 13C13.7348 13 13.4804 12.8946 13.2929 12.7071L11.8787 14.1213C12.4413 14.6839 13.2043 15 14 15L14 13ZM13.2929 12.7071C13.1054 12.5196 13 12.2652 13 12L11 12C11 12.7957 11.3161 13.5587 11.8787 14.1213L13.2929 12.7071ZM13 12C13 11.7348 13.1054 11.4804 13.2929 11.2929L11.8787 9.87868C11.3161 10.4413 11 11.2043 11 12L13 12ZM13.2929 11.2929C13.4804 11.1054 13.7348 11 14 11L14 9C13.2043 9 12.4413 9.31607 11.8787 9.87868L13.2929 11.2929ZM13 14L13 16L15 16L15 14L13 14ZM15 10L15 0L13 0L13 10L15 10Z",
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
              top="16.67%"
              bottom="16.67%"
              left="16.67%"
              right="16.67%"
              {...getOverrideProps(overrides, "Vector36567047")}
            ></Icon>
          </View>
          <Text
            fontFamily="Roboto"
            fontSize="18px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.35px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Filters"
            {...getOverrideProps(overrides, "Filters")}
          ></Text>
          <Image
            width="25px"
            height="25px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            objectFit="contain"
            {...getOverrideProps(overrides, "Expand Arrow36567049")}
          ></Image>
        </Flex>
      </Flex>
    </Flex>
  );
}
