import { pdfModelClient } from './src/pdf/pdf-model-client.js'
import { getPDFContentForClient } from './src/pdf/models/template.js'

let pdfContent = getPDFContentForClient('My project', 'frontend', 'chrome')
pdfModelClient(pdfContent, 'test-plan')