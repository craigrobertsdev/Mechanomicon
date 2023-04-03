# Mechanomicon

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## A one-stop-shop for managing vehicle service and repairs

Mechanomicon is a cutting-edge vehicle management platform designed to revolutionize the way individuals track, maintain, and manage their vehicles. This comprehensive system offers a seamless user experience that caters to the needs of vehicle owners and service providers, ensuring their vehicles are well-maintained and their data is easily accessible.

## Table of Contents

* [Description](#description)
* [Acceptance Criteria](#acceptance-criteria)
* [Screenshot](#screenshot)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributors](#contributors)
* [Questions](#questions)

## Acceptance Criteria

```
GIVEN a full stack web application that controls car servicing and log books.
WHEN I open the site to the main homepage.
THEN I am presented with a page that gives me the option to log in or create a new User.
WHEN I create a new User I am asked for sign up details to create my account.
THEN I am logged into a page where I can add a Car to my account.
WHEN I create a new car I am asked for basic details about the car.
THEN That car is added to my list of cars, now I can either create a new car or request a job from the workshop.
WHEN I request a job with a workshop I can choose a type of job between 'Service & Inspection' or 'Repairs' and what time and date I would like it to be.
THEN My Job request is sent to the Workshop admins who can assign a Technician to the job.
WHEN A Technician has worked on a car they will create a service report for the car, describing what has been done or what could be done.
THEN That service will be attached to my car for later viewing
WHEN I return to my account dashboard
THEN I can see my Car(s)
WHEN I select a Car
THEN I can view all previous service reports attached to that car 
```

## Work Description

For this Project we utilised Node.js, Express.js, Handlebars and mySQL to create a functional and adaptable website that utilises back end functionality and database to retain user security and information. We used Tailwind for page layout and styling. For the project we split the jobs into 5 parts and all worked on one each for the final website.

Models for all website data
User profile homepage
Workshop homepage
Technician homepage
Initial homepage for login / signup
A major challenge we faced during this project included a deciding a final structure for our project, this influenced our models and how our pages would be set up. We initially over complicated our idea but by discussing ideas and goals as a group we simplified our end product and came up with a workable view of how the project should take shape. At different points we all had our own minor issues but as a group or with guidance we were able to eliminate any potential lager issues.

Our major success with this project has been working as a team and all doing our part and helping each other when one of us had a problem. Our communication was good and if something required attention everyone was quick to address the problem in a orderly manner and inform everyone else of the change and the problem it addresses.

## Made With

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![JQuery](https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
![Google](https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white)
![Heroku](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)

## Screenshot

![Mechanomicon](./home)
![Mechanomicon](./login)
![Mechanomicon](./dashboard)

## Installation

No dependencies are required to use this page.

## Usage

This project is deployed using Heroku [here](https://mechanomicon.herokuapp.com/).

You can create an account and add personal vehicles to your account and then request service jobs and later view all previous work performed on the selected car.

If you want to test out the admin features of the page, log in as admin@mechanomicon.com with password admin123.

## License

The license used for this project is \
[MIT](https://opensource.org/licenses/MIT)

## Contributors

This project would not have been possible without the hard work and dedication of our team members. We would like to extend a special thank you to each of the following contributors:

* [Craig Roberts](https://github.com/craigrobertsdev/)
* [Shae Thompson](https://github.com/shae-thompson)
* [Gary Gao](https://github.com/Mid30s)
* [Pipat Samapuak](https://github.com/PipatSamapuak)
* [Lucien Haines](https://github.com/Lucienpep)

Each member brought their unique skills and expertise to the table, and together we were able to create a truly exceptional project. Thank you all for your contributions!

## Questions

If you have any questions or feedback, please feel free to open an issue or reach out to us directly. We're always here to help!

[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:craig.roberts11@outlook.com)
[![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/craigrobertsdev/)

&copy; 2023 Mechanomicon. All rights reserved.
