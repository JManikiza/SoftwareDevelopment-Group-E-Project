import type { WithWhiteSpaceProps } from '@govuk-react/lib';
import * as React from 'react';
/**
 * A search box with attached submit button.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/search-box
 * - https://components.publishing.service.gov.uk/component-guide/search
 */
export declare const SearchBox: SearchBoxType;
interface SearchBoxProps extends React.HTMLAttributes<HTMLDivElement>, WithWhiteSpaceProps {
}
export interface SearchBoxType<T = HTMLDivElement> extends React.ForwardRefExoticComponent<SearchBoxProps & React.RefAttributes<T>> {
    Input?: React.ElementType;
    Button?: React.ElementType;
}
export default SearchBox;
