# 🍽️ Eatoo – Meal Ordering Web Application

**Eatoo** is a full-stack meal ordering web application built with the MERN stack (MongoDB, Express.js, Node.js, Next.js). It allows users to browse meals, place orders, and manage their profile, while providing admins with powerful tools to manage meals, track orders, and monitor system activity.

## 🚀 Live Website

🔗 [https://eatoo-ten.vercel.app/](https://eatoo-ten.vercel.app/)

## 📂 GitHub Repository

🔗 [https://github.com/robinahmed12/Eatoo](https://github.com/robinahmed12/Eatoo)

---

## ✨ Features

### ✅ User Features:
- Browse meals with images and descriptions
- View meal details with nutritional info
- Secure login and registration
- Role-based protected routes
- Order meals and view history (upcoming)
- User profile and dashboard

### 🧑‍💼 Admin Features:
- Create, edit, and delete meals
- Manage all orders (upcoming)
- Monitor analytics and feedback (upcoming)
- Role-based dashboard with restricted access

### 🔐 Authentication:
- NextAuth.js (Credential Provider)
- JWT for protected routes
- Role-based access control

---

## 📦 Tech Stack

| Tech             | Description                                |
|------------------|--------------------------------------------|
| **Next.js**      | Full-stack React Framework                 |
| **React**        | Frontend UI Library                        |
| **Tailwind CSS** | Styling and responsive layout              |
| **MongoDB**      | NoSQL Database (MongoDB Atlas)            |
| **Express.js**   | Backend Framework                          |
| **Node.js**      | JavaScript Runtime                         |
| **NextAuth.js**  | Authentication                             |
| **JWT**          | Secure API authentication                  |
| **Cloudinary**   | Image uploads                              |
| **Stripe**       | Payment integration (planned)              |
| **SSLCommerz**   | Payment gateway for Bangladesh (planned)   |

---

## 📌 Planned Features

- 🧾 Order tracking system  
- 💳 SSLCommerz & Stripe payment support  
- 📈 Admin analytics dashboard  
- 📬 Email notifications (e.g., order confirmation)  
- 🛡️ Backend validation and security hardening  

---

## ⚙️ Installation & Development

```bash
# Clone the repo
git clone https://github.com/robinahmed12/Eatoo.git
cd Eatoo

# Install dependencies
npm install

# Create your .env.local file and add your credentials
cp .env.example .env.local

# Run the development server
npm run dev
🔐 Environment Variables
Add the following to your .env.local file:

env
Copy
Edit
MONGODB_URI=your_mongodb_uri
NEXTAUTH_SECRET=your_auth_secret
NEXTAUTH_URL=http://localhost:3000
🤝 Contributing
Feel free to fork this repo, suggest new features, report bugs, or open pull requests. All contributions are welcome!

📄 License
This project is open source and available under the MIT License.

🙌 Acknowledgements
Thanks to the amazing open-source community and tools like:

Vercel

MongoDB Atlas

Tailwind CSS

Next.js

Cloudinary

Made with ❤️ by @robinahmed12

yaml
Copy
Edit

---

Let me know if you'd like me to include screenshots or a usage walkthrough section too!
