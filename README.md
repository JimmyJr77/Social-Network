# Social Media API Setup

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) 

![JavaScript](https://img.shields.io/badge/JavaScript-100%-yellow)

A video demonstrating functionality can be found [here](https://drive.google.com/file/d/1-LwKzfg_fWVR44r-MxqiJ1zpgGjk4mPp/view).

## Description
#### Motivation:
The proliferation of social media platforms has resulted in users seeking a streamlined, backend-focused system where they can interact without the distractions of modern frontend designs.

#### Why Build:
This API was created to provide a foundation for developers to build upon, potentially integrating machine learning models, frontends, or other systems to create a complete social media platform.

#### Problem Solved:
The API provides an organized system for user interactions, including adding and managing thoughts, reactions, and even friend connections, ensuring data integrity and smooth operations.

#### What Was Learned:
Through the development of this API, the intricacies of creating relational data in non-relational databases, error handling, and efficient querying techniques using Mongoose and MongoDB were thoroughly understood.

## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Badges](#badges)
  * [Features](#features)
  * [How to Contribute](#how-to-contribute)

## Installation Instructions
#### Step 1:
Ensure you have MongoDB and Node.js installed on your computer.

#### Step 2:
Clone this GitHub repository to your local machine using git clone.

#### Step 3:
Navigate to the root directory of the project in the terminal.

#### Step 4:
Install the required dependencies by running npm install.


## Usage
The usage of this API largely depends on the front end or application that integrates with it. Below are screenshots that demonstrate functionality using Insomnia's rest API. With this API:

![View of Insomnia: GET/read users](./Assets/images/insomnia_read_users.png)

![View of Insomnia: POST/create new reaction](./Assets/images/insomnia_create_new_reaction.png)

![View of Insomnia: DELETE/delete reaction](./Assets/images/insomnia_delete_reactions.png)

![View of Insomnia: PUT/update users](./Assets/images/insomnia_update_users.png)

#### Example 1:
Users can create, view, update, and delete their profiles.

#### Example 2:
Users can post their thoughts, view the thoughts of others, and even edit or delete their previous thoughts.

#### Example 3:
Reactions can be added to thoughts, creating an interactive environment.

#### Example 4:
A user can add friends, creating a network of connections within the platform.

#### Example 5:
A comprehensive error handling system ensures that invalid operations, such as creating users with duplicate emails or usernames, are handled gracefully.

## Credits

  * ChatGPT supported with general back and forth dialogue to better understand concepts and problem solve. 
  * Documentation was referenced for a variety of troubleshooting.

#### Tutorials Followed:

  * https://mongoosejs.com/docs/guides.html
  * https://www.mongodb.com/basics/crud
  * https://www.mongodb.com/languages/express-mongodb-rest-api-tutorial
  * https://chat.openai.com
  * https://expressjs.com/

## License
MIT License

## Badges
  * [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  * ![JavaScript](https://img.shields.io/badge/JavaScript-100%-yellow)

## Features
1. CRUD operations for users and thoughts.
2. Ability to add and remove friends.
3. Reactions can be added to thoughts, and individual reactions can also be removed.
4. The API is designed with scalability in mind, ensuring efficient database operations.
5. Error handling ensures that users receive appropriate feedback for any invalid operations.

## How to Contribute
1. Fork this repository.
2. Clone your forked repository to your machine.
3. Create a new branch on your local machine.
4. Make your changes or enhancements to the project.
5. Commit and push your changes back to your fork on GitHub.
6. Submit a pull request from your repository to the original project.
7. Your PR will be reviewed and, if no issues are found, merged into the main project.

## Questions 
If you have any questions about the content, instructions, or how to get involved in this project, please contact: 

  * Jimmy O'Brien    
    GitHub Username: [jimmyjr77](https://github.com/jimmyjr77/)    
    Email Address: jimmyjr.obrien@gmail.com    