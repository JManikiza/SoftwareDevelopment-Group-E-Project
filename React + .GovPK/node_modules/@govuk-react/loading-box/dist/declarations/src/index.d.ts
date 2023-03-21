import * as React from 'react';
/**
 * Use a LoadingBox to wrap components that can asyncronously load content.
 *
 * When `loading` is set to `true`, a spinner will overlay the contents to give visual feedback to the user.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/loading-box
 */
export declare const LoadingBox: React.FC<LoadingBoxProps>;
export interface LoadingBoxProps {
    /**
     * One or more children nodes that loading box will overlay
     */
    children: React.ReactNode;
    /**
     * Color (3 or 6 Hex char) of loading spinner
     */
    spinnerColor?: string;
    /**
     * Background color (3 or 6 Hex char) of loading spinner overlay when loading is true.
     */
    backgroundColor?: string;
    /**
     * Opacity of loading spinner backgroud colour when loading is true
     */
    backgroundColorOpacity?: number;
    /**
     * Loading spinner title text
     */
    title?: string;
    /**
     * Whether loading is currently set to true or false
     */
    loading?: boolean;
    /**
     * Length of fade-in animation in milliseconds
     */
    timeIn?: number;
    /**
     * Length of fade-out animation in milliseconds
     */
    timeOut?: number;
}
export default LoadingBox;
