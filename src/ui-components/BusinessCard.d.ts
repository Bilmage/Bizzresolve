/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BusinessCardOverridesProps = {
    BusinessCard?: PrimitiveOverrideProps<FlexProps>;
    Liked?: PrimitiveOverrideProps<FlexProps>;
    "User Liked"?: PrimitiveOverrideProps<FlexProps>;
    Ratings?: PrimitiveOverrideProps<FlexProps>;
    "4 of 5"?: PrimitiveOverrideProps<TextProps>;
    Body?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    Frame?: PrimitiveOverrideProps<FlexProps>;
    Name?: PrimitiveOverrideProps<FlexProps>;
    Safaricom?: PrimitiveOverrideProps<TextProps>;
    Business?: PrimitiveOverrideProps<TextProps>;
    New36563788?: PrimitiveOverrideProps<FlexProps>;
    Heart?: PrimitiveOverrideProps<ViewProps>;
    Vector36563790?: PrimitiveOverrideProps<IconProps>;
    New36563791?: PrimitiveOverrideProps<TextProps>;
    Description?: PrimitiveOverrideProps<FlexProps>;
    "It is the largest telecommunications provider in Kenya, and one of the most profitable companies in the East and Central Africa region."?: PrimitiveOverrideProps<TextProps>;
    Location?: PrimitiveOverrideProps<FlexProps>;
    Visit?: PrimitiveOverrideProps<ImageProps>;
    "Nairobi, westlands"?: PrimitiveOverrideProps<TextProps>;
    Certified36563797?: PrimitiveOverrideProps<FlexProps>;
    CertifiedLogo?: PrimitiveOverrideProps<FlexProps>;
    "5254203_54753 1"?: PrimitiveOverrideProps<ImageProps>;
    Certified36563800?: PrimitiveOverrideProps<TextProps>;
    "Call to Action"?: PrimitiveOverrideProps<FlexProps>;
    Link36563802?: PrimitiveOverrideProps<FlexProps>;
    "Show more"?: PrimitiveOverrideProps<TextProps>;
    Link36563804?: PrimitiveOverrideProps<FlexProps>;
    HeartOutline?: PrimitiveOverrideProps<ViewProps>;
    Vector36563806?: PrimitiveOverrideProps<IconProps>;
    "Save for later"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type BusinessCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: BusinessCardOverridesProps | undefined | null;
}>;
export default function BusinessCard(props: BusinessCardProps): React.ReactElement;
