/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ComplaintHeadlineOverridesProps = {
    ComplaintHeadline?: PrimitiveOverrideProps<FlexProps>;
    "How to file a complaint"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ComplaintHeadlineProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ComplaintHeadlineOverridesProps | undefined | null;
}>;
export default function ComplaintHeadline(props: ComplaintHeadlineProps): React.ReactElement;
