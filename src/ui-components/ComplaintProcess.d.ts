/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ComplaintProcessOverridesProps = {
    ComplaintProcess?: PrimitiveOverrideProps<FlexProps>;
    SubHeadline?: PrimitiveOverrideProps<FlexProps>;
    "What happens when I file a complaint?"?: PrimitiveOverrideProps<TextProps>;
    Process?: PrimitiveOverrideProps<FlexProps>;
    Option1?: PrimitiveOverrideProps<FlexProps>;
    OfficeBuilding36563446?: PrimitiveOverrideProps<ViewProps>;
    Vector36563447?: PrimitiveOverrideProps<IconProps>;
    "If your complaint meets our complaint acceptance criteria, your complaint will be sent to the business within approximately two business days."?: PrimitiveOverrideProps<TextProps>;
    Option2?: PrimitiveOverrideProps<FlexProps>;
    OfficeBuilding36563450?: PrimitiveOverrideProps<ViewProps>;
    Vector36563451?: PrimitiveOverrideProps<IconProps>;
    "If your complaint meets our acceptance criteria, your complaint will be sent to the business within approximately two business days."?: PrimitiveOverrideProps<TextProps>;
    Option3?: PrimitiveOverrideProps<FlexProps>;
    ClockOutline?: PrimitiveOverrideProps<ViewProps>;
    Vector36563455?: PrimitiveOverrideProps<IconProps>;
    "The business will be asked to respond within 14 calendar days."?: PrimitiveOverrideProps<TextProps>;
    Option4?: PrimitiveOverrideProps<FlexProps>;
    "Notifications none"?: PrimitiveOverrideProps<ViewProps>;
    Vector36563459?: PrimitiveOverrideProps<IconProps>;
    Vector36563460?: PrimitiveOverrideProps<IconProps>;
    "You will be notified of the business's response when we receive it (or notified that we received no response)."?: PrimitiveOverrideProps<TextProps>;
    Option5?: PrimitiveOverrideProps<FlexProps>;
    Calendar?: PrimitiveOverrideProps<ViewProps>;
    Vector36563464?: PrimitiveOverrideProps<IconProps>;
    "Complaints are usually closed within 30 days."?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ComplaintProcessProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ComplaintProcessOverridesProps | undefined | null;
}>;
export default function ComplaintProcess(props: ComplaintProcessProps): React.ReactElement;
