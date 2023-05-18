/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HeadlineTextOverridesProps = {
    HeadlineText?: PrimitiveOverrideProps<FlexProps>;
    Headline?: PrimitiveOverrideProps<FlexProps>;
    "Get in touch"?: PrimitiveOverrideProps<TextProps>;
    Description?: PrimitiveOverrideProps<FlexProps>;
    "Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus."?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type HeadlineTextProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: HeadlineTextOverridesProps | undefined | null;
}>;
export default function HeadlineText(props: HeadlineTextProps): React.ReactElement;
