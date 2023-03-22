/**
 * ### References
 *
 * - https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/core/_lists.scss
 */
import type { WithWhiteSpaceProps } from '@govuk-react/lib';
export interface OrderedListProps extends WithWhiteSpaceProps {
    listStyleType?: string;
}
/**
 * Use lists to make blocks of text easier to read, and to break information into manageable chunks.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/ordered-list
 * - https://design-system.service.gov.uk/styles/typography/#lists
 */
export declare const OrderedList: import("styled-components").StyledComponent<"ol", any, OrderedListProps, never>;
export default OrderedList;
