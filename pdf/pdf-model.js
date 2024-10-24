import PdfPrinter from 'pdfmake';
import fs from 'fs';

var fonts = {
	Roboto: {
		normal: 'fonts/Roboto-Regular.ttf',
		bold: 'fonts/Roboto-Medium.ttf',
		italics: 'fonts/Roboto-Italic.ttf',
		bolditalics: 'fonts/Roboto-MediumItalic.ttf'
	}
};

export default function pdfModel(description){
    let printer = new PdfPrinter(fonts);
    let pdfDoc = printer.createPdfKitDocument(description);
    pdfDoc.pipe(fs.createWriteStream('test-plan.pdf'));
    pdfDoc.end();
}
