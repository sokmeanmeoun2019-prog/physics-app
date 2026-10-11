# ⚛️ @MeanWIS Physics Learning Hub

A modern, interactive Physics formula companion and learning web app designed for **Grade 9** and **Grade 12** curricula. Complete with formulas, definitions, step-by-step worked examples, flashcards, quizzes, interactive simulations, and practice worksheets.

---

## 🌟 Features

- **Grade 9 Physics (5 Chapters):**
  - Chapter 1: Turning Effect of Force (Moments, Resultant Forces, Levers)
  - Chapter 2: Simple Machines (Pulleys, Inclined Plane, Gears, Wheel & Axle)
  - Chapter 3: Electricity (Ohm's Law, Circuit Formulas, Electric Power, Domestic Wiring)
  - Chapter 4: Magnetism (Magnetic Fields, Solenoids, Wire Deflection)
  - Chapter 5: Light (Reflection, Refraction, Snell's Law, Pinhole Camera, Mirrors)

- **Grade 12 Physics (10 Chapters):**
  - Chapter 1: Molecular Kinetic Theory of Gases (Ideal Gas Laws, Molecular Speed)
  - Chapter 2: Thermodynamics (First Law, Thermodynamic Processes, Heat Capacities)
  - Chapter 3: Heat Engines (Carnot Engine, Thermal Efficiency, Heat Reservoirs)
  - Chapter 4: Mechanical Waves (Wave Speed, Frequency, Sound Velocity)
  - Chapter 5: Interference & Diffraction (Young's Double-Slit, Single-Slit Diffraction)
  - Chapter 6: Standing Waves (Nodes, Antinodes, Resonance in Strings & Pipes)
  - Chapter 7: Electromagnetism & Self-Induction (Biot-Savart, Lorentz Force, Cyclotron, RL Circuits)
  - Chapter 8: Alternating Current (AC Waveforms, RMS Values, RLC Series Impedance, Transformers)
  - Chapter 9: Electronics & Semiconductors (P-N Junction, Transistors, Current Gain)
  - Chapter 10: Modern & Atomic Physics (Thomson e/m, Photoelectric Effect, Bohr Atom, Relativity)

- **Every Chapter Includes 6 Dedicated Learning Sections:**
  1. 📖 **Summary:** Core concepts, SVG vector diagrams, full definitions with SI units, and step-by-step worked numerical examples.
  2. 📐 **Equations:** Comprehensive formula cards with symbols breakdown and SI units.
  3. 🗂️ **Flashcards:** Interactive front/back flipping flashcards with question and formula answer.
  4. 🧠 **Quiz:** Multiple-choice quiz with immediate feedback and scoring.
  5. 📄 **Worksheet:** Downloadable practice PDF worksheets for every chapter.
  6. 🎮 **Game:** Interactive simulations and PhET/Gemini games.
  7. 🤖 **AI Tutor:** Integrated Gemini AI physics assistant to answer student questions.

---

## 📁 Project Structure

```text
Summarize formula_web/
├── index.html          # Main application page
├── styles.css          # Styling & modern UI theme
├── app.js              # Core application logic & complete physics data
├── games.json          # Interactive simulation & game links
├── worksheets.json     # PDF worksheet configuration
├── .gitignore          # Git ignore configuration
├── worksheets/         # PDF practice worksheets (15 chapters)
│   ├── g9-ch1-worksheet.pdf ... g9-ch5-worksheet.pdf
│   └── g12-ch1-worksheet.pdf ... g12-ch10-worksheet.pdf
└── images/             # Vector diagrams & figures
```

---

## 🚀 How to Run Locally

You can run this project directly by opening `index.html` in any web browser:
1. Double-click `index.html` or open it with your browser (Chrome, Edge, Firefox, Safari).
2. Or use a local web server (e.g. VS Code Live Server, Python `python -m http.server 8000`).

---

## 🌐 Deploy to GitHub Pages

1. Push this repository to GitHub.
2. In your repository, go to **Settings** > **Pages**.
3. Under **Build and deployment**, select **Source: Deploy from a branch**.
4. Choose the `main` branch and `/ (root)` folder, then click **Save**.
5. Your website will be live in seconds!
