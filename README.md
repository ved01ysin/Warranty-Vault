# 🛡️ Warranty Vault

**ASSET MANAGEMENT WITHOUT THE CHAOS**

Warranty Vault is a premium full-stack solution designed to transform scattered receipts and forgotten warranties into a seamless, automated tracking system. Built for clarity, speed, and peace of mind, it serves as a secure digital vault for all your valuable purchase data.

---

## 📺 Project Demonstrations

Experience the full power of Warranty Vault through our video walkthroughs:

*   **[Project Overview & Landing Page](https://drive.google.com/file/d/1DUpr4EOMq6TGjcbi30Xu9ta7AV6Tsy6Q/view?usp=drivesdk)**
*   **[Dashboard & Asset Management](https://drive.google.com/file/d/1E0lSwzF8YPPpEdeecNtB1C5CeVdmL8pE/view?usp=drivesdk)**
*   **[Notifications & System Features](https://drive.google.com/file/d/1wiaLE_kLws7hQBYosyvutKkktpXS75yA/view?usp=drivesdk)**

---

## ✨ Core Features

- **🚀 Modern Dashboard**: Get an instant bird's-eye view of your total assets, total value, and upcoming warranty expirations.
- **📑 Digital Invoice Storage**: Securely upload and store PDFs or images of your original purchase receipts. Say goodbye to the physical filing cabinet.
- **🔔 Smart Expiry Alerts**: Receive proactive notifications via email and the in-app dashboard before warranties expire.
- **🛠️ Maintenance Logs**: Track the complete service history and repair costs for all your assets over their lifetime.
- **🔐 Secure Authentication**: Robust security using JWT (JSON Web Tokens) and bcrypt for password hashing to protect your personal data.
- **🎭 Fluid UI/UX**: A premium dark-mode aesthetic built with Tailwind CSS and Framer Motion for smooth, interactive micro-animations.

---

## 💻 Technology Stack

### Frontend
- **React (Vite)**: For a lightning-fast development experience and optimized builds.
- **Tailwind CSS**: Custom, modern styling for a premium feel.
- **Framer Motion**: For high-quality UI animations.
- **Lucide React**: For clean, modern iconography.

### Backend
- **Node.js & Express**: A scalable and fast RESTful API.
- **MongoDB & Mongoose**: Flexible NoSQL database for diverse asset data.
- **Multer**: For secure file handling and receipt uploads.
- **Node-cron**: For automated, daily warranty status checks.
- **Nodemailer**: For automated email notification triggers.

---

## 🛠️ Installation & Setup

### Prerequisites
- Node.js installed
- MongoDB installed or a MongoDB Atlas URI

### 1. Clone the Repository
```bash
git clone https://github.com/divysaxena24/Warranty-Vault.git
cd Warranty-Vault
```

### 2. Backend Setup
```bash
cd server
npm install
```
Create a `.env` file in the `server` directory and add:
```env
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
```
Start the server:
```bash
npm run dev
```

### 3. Frontend Setup
```bash
cd ../client
npm install
npm run dev
```

---

## 🛡️ License

This project is licensed under the ISC License.

---

*Built with ❤️ to solve the chaos of asset management.*
