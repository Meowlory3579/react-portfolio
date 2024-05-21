import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import './Resume.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="resume-container">
      <div className="pdf-viewer">
        <Document
          file="/assets/files/MalloryHowardResume.pdf" 
          onLoadSuccess={onDocumentLoadSuccess} >
          <Page pageNumber={pageNumber} />
        </Document>
      </div>
      <a href="/assets/files/MalloryHowardResume.pdf" target="_blank" rel="noopener noreferrer">
        Download/View Full Resume
      </a>
    </div>
  );
}
