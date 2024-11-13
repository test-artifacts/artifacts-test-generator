import { pdfModelServer } from './src/pdf/pdf-model-server.js'
import { getPDFContentForServerTestPlan } from './src/pdf/models/pdf-templates.js'

let pdfContent = getPDFContentForServerTestPlan('Google', 'frontend', 'device')
pdfModelServer(pdfContent, 'test-plan')