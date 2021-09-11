import React, { useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { makeStyles } from "@material-ui/core/styles";
import { useLocation } from 'react-router-dom';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const useStyles = makeStyles((theme) => ({
   pdf: {
      textAlign: 'center',
      '& .react-pdf__Page': {
         marginTop: '10px',
      },
      '& .react-pdf__Page__annotations.annotationLayer': {
         padding: '20px',
      },
      '& .react-pdf__Page__canvas': {
         margin: '0 auto',
      },
   }
}))


export default function ViewPDF(props) {
   const [numPages, setNumPages] = useState(null);
   const [pdfFile, setPdfFile] = useState(null);
   const classes = useStyles();
   const location = useLocation();
   function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
   }

   function onPassword(callback, reason) {
      function callbackProxy(password) {
         // Cancel button handler
         if (password === null) {
            setPdfFile(null)
         }

         callback(password);
      }

      switch (reason) {
         case 1: {
            const password = prompt('Pass là 1111. Nhập vào đây');
            callbackProxy(password);
            break;
         }
         case 2: {
            const password = prompt('Password sai rồi, nhập lại. Pass là 1111');
            callbackProxy(password);
            break;
         }
         default:
      }
   }


   const fileType = ['application/pdf'];
   const handlePdfFileChange = (e) => {
      setPdfFile(null)
      fetch('https://cdn.ecogiong.com/pdfs/exports/20210823093341GIONG20210104003.pdf').then(function (response) {
         return response.blob();
      }).then(function (myBlob) {
         // let selectedFile = e.target.files[0];
         let selectedFile = myBlob;
         if (selectedFile) {
            if (selectedFile && fileType.includes(selectedFile.type)) {
               let reader = new FileReader();
               reader.readAsDataURL(selectedFile);
               reader.onloadend = (e) => {
                  setPdfFile(e.target.result);
               }
            }
            else {
               setPdfFile(null);
            }
         }
      });
      e.target.value = null;
   }

   console.log("file", pdfFile)
   return (
      <div className={classes.pdf}
         onContextMenu={(e) => e.preventDefault()}
      >
         <input accept="application/pdf" type="file" className='form-control'
            required onChange={handlePdfFileChange}
         />
         {pdfFile &&
            <Document
               file={pdfFile}
               options={{ workerSrc: "/pdf.worker.js" }}
               onLoadSuccess={onDocumentLoadSuccess}
               onPassword={(callback, reason) => onPassword(callback, reason)}
            >
               <div
                  style={{ display: 'inline-flex', flexDirection: 'column' }}

               >
                  {Array.from(new Array(numPages), (el, index) => (
                     <Page key={`page_${index + 1}`} onClick={(e) => {
                     }} scale={1.5} pageNumber={index + 1} />

                  ))}
               </div>
            </Document>
         }

      </div>
   );
}