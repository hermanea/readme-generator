let MD = "";

// Renders license badge at the top of the page.
function renderLicenseBadge(license) {
  if(license == "MIT"){
    MD = MD + "![badge](https://img.shields.io/badge/license-MIT-green)"
  } else if(license == "Apache 2.0"){
    MD = MD + "![badge](https://img.shields.io/badge/license-Apache%202-green)"
  } else{
    return;
  }
}

// The following functions add the corresponding sections to the README in order.
function des(description){
  MD = MD + `
## Description

${description}    
`  
}

function toc(){
  MD = MD + `
## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Testing](#testing)
- [License](#license)
- [Questions](#questions)  
`
}

function inst(install){
  MD = MD + `
## Installation

${install}  
`
}

function use(usage){
  MD = MD + `
## Usage

${usage}
`
}

function cont(contribution){
  MD = MD + `
## Contributing

${contribution}  
`
}

function testing(test){
  MD = MD + `
## Testing

${test}  
`
}

function lic(license){
  MD = MD + `
## License

${license}  
`
}

function questions(github,email){
  MD = MD + `
## Questions

For any questions regarding this project, please contact the developer at: ${email}

You may also visit the developer's Github profile here: (https://github.com/${github})  
`
}

// Generates final markdown buy running all functions then returns the string.
function generateMarkdown(data) {
  MD = `# ${data.title}
  `
renderLicenseBadge(data.license);
des(data.description);
toc();
inst(data.install);
use(data.usage);
cont(data.contribution);
testing(data.test);
lic(data.license);
questions(data.github,data.email);    
return MD;
}

//Exports generateMarkdown function.
module.exports = {
  generateMarkdown
};