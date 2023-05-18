/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NavigationOverridesProps = {
    Navigation?: PrimitiveOverrideProps<FlexProps>;
    Logo36562846?: PrimitiveOverrideProps<ViewProps>;
    Logo36562847?: PrimitiveOverrideProps<TextProps>;
    NavItems?: PrimitiveOverrideProps<FlexProps>;
    Home?: PrimitiveOverrideProps<TextProps>;
    About?: PrimitiveOverrideProps<TextProps>;
    "File a complaint"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type NavigationProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: NavigationOverridesProps | undefined | null;
}>;
export default function Navigation(props: NavigationProps): React.ReactElement;
