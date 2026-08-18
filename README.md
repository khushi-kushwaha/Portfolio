# Portfolio – React + Vite + Tailwind + EmailJS

This project is a **personal portfolio** built with **React (Vite) + Tailwind CSS** on the frontend  and **EmailJS**.  
It includes  **dotenv** for environment variables.

---

## 🚀 Tech Stack

**Frontend**
- React + Vite
- Tailwind CSS (v4)
- lucide-react (icons)
- EmailJS (@emailjs/browser)

Infrastructure
- Vercel (deploy & hosting)


## 📁 Project Structure

```bash
├─ frontend/ # Vite/React/Tailwind app
│ ├─ src/ #All components
│ ├─ index.html
│ └─ .env.local # VITE_API_URL and emailJS
```

## 🔧 Setup

 **Frontend environment variables (frontend/.env.local)**

# EmailJS (public by design, but keep them in .env for cleanliness)
```bash
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxx
```

Usage in code:
```bash
const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
```

**▶️ Running locally**
Frontend
cd frontend
npm install
npm run dev
Visit: http://localhost:5173

## Credits: 

Icons made by [Flaticon](https://www.flaticon.com/).


