/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FileComplaintOverridesProps = {
    FileComplaint?: PrimitiveOverrideProps<FlexProps>;
    "File complaint Headline"?: PrimitiveOverrideProps<FlexProps>;
    SubHeadline36563420?: PrimitiveOverrideProps<FlexProps>;
    "File a complaint"?: PrimitiveOverrideProps<TextProps>;
    Paragraph?: PrimitiveOverrideProps<FlexProps>;
    "Biz Resolve welcomes the opportunity to assist you with your market place challenge. Whether you nedd to file a complaint, post a review, tell us about a misleading advertisement, or report a scam, you're in the right place. There are some disputes Biz Resolve cannot help with, You can view those here."?: PrimitiveOverrideProps<TextProps>;
    Faq?: PrimitiveOverrideProps<FlexProps>;
    SubHeadline36563425?: PrimitiveOverrideProps<FlexProps>;
    "How can we help?"?: PrimitiveOverrideProps<TextProps>;
    Options?: PrimitiveOverrideProps<FlexProps>;
    Option1?: PrimitiveOverrideProps<FlexProps>;
    "Radio buttons36563429"?: PrimitiveOverrideProps<FlexProps>;
    "I'd like to file a complaint against a business, and have Biz Resolve help me get a resolution to my problem."?: PrimitiveOverrideProps<TextProps>;
    Option2?: PrimitiveOverrideProps<FlexProps>;
    "Radio buttons36563432"?: PrimitiveOverrideProps<FlexProps>;
    "I'd like to share an experience about a business."?: PrimitiveOverrideProps<TextProps>;
    Option3?: PrimitiveOverrideProps<FlexProps>;
    "Radio buttons36563435"?: PrimitiveOverrideProps<FlexProps>;
    "I'd like to warn others about a business or offer that sounds like a fraud."?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<FlexProps>;
    Option4?: PrimitiveOverrideProps<FlexProps>;
    "Radio buttons36563439"?: PrimitiveOverrideProps<FlexProps>;
    "I'd like to file a complaint about a warranty dispute for a vehicle ."?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type FileComplaintProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: FileComplaintOverridesProps | undefined | null;
}>;
export default function FileComplaint(props: FileComplaintProps): React.ReactElement;
