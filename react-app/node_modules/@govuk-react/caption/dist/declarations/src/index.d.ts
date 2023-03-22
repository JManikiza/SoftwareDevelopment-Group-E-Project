/**
 * ### References
 *
 * - https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/core/_typography.scss
 * - https://design-system.service.gov.uk/styles/typography/#headings
 */
import type { WithWhiteSpaceProps } from '@govuk-react/lib';
/**
 * Sometimes you may need to make it clear that a page is part of a larger section or group. To do this, you can use a heading with a caption above it.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/caption
 * - https://design-system.service.gov.uk/styles/typography/#headings
 */
export declare const Caption: import("styled-components").StyledComponent<"span", any, CaptionProps, never>;
export interface CaptionProps extends WithWhiteSpaceProps {
    /**
     * Visual size level, accepts:
     *    `XLARGE`, `LARGE`, `MEDIUM`, `XL`, `L`, `M`
     *    or a numeric size that fits in the GDS font scale list
     */
    size?: number | string;
}
export default Caption;
