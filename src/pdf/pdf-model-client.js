import pdfMake from 'pdfmake/build/pdfmake.js';
import pdfFonts from 'pdfmake/build/vfs_fonts.js';

export async function pdfModelClient(content, fileName){

    try{
      pdfMake.vfs = pdfFonts.pdfMake.vfs; // Setting the virtual file system for fonts
      pdfMake.createPdf(content).download(`${fileName}.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
}