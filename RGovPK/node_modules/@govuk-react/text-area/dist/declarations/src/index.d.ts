/**
 * ### References:
 *
 * - https://github.com/alphagov/govuk-frontend/tree/main/src/govuk/components/textarea
 */
import type { LabelProps } from '@govuk-react/label';
import * as React from 'react';
declare const TextAreaField: import("styled-components").StyledComponent<"textarea", any, {
    error?: boolean;
}, never>;
/**
 * Use the textarea component when you need to let users enter an amount of text that’s longer than a single line.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/text-area
 * - https://design-system.service.gov.uk/components/textarea/
 */
export declare const TextArea: React.FC<TextAreaProps>;
export interface TextAreaProps extends LabelProps {
    hint?: React.ReactNode;
    input?: React.TextareaHTMLAttributes<HTMLTextAreaElement>;
    meta?: {
        error?: string | string[];
        touched?: boolean;
    };
    children: React.ReactNode;
}
/** Component is not exported withWhitespace because Label
 *  is also exported withWhitespace and therefore takes precedence.
 */
export default TextArea;
export { TextAreaField };
