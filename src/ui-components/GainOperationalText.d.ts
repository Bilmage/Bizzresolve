/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GainOperationalTextOverridesProps = {
    GainOperationalText?: PrimitiveOverrideProps<FlexProps>;
    Headline?: PrimitiveOverrideProps<FlexProps>;
    "Gain operational excellence."?: PrimitiveOverrideProps<TextProps>;
    Paragraph?: PrimitiveOverrideProps<FlexProps>;
    "Get certified by our experienced team of customer satisfaction experts. Achieve operational excellence and access to valuable guidance on how to improve your business standards."?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type GainOperationalTextProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: GainOperationalTextOverridesProps | undefined | null;
}>;
export default function GainOperationalText(props: GainOperationalTextProps): React.ReactElement;
