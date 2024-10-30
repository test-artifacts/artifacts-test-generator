import { pdfModelServer } from './src/pdf/pdf-model.js'
import { getPDFContentForServer } from './src/pdf/models/template.js'

let pdfContent = getPDFContentForServer('My project', 'frontend', 'chrome')
pdfModelServer(pdfContent)