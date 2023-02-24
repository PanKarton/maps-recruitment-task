import { useReactToPrint } from 'react-to-print';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { useRef } from 'react';

export const usePrintPdf = (documentTitle: string) => {
  const printRef = useRef<HTMLDivElement | null>(null);

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    documentTitle,
    print: async (printIframe: HTMLIFrameElement) => {
      const document = printIframe.contentDocument;

      const print = document?.getElementById('pdf');
      if (!print) return;

      const canvas = await html2canvas(print);

      var imgData = canvas.toDataURL('image/png');
      var imgWidth = canvas.width;
      var pageHeight = 832;
      var imgHeight = canvas.height;
      var heightLeft = imgHeight;
      const doc = new jsPDF('p', 'pt', 'a4');
      var position = 10; // give some top padding to first page

      doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (position >= -imgHeight) {
        // Generate new page and move image up for pageHeight value
        position += heightLeft - imgHeight; // top padding for other pages
        doc.addPage();
        doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      }
      doc.save(documentTitle);
    },
  });

  return {
    handlePrint,
    printRef,
  };
};
