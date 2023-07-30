// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// Each Badge is from Github's website
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else if (license === 'Apache License') {
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } else if (license === 'Boost Software') {
    return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
  } else {
    return 'No license badge available'
  }
};

// TODO: Create a function that returns the license link
// Set each license to return proper information about itself
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return 'https://opensource.org/license/mit/'
  } else if (license === 'Apache License') {
    return 'https://opensource.org/license/apache-2-0/'
  } else if (license === 'Boost Software') {
    return 'https://opensource.org/license/bsl-1-0/'
  } else {
    return 'No license information available'
  }
};

// TODO: Create a function that returns the license section of README
// Set each license to return proper information about itself
function renderLicenseSection(license) {
  if (license === 'MIT') {
    return 'This project is licensed under the MIT license. For more information find the full description in the license section.'
  } else if (license === 'Apache License') {
    return 'This project is licensed under the Apache license. For more information find the full description in the license section.'
  } else if (license === 'Boost Software') {
    return 'This project is licensed under the Boost Software license. For more information find the full description in the license section.'
  } else {
    return 'License Section is Empty.'
  }
}

// TODO: Create a function to generate markdown for README
// created generateMarkdown function to call on all of the inserted data and organized it for the README.md file.
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseSection(data.license)}

  ${renderLicenseBadge(data.license)}

  ${renderLicenseLink(data.license)}

  ## Contributors
  ${data.contributors}

  ## Questions
  If you have any questions or want to work together in the future, you can find me on Github as GuyD15. https://github.com/GuyD15 or email me at guywayne.domino7@gmail.com.
`;
}

module.exports = generateMarkdown;
