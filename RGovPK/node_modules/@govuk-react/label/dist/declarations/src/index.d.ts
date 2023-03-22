import type { WithWhiteSpaceProps } from '@govuk-react/lib';
/**
 * Label element to wrap label-text and a form input.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/label
 */
export declare const Label: import("styled-components").StyledComponent<"label", any, LabelProps, never>;
export interface LabelProps extends WithWhiteSpaceProps {
    /**
     * Apply error state styling to the component
     */
    error?: boolean;
}
export default Label;
