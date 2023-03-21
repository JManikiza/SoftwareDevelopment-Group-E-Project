/**
 * ### References:
 *
 * - https://github.com/alphagov/govuk_frontend_toolkit/blob/master/stylesheets/_grid_layout.scss
 * - https://github.com/alphagov/govuk_elements/blob/master/assets/sass/elements/_layout.scss
 */
import * as React from 'react';
/**
 * Grid Column.
 *
 * Should always be wrapped by `GridRow`. Will always render a column at full width if
 * the browser width is below the `TABLET` breakpoint.
 *
 * NB our grid is based on flex-box, which differs from govuk-frontend, which instead uses
 * floats, however it is otherwise similar to use.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/grid-col
 *
 */
export declare const GridCol: import("styled-components").StyledComponent<"div", any, GridColProps, never>;
export interface GridColProps {
    /** GridCol content */
    children?: React.ReactNode;
    /** Dimension setting for the column (deprecated) */
    columnOneQuarter?: boolean;
    /** Dimension setting for the column (deprecated) */
    columnOneThird?: boolean;
    /** Dimension setting for the column (deprecated) */
    columnOneHalf?: boolean;
    /** Dimension setting for the column (deprecated) */
    columnTwoThirds?: boolean;
    /** Dimension setting for the column (deprecated) */
    columnThreeQuarters?: boolean;
    /** Dimension setting for the column (deprecated) */
    columnFull?: boolean;
    /**
     * Explicitly set column to width using value or descriptive string
     * (`one-quarter`, `one-third`, `one-half`, `two-thirds`, `three-quarters`, `full`)
     */
    setWidth?: number | string;
    /**
     * Explicitly set desktop column to width using value or descriptive string
     * (`one-quarter`, `one-third`, `one-half`, `two-thirds`, `three-quarters`, `full`)
     */
    setDesktopWidth?: number | string;
}
export default GridCol;
