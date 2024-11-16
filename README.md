# ERINO - SDE Internship Assignment

## ⭐ Contact Management - Mini Feature of a CRM

This Contact Management feature is designed to simplify and enhance the process of managing important customer and client contact details. It includes functionality to **add**, **view**, **update**, and **delete** contact information, enabling businesses to maintain strong relationships by keeping their contact data accessible and organized.

---

## 🗒️ Overview

**Features:**
- **Add a New Contact:** Capture details like name, email, phone number, company, and job title.
- **View Contacts:** List all contacts in a sortable, paginated table for efficient browsing.
- **Edit Contact Information:** Update records with current data.
- **Delete a Contact:** Remove outdated or duplicate entries.

**Use Case Scenarios:**
- Quickly locate client details.
- Ensure data consistency by updating changes immediately.
- Clean up contact lists to stay relevant and efficient.

---

## ❗ Important Note

This assignment will be reviewed during a live coding session where additional features or modifications will be required. Ensure originality and personal effort while working on this project, as external help or automated tools could negatively impact your evaluation.

---

## 🥇 Evaluation Criteria

1. **Functionality:** Implementation of all CRUD operations.
2. **UI Consistency:** Clean, user-friendly design with MUI components.
3. **Code Quality:** Well-structured, modular, and adherent to best practices.
4. **Problem-Solving:** Demonstrated approach to designing and implementing solutions.

---

## 🗒️ Specifications / Requirements

### Frontend
- **Framework:** React.js
- **UI Library:** Material UI (MUI)
- **Key Components:**
  - **Contact Form:** Includes fields for first name, last name, email, phone number, company, and job title.
  - **Contacts Table:**
    - Displays all contacts.
    - Includes action buttons for editing and deleting.
    - Pagination and sorting for better usability.

### Backend
- **Framework:** Node.js with Express.js
- **API Endpoints:**
  - `POST /contacts` - Adds a new contact.
  - `GET /contacts` - Retrieves all contacts.
  - `PUT /contacts/:id` - Updates a specific contact.
  - `DELETE /contacts/:id` - Deletes a specific contact.
- **Error Handling:**
  - Validate required fields.
  - Handle duplicate or invalid data submissions.
  - Return meaningful error messages.

### Database
- **Choice:** MongoDB
- **Reasoning:** MongoDB’s flexibility with schema-less document storage is ideal for a feature like Contact Management, where the structure of stored data may evolve.

---

## 🚀 Project Submission

1. **Repository:** Provide a link to the GitHub repository with the complete project code.
2. **ReadMe:**
   - Setup instructions to run the project.
   - Database schema or example data.
   - Explanation of major technical decisions.
   - Challenges faced and their solutions.

---

## 💻 Setup Instructions

### Prerequisites
- **Node.js** and **npm** installed.
- MongoDB server running locally or via a cloud service like MongoDB Atlas.

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/contact-management.git
   ```
2. Install dependencies:
   ```bash
   cd contact-management
   npm install
   ```
3. Start the backend server:
   ```bash
   npm run start:server
   ```
4. Start the frontend development server:
   ```bash
   npm run start:client
   ```
5. Access the app at `http://localhost:3000`.

---

## ✨ Technical Decisions

1. **Frontend:**
   - Used MUI components for a clean, consistent UI.
   - React.js ensures a fast and interactive experience.
2. **Backend:**
   - Express.js simplifies API endpoint creation.
   - Middleware used for validation and error handling.
3. **Database:**
   - MongoDB chosen for its scalability and flexibility.
   - Mongoose for schema management.

---

## 🧗 Challenges and Solutions

1. **Challenge:** Managing state across components for seamless UI updates.
   **Solution:** Used React Context API for state management.
2. **Challenge:** Validating and handling form inputs efficiently.
   **Solution:** Used MUI’s form validation utilities and backend validation middleware.
3. **Challenge:** Implementing pagination and sorting on the frontend.
   **Solution:** Leveraged MUI Table with built-in pagination and sorting features.

---

## 🔗 Repository

[GitHub Repository](https://github.com/your-username/contact-management)

---

Happy Coding! 🚀
```
