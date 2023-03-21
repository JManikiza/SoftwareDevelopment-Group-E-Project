/// <reference types="react" />
import type { WithWidthProps } from '@govuk-react/lib';
declare const Cell: import("styled-components").StyledComponent<"td", any, CellProps, never>;
interface CellProps extends React.HTMLAttributes<HTMLTableCellElement>, WithWidthProps {
    alignRight?: boolean;
    isHeader?: boolean;
    numeric?: boolean;
    bold?: boolean;
}
export default Cell;
