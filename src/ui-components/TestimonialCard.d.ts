/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TestimonialCardOverridesProps = {
    TestimonialCard?: PrimitiveOverrideProps<FlexProps>;
    Body?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    Frame?: PrimitiveOverrideProps<FlexProps>;
    Name?: PrimitiveOverrideProps<FlexProps>;
    Noah?: PrimitiveOverrideProps<TextProps>;
    Description?: PrimitiveOverrideProps<FlexProps>;
    "Biz Resolve gave my business the credibility it needed to attract new customers and retain existing ones."?: PrimitiveOverrideProps<TextProps>;
    Location?: PrimitiveOverrideProps<FlexProps>;
    Developer?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type TestimonialCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: TestimonialCardOverridesProps | undefined | null;
}>;
export default function TestimonialCard(props: TestimonialCardProps): React.ReactElement;
