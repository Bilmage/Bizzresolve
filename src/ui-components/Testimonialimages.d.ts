/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TestimonialimagesOverridesProps = {
    Testimonialimages?: PrimitiveOverrideProps<FlexProps>;
    "Frame 2"?: PrimitiveOverrideProps<ViewProps>;
    image36568537?: PrimitiveOverrideProps<ImageProps>;
    "Frame 3"?: PrimitiveOverrideProps<ViewProps>;
    image36568539?: PrimitiveOverrideProps<ImageProps>;
    "Frame 4"?: PrimitiveOverrideProps<ViewProps>;
    image36568541?: PrimitiveOverrideProps<ImageProps>;
    "Frame 5"?: PrimitiveOverrideProps<ViewProps>;
    image36568543?: PrimitiveOverrideProps<ImageProps>;
    "Frame 6"?: PrimitiveOverrideProps<ViewProps>;
    image36568545?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type TestimonialimagesProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: TestimonialimagesOverridesProps | undefined | null;
}>;
export default function Testimonialimages(props: TestimonialimagesProps): React.ReactElement;
