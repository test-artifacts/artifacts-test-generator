import PdfPrinter from 'pdfmake';
import pdfMake from 'pdfmake/build/pdfmake.js';
import pdfFonts from 'pdfmake/build/vfs_fonts.js';
import fs from 'fs';

let fonts = {
	Helvetica: {
        normal: 'Helvetica',
        bold: 'Helvetica-Bold',
        italics: 'Helvetica-Oblique',
        bolditalics: 'Helvetica-BoldOblique'
    },
};

export async function pdfModelServer(content){

    let printer = new PdfPrinter(fonts);
    let pdfDoc =  printer.createPdfKitDocument(content);
    const writeStream = pdfDoc.pipe(fs.createWriteStream('test-plan.pdf'));
    pdfDoc.end();

    writeStream.on('finish', () => {
        console.log('PDF successfully generated at root of the folder you run this command');
    });

    writeStream.on('error', (err) => {
        console.error('Error generating PDF:', err);
    });
}

export async function pdfModelClient(content, fileName){

    try{
      pdfMake.vfs = pdfFonts.pdfMake.vfs; // Setting the virtual file system for fonts
      pdfMake.createPdf(content).download(`${fileName}.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
}