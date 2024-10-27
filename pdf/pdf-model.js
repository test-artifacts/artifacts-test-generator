import PdfPrinter from 'pdfmake';
import fs from 'fs';

let fonts = {
	Roboto: {
		normal: 'fonts/Roboto-Regular.ttf',
		bold: 'fonts/Roboto-Medium.ttf',
		italics: 'fonts/Roboto-Italic.ttf',
		bolditalics: 'fonts/Roboto-MediumItalic.ttf'
	}
};

export default async function pdfModel(description){
    let printer = new PdfPrinter(fonts);
    let pdfDoc =  printer.createPdfKitDocument(description);
    pdfDoc.pipe(fs.createWriteStream('test-plan.pdf'));
    pdfDoc.end();
}
