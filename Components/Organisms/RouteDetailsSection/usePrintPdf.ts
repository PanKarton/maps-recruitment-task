import { useReactToPrint } from 'react-to-print';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { useRef } from 'react';

export const usePrintPdf = (documentTitle: string) => {
  const detailsRef = useRef<HTMLDivElement | null>(null);
  const stepsRef = useRef<HTMLUListElement | null>(null);

  const handlePrint = useReactToPrint({
    // Return content as iFrame to print function
    content: () => {
      const wrapper = document.createElement('div');

      const detailsElement = detailsRef.current?.cloneNode(true);
      const stepsElement = stepsRef.current?.cloneNode(true);

      if (!detailsElement || !stepsElement) return null;

      wrapper.appendChild(detailsElement);
      wrapper.appendChild(stepsElement);

      return wrapper;
    },
    print: async (printIframe: HTMLIFrameElement) => {
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

      // Set const and variables for algoritm
      const imgWidth = detailsCanvas.width;
      const pageHeight = 832;
      const imgHeight = detailsCanvas.height + stepsCanvas.height;
      let heightLeft = imgHeight;

      // Add two images on first page
      doc.addImage(detailsImgData, 'PNG', 0, 0, imgWidth, detailsCanvas.height);
      doc.addImage(stepsImgData, 'PNG', 0, detailsCanvas.height, imgWidth, stepsCanvas.height);
      heightLeft -= pageHeight;

      let position = 0;

      while (position >= -imgHeight) {
        // Generate new page and move image up for pageHeight value
        position += heightLeft - imgHeight; // move steps image top higher per page hight each loop step
        doc.addPage();
        doc.addImage(stepsImgData, 'PNG', 0, position, imgWidth, stepsCanvas.height);
      }
      doc.save(documentTitle);
    },
  });

  return {
    handlePrint,
    stepsRef,
    detailsRef,
  };
};
