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


## 🗒️ Specifications / Requirements

### Frontend
- **Framework:** React.js
- **UI Library:** Material UI (MUI)
- **Key Components:**
  - **Contact Form:** Includes fields for first name, last name, email, phone number, company, and job title.
  - **Contacts Table:**
    - Displays all contacts.
    - Includes action buttons for editing and deleting.

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
- **Choice:** MongoDB Compass
- **Reasoning:** MongoDB’s flexibility with schema-less document storage is ideal for a feature like Contact Management, where the structure of stored data may evolve.

---


## 💻 Setup Instructions

### Prerequisites
- **Node.js** and **npm** installed.
- MongoDB server running locally or via a cloud service like MongoDB Atlas.

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/Lahu19/Erino_SDE_Assignment.git
   ```
2. Install dependencies:
   ```bash
   cd Erino_SDE_Assignment
 
   ```
3. Start the backend server:
   ```bash
   cd backend
   npm i
   node Express.js
   ```
4. Start the frontend development server:
   ```bash
   cd frontend
   npm i
   npm start
   ```
5. Access the app at `http://localhost:3000`.
6. Access the API on `http://localhost:4001`.
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

Feel free to add or use this Repo ✨


