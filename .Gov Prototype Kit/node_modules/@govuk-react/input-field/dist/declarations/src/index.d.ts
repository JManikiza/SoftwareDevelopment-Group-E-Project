/**
 * ### References:
 *
 * - https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/components/input/_input.scss
 * - https://github.com/alphagov/govuk_elements/blob/master/assets/sass/elements/_forms.scss
 */
import type { LabelProps } from '@govuk-react/label';
import type { InputProps } from '@govuk-react/input';
import * as React from 'react';
/**
 * Use the text input component when you need to let users enter text that’s no longer than a single line, such as their name or phone number.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/input-field
 * - https://design-system.service.gov.uk/components/text-input/
 *
 */
export declare const InputField: React.FC<InputFieldProps>;
export interface InputFieldProps extends LabelProps {
    hint?: React.ReactNode;
    input?: InputProps;
    meta?: {
        error?: string | string[];
        touched?: boolean;
    };
    children: React.ReactNode;
}
/** Component is not exported withWhitespace because Label
 *  is also exported withWhitespace and therefore takes precedence.
 */
export default InputField;
