# Project Overhaul
![Logo](https://github.com/sac-iterators/project_overhaul/blob/main/frontend/src/img/logo.jpg)

    What was your motivation?

        The motivation for this project is to meet CSC 190 and CSC 191 requirement. The project was inspired by our client wanting to do a complete overhaul of their preexisting website for this business. Thus the name project overhaul. The main motivation for project overhaul is to discover new technolgies, implementing a design sought out by our client, and to work for an end goal where both the developers & client are happy with the end product. 

    Why did you build this project?

        This project was developed as a need for our client wanting a redesign of their preexisting website. Our client has recently acquired this business from a previous owner. With new management and developers ready to learn new technologies, it was an ideal opportunity for both parties. 

    What problem does it solve?

        Our project resolves three issues. 
        
        The first issue both parties wanted to tackle is the overall design and look of the website. The previous website is barely functional and is not well suited for their customers to interact with. Our solution is to redesign the user interface to bring a modern look and feel for their customers to appreciate. 

        The second was addressing the need for a reservation system for our client's business. Our client was looking for a management feature where they can have their customers create reservations within our webapp. This feature utilizes the React Modal Library as well with Javascript form functionality. 

        The last issue is the menu. Our client wanted to showcase what Asian N Cajun 2 has to offer to their customers. The best way is to display their menu items through the Menu section of the webapp. The webapp pulls information from our Firebase Database to get the item prices and information with their respective menu photos. 

    What did you learn?
    
### Environment Setup/Requirements:
    NodeJS
    Visual Studio Code
    Google Firebase (backend)
    
### Download Instructions:

    Since our project is a website, you can see it running live by visiting the webpage [insert webpage link here].

    Alternatively, you can run it locally on your machine. To do so, you must install NodeJS and download the source files from this repository.
    
    While in the "frontend" folder, run 'npm install' in the terminal to install all dependenices (if it gives you errors, you may have to restart your machine and try running the command again).

    Once that is done, run 'npm start' and the webpage will load in your web browser on localhost.
    
    We use Google Firebase as our backend and database. It stores all of our menu items, images for the menu items, and reservations and is managed in our Google account.

### Team of Developers:
    Patrick Chanthilack
    Quixari Jones
    Alder Moreno
    Harjap Singh
    Ethan Luong
    Saul Chavez
    Rishi Verma

### Project Timeline: 
    Sprint 0 (08/27/2021 - 09/10/2021) - Secured our client and began draft of Product Charter Docment.

    Sprint 1 (10/04/2021 - 10/18/2021) - Completed business context diagram & business event table. Finalized Project Charter Document.

    Sprint 2 (10/18/2021 - 10/31/2021) - Created low fidelity mockups of key components of User Interface. Completed Jira board setup to manage workflow.
    
    Sprint 3 (11/01/2021 - 11/15/2021) - Created high fidelity prototype of client website. Began documentation on potential tech stack being used for project. Drafting user stories to better understand requiremnts.

    Sprint 4 (11/15/2021 - 12/01/2021) - Implemented more features to high fidelity prototype, created acceptance criterias for user stories, and presented our project to the CSC 190 class. Preparing next semester backlog for Sprint 5 for CSC 191. 

    Sprint 5 (02/07/2022 - 02/21/2022) - Finalized requirements for product. Started enviroment setup for Visual Studio. Started project with React project to initialize design layouts from high fidelity mockup. Presented progress to client and made adjustments for next sprint. 

    Sprint 6 (02/21/2022 - 03/06/2022) - Created different components & buttons for landing page. Started to connect online delivery services to buttons to redirect users to respective delivery options. Created early iteration of About & Menu page that had temporary stock images and text. Created early stages of reservation form embeded in a React Modal Component and creating user input fields. Implementing early stages of mobile responsiveness for web application. 

    Sprint 7 (03/06/22 - 03/21/2022 ) - Tied backend data base to have project read basic data from Google Firestore and output data read to an exported fire. Menu component started with test data pulled from database. Populate menu data into database & test reservation data sent to data base. 
    Revised reservation form to only allow parties of 8 or more being capped at 12. Form validation on first name, last name, email address, phone number, and total number of guests. Once all conditions are met, data is compiled and set to Firestore database. 

    Sprint 8 (03/21/22 - 04/04/2022) - Began manual testing on reservation fields to make sure data is correctly inputted into Firestore database. Finalize overall color scheme of the web app to be consistent of colors present in the business. Created a successful popup once reservation is created to let user know their reservation has been sent to the database to notify business. Work in progress and researching emailing alternatives to notify users via email provided through reservation form. 

    Created menu layout to pull data from menu collection in Firestore database. Reformated all photos provided by client to ensure they are inputted into Firestore storage to be used later when pulling menu data. Removed extras features no longer required by client. 

    Started development of admin portal where administrator can access all features within the web application. Reads, write, edit, and delete all dynamic fields tied to Firestore database that interact with frontend components. Admin is able to access the login page through a react secure router that is prompted with an authenticated email with required password. 

    Sprint 9 (04/04/2022 - 04/25/2022)
