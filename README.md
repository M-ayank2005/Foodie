# Foodie

Welcome to Foodie! 

Foodie is a project designed to bring food enthusiasts together by offering a platform to explore, share, and discover new recipes and food-related content. Built primarily with JavaScript, Foodie aims to be a comprehensive resource for anyone passionate about cooking and culinary arts.

## Features

- **Recipe Sharing**: Easily share your favorite recipes with the community.
- **Recipe Discovery**: Browse and discover new recipes from other food enthusiasts.
- **User Profiles**: Create and customize your own user profile.
- **Community Interaction**: Engage with other users through comments and likes.

## Installation

To get started with Foodie, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/M-ayank2005/Foodie.git
    ```
# EmailJS Setup Instructions

This document outlines the steps to set up EmailJS for sending emails in your application.

## Step 1: Create an EmailJS Account
1. Visit [EmailJS](https://www.emailjs.com/) and sign up for an account using your email.

## Step 2: Create an Email Service
1. After logging in, navigate to the **"Email Services"** section from the dashboard.
2. Select your email provider Gmail and follow the prompts to connect your account.
3. Once connected, you will receive a **Service ID**. Make a note of this for later use.

## Step 3: Create an Email Template
1. Go to the **"Email Templates"** section in the dashboard.
2. Click on **"Create New Template"**.
3. Copy and paste the following HTML code into the email editor, replacing the recipient's email in the "To Email" field with your own:

   ```html
   <p>Hello Mayank,</p>
   <p>You have received a new Contact Request</p>
   <p>User Name: {{name}}</p>
   <p>User Email: <span style="color: #555; font-weight: bold;">{{email}}</span></p>
   <p>User Message:</p>
   <div style="padding: 12px; border-left: 4px solid #4CAF50; font-style: italic; background-color: #f9f9f9; margin: 10px 0; color: #333;">
     {{message}}
   </div>
   <p style="font-size: 14px; color: #666;">Best wishes,<br>Foodie Team</p>

## firebase setup: 
Create a firebase account with your google account .

Go to the given link and create the api key for your project.

create the .env file as specified

    ```bash
    https://console.firebase.google.com/u/0/
    ```
    
2. Navigate to the project directory:
    ```bash
    cd Foodie
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Install Email Js dependencies:
     ```bash
    npm @emailjs/browser
    ```
4. Start the development server:
    ```bash
    npm run dev
    ```

## Usage

Once the server is up and running, you can access the application by navigating to `http://localhost:3000` in your web browser. From there, you can explore recipes, create your own, and interact with other users.

## Contribution Guidelines

We welcome contributions to the Foodie project! To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch:
    ```bash
    git checkout -b my-feature-branch
    ```
3. Make your changes and commit them:
    ```bash
    git commit -m "Add new feature"
    ```
4. Push to the branch:
    ```bash
    git push origin my-feature-branch
    ```
5. Open a pull request on GitHub.

For detailed contribution guidelines, please see [CONTRIBUTING.md](CONTRIBUTING.md).

## Recent Updates

- **[c93611a](https://github.com/M-ayank2005/Foodie/commit/c93611abb5e42916cfb47f92872175add4b17c64)**: Created `contribution.md`.
- **[4805b12](https://github.com/M-ayank2005/Foodie/commit/4805b12968caf2ae1025cea466ddb9d57cc0eca1)**: Merged pull request and added `stackbit.config.ts`.
- **[ecf2bb1](https://github.com/M-ayank2005/Foodie/commit/ecf2bb1a613e2dd315188e12cf5866e56dbec69d)**: Added `stackbit.config.ts`.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries or feedback, feel free to reach out to the project maintainer:

- **Mayank Mishra**
- [GitHub Profile](https://github.com/M-ayank2005)

---

Thank you for visiting Foodie! We hope you enjoy using our platform as much as we enjoyed building it.
