# Games App

## Overview
**Games App** is a full‑stack project with a **Node.js/Express** backend and a **React** frontend. It supports game catalog management, user accounts, history tracking, and a shopping‑bag flow.

## Features
- **CRUD** for games, categories, users, and history
- **REST API** with structured routes, controllers, and schemas
- **UI pages** for home, lists, details, auth, personal area, and cart
- **Global state** with Redux
- **Responsive design** using Bootstrap / React‑Bootstrap

## Tech Stack
- **Backend:** Node.js, Express, MongoDB, Mongoose, CORS
- **Frontend:** React, React Router, Redux, Axios, Bootstrap, React‑Bootstrap
- **Tooling:** Nodemon, React Scripts

## Project Structure
```
backend/
  app.js
  controllers/
  route/
  schema/
frontend/my-app/
  src/
  public/
```

## How To Run
### Prerequisites
- **Node.js** 18+ (recommended)
- **MongoDB** (local or Atlas)

### Backend
```bash
cd backend
npm install
npm start
```
Set **MONGODB_URI** in your environment or update the connection string inside `backend/app.js`.

### Frontend
```bash
cd frontend/my-app
npm install
npm start
```
Update the API base URL in `frontend/my-app/src/axios` if needed.

## API Overview
Routes are grouped by feature under `backend/route`:
- **GameRouter**
- **CategoryRoute**
- **UserRoute**
- **historyRoute**

## Scripts
- **Backend:** `npm start`
- **Frontend:** `npm start`, `npm run build`, `npm test`, `npm run eject`

## Notes
- Game images live in `backend/pic`.

