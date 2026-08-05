# 🚗 Driver Drowsiness Detection System

## 📌 Project Overview

The Driver Drowsiness Detection System is a real-time web application developed to detect driver fatigue using computer vision. The system continuously monitors the driver's eye movements through a webcam and alerts the driver when signs of drowsiness are detected.

This project helps improve road safety by reducing accidents caused by driver fatigue.

---

## 🎯 Objective

The objective of this project is to detect driver drowsiness in real time and provide immediate audio and visual alerts to keep the driver alert and safe.

---

## 🚀 Features

- Real-time face detection
- Eye movement tracking
- Detects Active, Drowsy, and Sleeping states
- Audio warning alarm
- Visual status indicator
- Webcam-based monitoring
- User-friendly interface

---

## 🛠️ Technologies Used

- React
- TypeScript
- Vite
- MediaPipe Face Mesh
- HTML5
- CSS3
- JavaScript

---

## 📚 Libraries Used

- React
- TypeScript
- Vite
- MediaPipe Face Mesh
- Tailwind CSS

---

## ⚙️ Project Workflow

1. Launch the application.
2. Allow webcam access.
3. Detect the driver's face.
4. Track eye landmarks using MediaPipe Face Mesh.
5. Monitor eye openness continuously.
6. Identify the driver's state:
   - Active
   - Drowsy
   - Sleeping
7. Trigger an audio and visual alert when drowsiness is detected.

---

## 📊 Driver States

### 🟢 Active
- Eyes are open
- Driver is alert

### 🟡 Drowsy
- Eyes are partially closed
- Warning beep is activated

### 🔴 Sleeping
- Eyes remain closed
- Red warning displayed
- Loud alarm activated

---

## 📁 Project Structure

```
Driver-Drowsiness-Detection/
│
├── src/
├── package.json
├── package-lock.json
├── vite.config.ts
├── tsconfig.json
├── index.html
└── README.md
```

---

## ▶️ Installation

Clone the repository

```bash
git clone https://github.com/yourusername/Driver-Drowsiness-Detection.git
```

Move to the project folder

```bash
cd Driver-Drowsiness-Detection
```

Install dependencies

```bash
npm install
```

Run the application

```bash
npm run dev
```

Open your browser and visit:

```
http://localhost:5173
```

Allow camera access and click **Start**.

---

## 💻 Expected Output

- Real-time webcam monitoring
- Driver status displayed as:
  - Active
  - Drowsy
  - Sleeping
- Audio alarm when drowsiness is detected

---

## 🚀 Future Enhancements

- Mobile application support
- Yawning detection
- Head pose estimation
- AI-based fatigue prediction
- Emergency notification system
- Cloud monitoring

---

## 👩‍💻 Author

**B. Mounika**

Bachelor of Engineering (Artificial Intelligence and Machine Learning)

---

## ⭐ Acknowledgements

- MediaPipe
- React
- TypeScript
- Vite
