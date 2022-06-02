import React, { useState } from 'react';
import { Document, Page, pdfjs } from "react-pdf";
import Sample from './sample3.pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
function MyApp(props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(2);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document file={props.fileToShow} >
      <Page pageNumber={1}  />
      <Page pageNumber={2}  />
      <Page pageNumber={3}  />
      <Page pageNumber={4}  />
      <Page pageNumber={5}  />
      </Document>

    </div>
  );
}

export default MyApp
