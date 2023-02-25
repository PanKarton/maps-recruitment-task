import { useReactToPrint } from 'react-to-print';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { useCallback, useRef } from 'react';

export const usePrintPdf = (documentTitle: string) => {
  const detailsRef = useRef<HTMLDivElement | null>(null);
  const stepsRef = useRef<HTMLUListElement | null>(null);

  const getContent = useCallback(() => {
    const wrapper = document.createElement('div');

    const detailsElement = detailsRef.current?.cloneNode(true);
    const stepsElement = stepsRef.current?.cloneNode(true);

    if (!detailsElement || !stepsElement) return null;

    wrapper.appendChild(detailsElement);
    wrapper.appendChild(stepsElement);

    return wrapper;
  }, []);

  const transformHtmlToPdf = useCallback(
    async (printIframe: HTMLIFrameElement) => {
      const document = printIframe.contentDocument;
      const doc = new jsPDF('p', 'pt', 'a4');

      // Get HTMLElements
      const detailsPrint = document?.getElementById('details-print');
      const stepsPrint = document?.getElementById('steps-print');
      if (!detailsPrint || !stepsPrint) return;

      // Create canvas from HTMLElement
      const detailsCanvas = await html2canvas(detailsPrint);
      const stepsCanvas = await html2canvas(stepsPrint);

      const detailsImgData = detailsCanvas.toDataURL('image/png');
      const stepsImgData = stepsCanvas.toDataURL('image/png');

      // Set page size
      const pageWidth =
        detailsCanvas.width === parseInt(detailsCanvas.style.width) ? detailsCanvas.width : 595;
      const pageHeight = 832;

      // Add two images on first page
      doc.addImage(detailsImgData, 'PNG', 0, 0, pageWidth, detailsCanvas.height);
      doc.addImage(stepsImgData, 'PNG', 0, detailsCanvas.height, pageWidth, stepsCanvas.height);

      // Add second page with positon reduced by detailsCanvas.height
      let position = -pageHeight + detailsCanvas.height - 20;
      while (position > -stepsCanvas.height) {
        doc.addPage();
        doc.addImage(stepsImgData, 'PNG', 0, position, pageWidth, stepsCanvas.height);
        position = position - pageHeight;
      }

      doc.save(documentTitle);
    },
    [documentTitle]
  );

  const handlePrint = useReactToPrint({
    // Return content as iFrame to print function
    content: getContent,
    print: transformHtmlToPdf,
  });

  return {
    handlePrint,
    stepsRef,
    detailsRef,
  };
};
