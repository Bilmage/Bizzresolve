/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AccreditedNavBarOverridesProps = {
    AccreditedNavBar?: PrimitiveOverrideProps<FlexProps>;
    Logo36563744?: PrimitiveOverrideProps<ViewProps>;
    Logo36563745?: PrimitiveOverrideProps<TextProps>;
    NavItems?: PrimitiveOverrideProps<FlexProps>;
    About?: PrimitiveOverrideProps<TextProps>;
    "Our Partners"?: PrimitiveOverrideProps<TextProps>;
    Contact?: PrimitiveOverrideProps<TextProps>;
    Link?: PrimitiveOverrideProps<FlexProps>;
    Plus?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    "Get Accredited"?: PrimitiveOverrideProps<TextProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type AccreditedNavBarProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: AccreditedNavBarOverridesProps | undefined | null;
}>;
export default function AccreditedNavBar(props: AccreditedNavBarProps): React.ReactElement;
