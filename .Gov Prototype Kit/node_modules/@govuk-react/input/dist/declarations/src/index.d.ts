/**
 * - https://github.com/alphagov/govuk-frontend/tree/main/src/govuk/components/
 */
import type { WithWhiteSpaceProps } from '@govuk-react/lib';
import * as React from 'react';
/**
 * Use the text input component when you need to let users enter text that’s no longer than a single line, such as their name or phone number.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/input
 * - https://design-system.service.gov.uk/components/text-input/
 *
 */
export declare const Input: import("styled-components").StyledComponent<"input", any, InputProps, never>;
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, WithWhiteSpaceProps {
    error?: boolean;
    errorColor?: string;
}
export default Input;
