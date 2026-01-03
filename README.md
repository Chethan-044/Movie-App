<p align="center">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/Context_API-000000?style=for-the-badge&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/Hooks-useState%20%7C%20useEffect-blue?style=for-the-badge" />
  <img src="https://img.shields.io/badge/TMDB_API-01B4E4?style=for-the-badge&logo=themoviedatabase&logoColor=white" />
</p>

---

# 🎬 Movie Favorites App

---

## 🌟 Overview

The **Movie Favorites App** is a React-based web application that displays a list of popular movies fetched from the **TMDB (The Movie Database) API**.  
Users can browse movies, add them to a favorites list, remove them when needed, and view all favorite movies on a **separate favorites page**.

The project focuses on mastering **React fundamentals**, especially **Hooks** and **Context API**, to manage both local and global state efficiently without prop drilling.

#Live Demo : https://movie-app-git-main-chethan-044s-projects.vercel.app
---

## 🚀 Features

- 📃 Fetch and display popular movies from TMDB  
- ❤️ Add movies to favorites  
- ❌ Remove movies from favorites  
- ⭐ Dedicated Favorites page  
- 💾 Favorites persist using `localStorage`  
- ⚡ Built with modern React best practices  

---

## 🛠️ Technologies Used

- **React**
- **React Hooks**
  - `useState`
  - `useEffect`
- **Context API**
  - `createContext`
  - `useContext`
- **TMDB REST API**
- **CSS**
- **Git & GitHub**

---

## 📚 Concepts Learned & Implemented

### 🔹 useState
Used to manage component-level state such as movie lists and favorite movies.

### 🔹 useEffect
Used for:
- Fetching movie data from TMDB API
- Synchronizing favorites with `localStorage`

### 🔹 createContext
Used to create a global movie context that stores favorite movies and related actions.

### 🔹 useContext
Used to access global favorites state and functions across components without passing props.

---

## 🧠 Context API Logic

The global movie context provides the following functionality:

- `addToFavorites(movie)` → Adds a movie to favorites  
- `removeFromFavorites(movieId)` → Removes a movie from favorites  
- `isFavorite(movieId)` → Checks if a movie is already in favorites  

This ensures centralized and clean state management across the application.

---
