/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ServicesOverridesProps = {
    Services?: PrimitiveOverrideProps<FlexProps>;
    FileService?: PrimitiveOverrideProps<FlexProps>;
    "Star 136562797"?: PrimitiveOverrideProps<IconProps>;
    "File a Complaint"?: PrimitiveOverrideProps<TextProps>;
    "Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.36562799"?: PrimitiveOverrideProps<TextProps>;
    GetAccreditedService?: PrimitiveOverrideProps<FlexProps>;
    "Star 136562802"?: PrimitiveOverrideProps<IconProps>;
    "Get Accredited"?: PrimitiveOverrideProps<TextProps>;
    "Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.36562804"?: PrimitiveOverrideProps<TextProps>;
    BusinessConsultingService?: PrimitiveOverrideProps<FlexProps>;
    "Star 136562807"?: PrimitiveOverrideProps<IconProps>;
    "Business Consulting"?: PrimitiveOverrideProps<TextProps>;
    "Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.36562809"?: PrimitiveOverrideProps<TextProps>;
    RegulatoryComplianceService?: PrimitiveOverrideProps<FlexProps>;
    "Star 136562812"?: PrimitiveOverrideProps<IconProps>;
    "Regulatory & Complaince"?: PrimitiveOverrideProps<TextProps>;
    "Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.36562814"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ServicesProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ServicesOverridesProps | undefined | null;
}>;
export default function Services(props: ServicesProps): React.ReactElement;
