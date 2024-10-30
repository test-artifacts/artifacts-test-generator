export function getPDFContentForServer(projectName, component, browsers) {
   
    let pdfContent = {
        content: [
            { 
                text: `Test Plan for ${projectName}`, 
                style: 'header' 
            },
            { 
                canvas: [
                    { type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 2, lineColor: '#DC143C' }
                ], 
                margin: [0, 0, 0, 20]
            },
            { 
                text: 'This Test Plan outlines quality measures in order to delivery the best solution.\n\n', 
                style: 'subheader'
            },
            {
                text: `Components: ${component}`, 
                style: 'sectionTitle'
            },
            {
                text: `Browsers: ${browsers}`, 
                style: 'sectionTitle'
            },
            {
                ul: [
                    { text: 'Resolution options: iPhone16, iPad, Laptop', style: 'listItem' },
                    { text: 'Accessibility: WCAG 2.1 compliance', style: 'listItem' },
                    { text: 'Security: Ensuring user data confidentiality', style: 'listItem' }
                ],
                margin: [0, 10, 0, 10]
            }
        ],
        styles: {
            header: {
                fontSize: 24,
                bold: true,
                color: '#333',
                margin: [0, 20, 0, 10]
            },
            subheader: {
                fontSize: 16,
                italics: true,
                color: '#DC143C',
                margin: [0, 0, 0, 20]
            },
            sectionTitle: {
                fontSize: 14,
                bold: true,
                color: '#DC143C',
                margin: [0, 15, 0, 5]
            },
            listItem: {
                fontSize: 12,
                color: '#333',
                margin: [0, 0, 0, 5]
            }
        },
        defaultStyle: {
            font: 'Helvetica'
        }
    };

    return pdfContent;
}

export function getPDFContentForClient(projectName, component, browsers) {
   
    let pdfContent = {
        content: [
            { 
                text: `Test Plan for ${projectName}`, 
                style: 'header' 
            },
            { 
                canvas: [
                    { type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 2, lineColor: '#DC143C' }
                ], 
                margin: [0, 0, 0, 20]
            },
            { 
                text: 'This Test Plan outlines quality measures in order to delivery the best solution.\n\n', 
                style: 'subheader'
            },
            {
                text: `Components: ${component}`, 
                style: 'sectionTitle'
            },
            {
                text: `Browsers: ${browsers}`, 
                style: 'sectionTitle'
            },
            {
                ul: [
                    { text: 'Resolution options: iPhone16, iPad, Laptop', style: 'listItem' },
                    { text: 'Accessibility: WCAG 2.1 compliance', style: 'listItem' },
                    { text: 'Security: Ensuring user data confidentiality', style: 'listItem' }
                ],
                margin: [0, 10, 0, 10]
            }
        ],
        styles: {
            header: {
                fontSize: 24,
                bold: true,
                color: '#333',
                margin: [0, 20, 0, 10]
            },
            subheader: {
                fontSize: 16,
                italics: true,
                color: '#DC143C',
                margin: [0, 0, 0, 20]
            },
            sectionTitle: {
                fontSize: 14,
                bold: true,
                color: '#DC143C',
                margin: [0, 15, 0, 5]
            },
            listItem: {
                fontSize: 12,
                color: '#333',
                margin: [0, 0, 0, 5]
            }
        }
    };

    return pdfContent;
}