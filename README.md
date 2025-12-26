# 👀 Cute Login Characters

An interactive login page where three cute characters follow your cursor with smooth 360° eye movement.  
When you start typing your password, they politely “look away” with a side‑eye and a casual expression for a fun, privacy‑friendly UX.

---

## 🌟 Demo

**Live Demo:** https://kishore0786k.github.io/cute-login-characters/

---

## 🎯 Project Idea

I wanted to turn a simple login page into a playful micro‑interaction:

- Bring characters to life using **pure HTML, CSS and vanilla JavaScript**
- Use **math + DOM** to make their eyes track the mouse accurately
- Add a **privacy behavior** – when the user types the password, the characters stop tracking and look away cutely

This is a small project, but it reflects how much I enjoy polishing UI details and creating delightful user experiences.

---

## ✨ Features

- 🟡 **Three animated characters** with different colors and subtle float animation  
- 👁️ **360° eye tracking** – pupils follow the cursor, constrained inside the eyes  
- 🔒 **Privacy mode** – while typing password:
  - Eyes stop following the cursor
  - All characters look to the side (away from the password field)
  - Mouth changes to a casual “ignoring” / smirk expression  
- 💻 **Glassmorphism login form** (rounded, blurred background inputs & button)  
- 📱 **Responsive layout** – works on desktop and smaller screens  

---

## 🧰 Tech Stack

- **HTML5** – structure  
- **CSS3** – layout, gradients, glassmorphism, animations  
- **Vanilla JavaScript** – cursor tracking, state handling (normal vs privacy mode), DOM updates  
- No frameworks, no libraries – everything coded by hand.

---

## 🧠 How the eye tracking works

1. For each eye, I get its center position using `getBoundingClientRect()`.
2. On every `mousemove`:
   - Calculate the vector from eye center to the cursor.
   - Use `Math.atan2(dy, dx)` to find the angle.
   - Convert it into a small `(x, y)` offset.
3. Move the pupil inside the eye with a constrained translation so it never leaves the white part.

When the password field has text, the mouse tracking is disabled and a fixed side‑eye offset is applied instead.

---

## 🚀 Getting Started

You can run this project locally in a few seconds.

### 1. Clone the repository
git clone https://github.com/kishore0786k/cute-login-characters.git
cd cute-login-characters

### 2. Open in browser

Just open `index.html` in your browser:

- Double‑click `index.html` **or**
- Use Live Server / any static server if you prefer

No build step required.

---

## 📁 Project Structure

.
├── index.html # Main page with embedded styles & script
└── (optional) style.css / script.js if you split them

---

## 💡 What I Learned / Practiced

- Using **trigonometry (`Math.atan2`)** for smooth, realistic eye tracking  
- Designing **micro‑interactions** that support UX (privacy) and add personality  
- Writing clean, small **vanilla JS** without frameworks  
- Tweaking **CSS transitions and transforms** to make motion feel natural  
- Focusing on **tiny visual details** that make a simple page memorable

---

## 📬 Feedback

If you have ideas to make the characters even more expressive (blinking, different emotions, etc.), feel free to open an issue or drop a suggestion.

---

## 📄 License

This project is open‑sourced under the **MIT License**.  
Feel free to learn from it, fork it, or adapt it in your own projects.

After saving:
git add README.md
git commit -m "Add project README"
git push


