/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ResolveComplaintsTextOverridesProps = {
    ResolveComplaintsText?: PrimitiveOverrideProps<FlexProps>;
    Headline?: PrimitiveOverrideProps<FlexProps>;
    "Resolve complaints efficiently."?: PrimitiveOverrideProps<TextProps>;
    Paragraph?: PrimitiveOverrideProps<FlexProps>;
    "Receive complaints or feedback from customers via our easy-to-use platform. Resolve issues efficiently, comply with standards and avoid reputational damage."?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ResolveComplaintsTextProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ResolveComplaintsTextOverridesProps | undefined | null;
}>;
export default function ResolveComplaintsText(props: ResolveComplaintsTextProps): React.ReactElement;
