function createCommonPDFContent(projectName, component, typeInterfaceApplication) {
    return [
        { 
            text: `Test Plan for ${projectName}`, 
            style: 'header'
        },
        { 
            canvas: [
                { type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 2, lineColor: '#1c324a' }
            ], 
            margin: [0, 0, 0, 10]
        },
        { 
            text: 'This Test Plan defines the quality standards and processes needed to ensure a reliable, high-quality solution that meets all requirements and expectations..\n', 
            style: 'subheader',
        },
        {text: '\n\nTable of Content', style: 'header'},
        { 
            canvas: [
                { type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 2, lineColor: '#1c324a' }
            ], 
            margin: [0, 0, 0, 10]
        },
		{
			ol: [
			    'Purpose and Signifcance of a Test Plan Template',
			    
				'Test Plan Details',
				'Define Test Objectives',
				    {ul: ['Primary Objectives','Secondary Objectives'], margin: [0, 5]},
				'Determine Test Deliverables',    
				'Design the Test Strategy',
				
			],
			style: 'sectionTitle',
			margin: [0, 20]
		},
		{text: '\n\n1. Purpose and Significance of a Test Plan Template:', style: 'header'},
		{ 
            canvas: [
                { type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 2, lineColor: '#1c324a' }
            ], 
            margin: [0, 0, 0, 10]
        },
        {
			text: 'A Test Plans main goal is to document how engineers will verify that software works correctly. Acting as a roadmap, it outlines necessary tests, methods, and timelines. This template ensures thorough, organized testing by defining scope, objectives, and resources. It also improves communication among team members and stakeholders, helps track progress, adapts to changes, and streamlines the testing process.',
			style: 'sectionTitle'
		},
		
		{text: '\n\n2. Define Test Objectives', style: 'header'},
		{ 
            canvas: [
                { type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 2, lineColor: '#1c324a' }
            ], 
            margin: [0, 0, 0, 10]
        },
        {
            text: `Primary Objectives: `, 
            style: 'sectionTitle'
        },
        {
			ol: [
			    'Functional Testing',
			        {ul: [`Components: ${component}`, `Type of Interface Application: ${typeInterfaceApplication}`], margin: [0, 5]},
				'Performance Testing',
    		    	{ul: [	{
            			style: 'tableExample',
            			table: {
            				body: [
            					['What are the key performance metrics for the application?', 'What is the maximum allowable downtime for the application?', 'What are the peak usage times, and how much traffic do you expect during these periods?'],
            					['response time, throughput, resource utilization', 'uptime percentage, maintenance windows', 'daily users, concurrent users, usage spikes']
            				]
            			}
            		}]},
				'Security Testing',
				'Usability Testing',
			],
			style: 'sectionTitle'
		},
		
	    {
            text: `Secondary Objectives: `, 
            style: 'sectionTitle'
        },
        {
			ol: [
			    'Compatibility Testing',
			        {ul: [`Resolution options: iPhone16, iPad, Laptop`]},
			    'Accessibility Testing',
			        {ul: [`Resolution options: WCAG 2.2 compliance`]},
				'Regression Testing'
			],
			style: 'sectionTitle'
		}
    ];
}

function createPDFStyles() {
    return {
        header: {
            fontSize: 24,
            bold: true,
            color: '#1c324a',
            margin: [0, 20, 0, 10],
            alignment: 'center'
        },
        subheader: {
            fontSize: 19,
            italics: true,
            color: '#1c324a',
            margin: [0, 20, 0, 20]
        },
        sectionTitle: {
            fontSize: 16,
            bold: true,
            color: '#1c324a',
            margin: [0, 4, 0, 5]
        },
        listItem: {
            fontSize: 12,
            color: '#333',
            margin: [0, 0, 0, 5]
        },
        tableExample: {
            margin: [20, 20, 20, 20]
        }
    };
}

export function getPDFContentForServer(projectName, component, browsers) {
    let pdfContent = {
        content: createCommonPDFContent(projectName, component, browsers),
        styles: createPDFStyles(),
        defaultStyle: {
            font: 'Helvetica'
        }
    };

    return pdfContent;
}

export function getPDFContentForClient(projectName, component, browsers) {
    let pdfContent = {
        content: createCommonPDFContent(projectName, component, browsers),
        styles: createPDFStyles()
    };

    return pdfContent;
}