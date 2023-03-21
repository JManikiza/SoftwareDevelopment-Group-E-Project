/**
 * ### References:
 *
 * - https://github.com/alphagov/govuk-frontend/tree/main/src/govuk/components/file-upload
 */
import type { LabelProps } from '@govuk-react/label';
import * as React from 'react';
/**
 * Help users select and upload a file.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/file-upload
 * - https://design-system.service.gov.uk/components/file-upload/
 */
export declare const FileUpload: React.ForwardRefExoticComponent<FileUploadProps & React.RefAttributes<HTMLInputElement>>;
export interface FileUploadProps extends LabelProps {
    /**
     * Optional hint text
     */
    hint?: string;
    /**
     * Final form meta object, pending adjustment/removal
     */
    meta?: {
        error?: string | string[];
        touched?: boolean;
    };
    children: React.ReactNode;
    acceptedFormats?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    name?: string;
}
export default FileUpload;
