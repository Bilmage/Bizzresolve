/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LogosOverridesProps = {
    Logos?: PrimitiveOverrideProps<FlexProps>;
    Airbnb36562829?: PrimitiveOverrideProps<FlexProps>;
    Airbnb36562830?: PrimitiveOverrideProps<FlexProps>;
    "Rectangle 10"?: PrimitiveOverrideProps<ViewProps>;
    Airbnb36562832?: PrimitiveOverrideProps<ImageProps>;
    Dropbox36562833?: PrimitiveOverrideProps<FlexProps>;
    Dropbox36562834?: PrimitiveOverrideProps<FlexProps>;
    Rectangle?: PrimitiveOverrideProps<ViewProps>;
    "1280px-Dropbox_logo_2017 1"?: PrimitiveOverrideProps<ImageProps>;
    Stripe36562837?: PrimitiveOverrideProps<FlexProps>;
    Stripe36562838?: PrimitiveOverrideProps<FlexProps>;
    Stripe36562839?: PrimitiveOverrideProps<ViewProps>;
    "stripe-226458 1"?: PrimitiveOverrideProps<ImageProps>;
    Microsoft36562841?: PrimitiveOverrideProps<FlexProps>;
    Microsoft36562842?: PrimitiveOverrideProps<FlexProps>;
    Microsoft36562843?: PrimitiveOverrideProps<ViewProps>;
    "Microsoft_logo_(2012) 1"?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type LogosProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: LogosOverridesProps | undefined | null;
}>;
export default function Logos(props: LogosProps): React.ReactElement;
