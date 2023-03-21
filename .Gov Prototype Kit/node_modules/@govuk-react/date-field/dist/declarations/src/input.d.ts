import * as React from 'react';
import BaseInput, { InputProps as BaseInputProps } from '@govuk-react/input';
export interface DateInputProps {
    names?: {
        day?: string;
        month?: string;
        year?: string;
    };
    defaultValues?: {
        day?: string;
        month?: string;
        year?: string;
    };
    /**
     * Custom props to pass down to the input fields
     */
    inputs?: {
        day?: BaseInputProps;
        month?: BaseInputProps;
        year?: BaseInputProps;
    };
    value?: {
        day?: string;
        month?: string;
        year?: string;
    };
    labels?: {
        day?: string;
        month?: string;
        year?: string;
    };
    /**
     * This comes from the multiInputInput HOC and is needed to track all 3 inputs
     */
    refs?: (refs: {
        day?: React.Ref<typeof BaseInput>;
        month?: React.Ref<typeof BaseInput>;
        year?: React.Ref<typeof BaseInput>;
    }) => void;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>, key: string) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>, key: string) => void;
    onFocus?: (e: React.FocusEvent<HTMLInputElement>, key: string) => void;
    error?: boolean;
}
declare const _default: any;
export default _default;
