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

export async function pdfModelServer(content, artifactType){

    let printer = new PdfPrinter(fonts);
    let pdfDoc =  printer.createPdfKitDocument(content);
    const writeStream = pdfDoc.pipe(fs.createWriteStream(`${artifactType}.pdf`));
    pdfDoc.end();

    writeStream.on('finish', () => {
        console.log('Artifact generated on this same folder');
    });

    writeStream.on('error', (err) => {
        console.error('Error generating PDF:', err);
    });
}