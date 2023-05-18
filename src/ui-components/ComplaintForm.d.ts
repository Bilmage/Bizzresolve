/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ComplaintFormOverridesProps = {
    ComplaintForm?: PrimitiveOverrideProps<FlexProps>;
    TextField36563271?: PrimitiveOverrideProps<FlexProps>;
    TextField36563272?: PrimitiveOverrideProps<FlexProps>;
    Address?: PrimitiveOverrideProps<FlexProps>;
    TextField36563274?: PrimitiveOverrideProps<FlexProps>;
    TextField36563275?: PrimitiveOverrideProps<FlexProps>;
    TextField36563276?: PrimitiveOverrideProps<FlexProps>;
    TextField36563277?: PrimitiveOverrideProps<FlexProps>;
    TextAreaField?: PrimitiveOverrideProps<FlexProps>;
    "Drag and Drop Field"?: PrimitiveOverrideProps<FlexProps>;
    Description?: PrimitiveOverrideProps<FlexProps>;
    CloudUploadOutline?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    "Label text"?: PrimitiveOverrideProps<TextProps>;
    Checkbox?: PrimitiveOverrideProps<FlexProps>;
    Checkboxes?: PrimitiveOverrideProps<FlexProps>;
    "I want to protect my data by signing an NDA"?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<FlexProps>;
} & EscapeHatchProps;
export declare type ComplaintFormProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ComplaintFormOverridesProps | undefined | null;
}>;
export default function ComplaintForm(props: ComplaintFormProps): React.ReactElement;
