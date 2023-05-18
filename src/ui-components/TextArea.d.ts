/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TextAreaOverridesProps = {
    TextArea?: PrimitiveOverrideProps<FlexProps>;
    "Title C36562861"?: PrimitiveOverrideProps<FlexProps>;
    "Headline C36562862"?: PrimitiveOverrideProps<FlexProps>;
    "Become a successful"?: PrimitiveOverrideProps<TextProps>;
    "Title C36562864"?: PrimitiveOverrideProps<FlexProps>;
    "Headline C36562865"?: PrimitiveOverrideProps<FlexProps>;
    Business?: PrimitiveOverrideProps<TextProps>;
    Description?: PrimitiveOverrideProps<FlexProps>;
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend suscipit aenean orci risus lectus lacus, posuere dignissim. Urna arcu, sem nullam ipsum ac. Scelerisque potenti tempus ultricies eu, enim lacinia est risus massa. Vulputate ac a lacus, eget ipsum."?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type TextAreaProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: TextAreaOverridesProps | undefined | null;
}>;
export default function TextArea(props: TextAreaProps): React.ReactElement;
