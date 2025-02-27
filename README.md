# RWA-Portfolio
The RWA Portfolio Reporting Packages provides a comprehensive overview of the Real-World Assets (RWA) held within the ecosystem. It details asset composition, performance, risk assessments, and governance considerations, ensuring transparency and informed decision-making for stakeholders. The report helps track the financial health, stability, and strategic direction of RWA investments. 

## How to install this package in Connect?

This RWA-portfolio package can be installed when running connect by making use of the 'Package Manager' in the connect settings. 
Open the Settings in the bottom left corner of connect by clicking on the settingswheel. Move to the 'Package Manager' section of the settings menu. 
Here you will find a field to add new packages. Add the package by adding inputting it's NPM handle and click confirm: 

NPM handle: @sky-ph/rwa-portfolio

## How to install this package in a local version of Connect?

Clone the repository and install the dependencies

```bash
npm install
```

Generate the reducer files based of the document model schema
```bash
npm run generate
```

Start connect: npm run connect

If you want to explore this package locally you can clone this repository and run a local version of connect with the following command: 

```bash
npm run connect
```

You will now find the document models and editors that are part of this package at the bottom of the connect interface an be able to test them in Connect Studio. 
