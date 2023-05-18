/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SearchMenuOverridesProps = {
    SearchMenu?: PrimitiveOverrideProps<FlexProps>;
    "Search view modal"?: PrimitiveOverrideProps<FlexProps>;
    SearchButtons?: PrimitiveOverrideProps<FlexProps>;
    City36567039?: PrimitiveOverrideProps<FlexProps>;
    "Location pin"?: PrimitiveOverrideProps<ViewProps>;
    Vector36567041?: PrimitiveOverrideProps<IconProps>;
    Vector36567042?: PrimitiveOverrideProps<IconProps>;
    City36567043?: PrimitiveOverrideProps<TextProps>;
    "Expand Arrow36567044"?: PrimitiveOverrideProps<ImageProps>;
    Filter?: PrimitiveOverrideProps<FlexProps>;
    AdjustmentsOutline?: PrimitiveOverrideProps<ViewProps>;
    Vector36567047?: PrimitiveOverrideProps<IconProps>;
    Filters?: PrimitiveOverrideProps<TextProps>;
    "Expand Arrow36567049"?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type SearchMenuProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: SearchMenuOverridesProps | undefined | null;
}>;
export default function SearchMenu(props: SearchMenuProps): React.ReactElement;
