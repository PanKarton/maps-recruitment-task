import { MutableRefObject } from 'react';
import ReactToPdf from 'react-to-pdf';
import { StyledButton } from './DownloadPdfButton.styles';

type Props = {
  printRef: MutableRefObject<HTMLDivElement | null>;
  fileTitle: string;
};

export const DownloadPdfButton = ({ printRef, fileTitle }: Props) => {
  return (
    <ReactToPdf targetRef={printRef} filename={fileTitle} scale={0.5}>
      {({ toPdf }: { toPdf: () => void }) => (
        <StyledButton type="button" onClick={toPdf}>
          Download PDF
        </StyledButton>
      )}
    </ReactToPdf>
  );
};
