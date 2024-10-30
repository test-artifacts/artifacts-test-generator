import PdfPrinter from 'pdfmake';
import fs from 'fs';

let fonts = {
	Helvetica: {
        normal: 'Helvetica',
        bold: 'Helvetica-Bold',
        italics: 'Helvetica-Oblique',
        bolditalics: 'Helvetica-BoldOblique'
    },
};

export default async function pdfModel(description){
    let printer = new PdfPrinter(fonts);
    let pdfDoc =  printer.createPdfKitDocument(description);
    const writeStream = pdfDoc.pipe(fs.createWriteStream('test-plan.pdf'));
    pdfDoc.end();

    writeStream.on('finish', () => {
        console.log('PDF successfully generated at root of the folder you run this command');
    });

    writeStream.on('error', (err) => {
        console.error('Error generating PDF:', err);
    });
}