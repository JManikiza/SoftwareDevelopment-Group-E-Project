/// <reference types="react" />
declare const TabPanel: import("styled-components").StyledComponent<"section", any, TabPanelProps, never>;
interface TabPanelProps extends React.HTMLAttributes<HTMLDivElement> {
    /** determine which panel is displayed */
    selected?: boolean;
}
export default TabPanel;
