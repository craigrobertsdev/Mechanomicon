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

## Description

To create Mechanomicon, we used the latest technologies and frameworks. The platform's back-end runs on Node.js, a popular JavaScript runtime that provides efficient and scalable server-side applications. We utilized the Express.js framework for routing and handling HTTP requests, while Sequelize ORM connected to the MySQL database for smooth and reliable data storage. On the front-end, we utilized Handlebars.js for dynamic HTML generation and Tailwind CSS for a responsive and visually appealing user interface. We also integrated Passport.js, a flexible authentication middleware, for secure user authentication with Google accounts.

The development process presented several challenges, including creating a user-friendly interface for vehicle information input and updates, making the platform responsive and visually appealing across different devices, and integrating third-party authentication securely. However, we overcame these challenges by researching best practices and refining our UI, optimizing the code, and carefully planning the integration of Passport.js and Google Sign-In.

The Mechanomicon project provided valuable insights and expanded our skill sets in various areas. We learned how to effectively manage and manipulate data with Sequelize ORM and MySQL, create dynamic web applications with Handlebars.js and Tailwind CSS, and implement secure user authentication systems.

In conclusion, Mechanomicon is a state-of-the-art vehicle management platform that leverages modern technologies to provide a comprehensive and user-friendly solution for vehicle management. By overcoming challenges in UI design, responsiveness, and third-party authentication, we have developed a platform that addresses the pain points of vehicle owners and fleet managers while providing a secure and seamless experience. Our journey with Mechanomicon has been a valuable learning experience, and we look forward to continuing to refine and expand the platform, incorporating new features and ensuring its continued success as a revolutionary vehicle management solution.

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
