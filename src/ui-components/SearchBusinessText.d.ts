/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SearchBusinessTextOverridesProps = {
    SearchBusinessText?: PrimitiveOverrideProps<FlexProps>;
    Headline?: PrimitiveOverrideProps<FlexProps>;
    "What type of Business are you looking for ?"?: PrimitiveOverrideProps<TextProps>;
    Paragraph?: PrimitiveOverrideProps<FlexProps>;
    "Search from our pool of accredited businesses committed to customer satisfaction."?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type SearchBusinessTextProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: SearchBusinessTextOverridesProps | undefined | null;
}>;
export default function SearchBusinessText(props: SearchBusinessTextProps): React.ReactElement;
