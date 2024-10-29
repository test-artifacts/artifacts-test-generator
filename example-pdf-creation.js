import pdfModel from './src/pdf/pdf-model.js'
import { getPDFContent } from './src/pdf/models/template.js'

let pdfContent = getPDFContent('My project', 'frontend', 'chrome')
pdfModel(pdfContent)