/**
 * ### References
 *
 * - https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/objects/_form-group.scss
 */
import type { WithWhiteSpaceProps } from '@govuk-react/lib';
import * as React from 'react';
/**
 * For wrapping a set of form fields such as checkboxes.
 *
 * Also see Label and LabelText components.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/form-group
 */
export declare const FormGroup: import("styled-components").StyledComponent<"div", any, FormGroupProps, never>;
export interface FormGroupProps extends WithWhiteSpaceProps {
    children?: React.ReactNode;
    error?: boolean;
}
export default FormGroup;
