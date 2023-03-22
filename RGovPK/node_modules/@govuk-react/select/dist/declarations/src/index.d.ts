/**
 * ### References:
 *
 * - https://github.com/alphagov/govuk-frontend/tree/main/src/govuk/components/select
 */
import type { LabelProps } from '@govuk-react/label';
import * as React from 'react';
declare const StyledSelect: import("styled-components").StyledComponent<"select", any, {
    error?: boolean;
}, never>;
/**
 * The select component should only be used as a last resort in public-facing services because research shows that some users find selects very difficult to use.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/select
 * - https://design-system.service.gov.uk/components/select/
 */
export declare const Select: React.FC<SelectProps>;
export interface SelectProps extends LabelProps {
    hint?: React.ReactNode;
    input?: React.SelectHTMLAttributes<HTMLSelectElement>;
    meta?: {
        error?: string | string[];
        touched?: boolean;
    };
    children: React.ReactNode;
    label: string;
    errorText?: string;
}
export default Select;
export { StyledSelect as SelectInput };
