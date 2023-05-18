/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ImproveCustomerTextOverridesProps = {
    ImproveCustomerText?: PrimitiveOverrideProps<FlexProps>;
    Headline?: PrimitiveOverrideProps<FlexProps>;
    "Improve customer satisfaction."?: PrimitiveOverrideProps<TextProps>;
    Paragraph?: PrimitiveOverrideProps<FlexProps>;
    "Achieve Independent Accreditation and Stand Out as a business committed to customer satisfaction. Display your badge or certificate to customers and earn their trust."?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ImproveCustomerTextProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ImproveCustomerTextOverridesProps | undefined | null;
}>;
export default function ImproveCustomerText(props: ImproveCustomerTextProps): React.ReactElement;
