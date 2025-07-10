# 🧮 React Calculator App

A simple calculator built using **React** and **Bootstrap**. This project was developed in class to learn React component design, state management, and user interaction.

---

## 🛠️ Overview

The calculator has basic arithmetic functionality (`+`, `-`, `*`, `/`, `%`), handles decimals, clears input (`C`), and prevents division by zero.

---

## 🧱 Structure & Components

- **App.jsx**: Root component that renders the `Calculator`.
- **Calculator.jsx**: Main logic and UI layout. Manages state and handles user input.
- **Display.jsx**: Stateless component that shows the current display value.
- **Keyboard.jsx**: Renders all calculator buttons and passes values to the handler function.

---

## ⚙️ Logic Summary

- **States:**
  - `display`: Current screen value.
  - `previousValue`: Stored number before an operation.
  - `operation`: Current selected operation.

- **Functions:**
  - `click(input)`: Central handler for all button inputs.
    - Digits: Appends to display.
    - `C`: Clears display and state.
    - `.`: Adds decimal if not already present.
    - `%`: Converts display to a percentage.
    - Operators (`+`, `-`, `*`, `/`): Stores `previousValue` and `operation`, resets display.
    - `=`: Calculates result using stored values.
  - `calcular()`: Performs the actual arithmetic and updates the display.

---

## 💡 How It Works

Example:
1. Press `8` → `display = "8"`
2. Press `+` → `previousValue = 8`, `operation = "+"`, `display = "0"`
3. Press `2`, then `=` → Result is `10`

---

## 📦 Installation

```bash
git clone https://github.com/your-username/react-calculator.git
cd react-calculator
npm install
npm run dev
