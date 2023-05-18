/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MapandBackgroundOverridesProps = {
    MapandBackground?: PrimitiveOverrideProps<ViewProps>;
    MapBackground?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 31"?: PrimitiveOverrideProps<ViewProps>;
    ContactMapContainer?: PrimitiveOverrideProps<ViewProps>;
    ContactMap?: PrimitiveOverrideProps<ImageProps>;
    Headquarters?: PrimitiveOverrideProps<FlexProps>;
    "Headquarters Company s. r. o. Street. 51 100 00 Prague"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type MapandBackgroundProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: MapandBackgroundOverridesProps | undefined | null;
}>;
export default function MapandBackground(props: MapandBackgroundProps): React.ReactElement;
