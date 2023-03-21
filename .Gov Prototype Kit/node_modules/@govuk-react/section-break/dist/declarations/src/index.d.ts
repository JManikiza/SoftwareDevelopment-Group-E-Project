/**
 * ### References
 *
 * - https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/core/_section-break.scss
 */
import type { WithWhiteSpaceProps } from '@govuk-react/lib';
/**
 * Create a thematic break between sections of content.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/section-break
 * - https://design-system.service.gov.uk/styles/typography/#section-break
 */
export declare const SectionBreak: import("styled-components").StyledComponent<"hr", any, SectionBreakProps, never>;
export interface SectionBreakProps extends WithWhiteSpaceProps {
    level?: string;
    visible?: boolean;
}
export default SectionBreak;
