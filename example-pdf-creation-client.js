import { pdfModelClient } from './src/pdf/pdf-model-client.js'
import { getPDFContentForClient } from './src/pdf/models/template.js'

let pdfContent = getPDFContentForClient('Google', 'frontend', 'web')
pdfModelClient(pdfContent, 'test-plan')