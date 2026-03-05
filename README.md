# 🚀 DSA Roadmap & Progress Tracker

A premium, high-performance Data Structures and Algorithms tracking application designed to help you master 200+ curated LeetCode questions. Featuring a distraction-free dark-mode aesthetic, gamified progression, and seamless cross-device cloud sync.

## ✨ Core Features

- **200+ Curated Questions**: A balanced, hand-picked set of problems covering 14 core DSA topics (Arrays to Dynamic Programming).
- **Gamified Character Evolution**: As you solve problems, your profile automatically levels up through 5 visually stunning stages: _Early Human → Human → Pro → Hacker → God_.
- **Streak & Consistency Tracking**: A daily fire streak (`🔥`) algorithm keeps track of your consecutive days of solving problems to keep you motivated.
- **Smart Progress Tracking**: Real-time progress bars, completion status syncing, and visual success states (completed cards turn solid green/blue).
- **Advanced Authentication System**: Powered by Supabase. Features password recovery, email validation, and **Tab-Isolated Session Storage** (you can securely log into different accounts on different browser tabs simultaneously).
- **Profile Customization**: Users can upload, crop, and delete custom avatar photos securely via Supabase Storage buckets.
- **Integrated To-Do List**: Manage your study schedule and daily tasks directly within the roadmap dashboard.
- **Premium Glassmorphism UI**: Built with a sleek, dark aesthetic. Features snappy 80ms transitions, tactile press effects, custom in-app modals, and hardware-accelerated micro-animations.
- **Mobile-First Responsive Design**: 100% optimized for mobile devices with thoughtfully stacked flex rows and touch-friendly tap targets.

## 🛠 Tech Stack

- **Frontend**: React + Vite
- **Backend / Authentication**: Supabase (Auth & Row Level Security)
- **Database & Storage**: Supabase PostgreSQL & Supabase Storage (Avatars)
- **Styling**: Vanilla CSS (Custom Variable-driven Design System)
- **Hosting**: Deployed on Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- A Supabase Project

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd dsa-project
   ```

2. **Database Configuration**
   - Create a new project in Supabase.
   - Run the SQL commands found in `database/schema.sql` in your Supabase SQL Editor to generate the necessary tables (`user_progress`, `profiles`).
   - Create a public Storage bucket named `avatars` with `INSERT` and `SELECT` policies enabled.
   - Update `frontend/src/supabaseClient.js` with your project URL and Anon Public Key.

3. **Frontend Setup & Run**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

## 📂 Project Structure

- `/frontend`: Main React application source code, UI components, and authentication logic.
- `/database`: SQL schema and RLS policies for setting up the Supabase backend.
- `/public`: Static assets, SVGs, and the 5 Gamified Stage character sprites.

## 🤝 Contribution

Feel free to fork this project and submit PRs for any improvements, additional questions, or new features!

---

_Architected and developed by Adidam Akshay Bhaskar._
