# 4Life Gaming Server Website

A modern website for a GTA V FiveM roleplay gaming server with real-time Discord integration.

## Overview

This project consists of a full-stack web application that displays information about the gaming server and integrates with Discord to show messages from an info channel directly on the website.

## Features

- **Server Information**: Display server details, rules, and game information
- **Discord Integration**: Real-time display of messages from a Discord info channel
- **Responsive Design**: Modern UI built with React and Tailwind CSS
- **Multi-page Navigation**: Pages for games, server rules, and FiveM RP information

## Tech Stack

### Frontend
- **React** - UI framework
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations

### Backend
- **Node.js** - Runtime environment
- **Express** - Web server framework
- **Discord.js** - Discord API integration
- **CORS** - Cross-origin resource sharing

## Project Structure

```
4life/
├── client/          # React frontend application
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/      # Page components
│   │   └── assets/     # Static assets
│   └── package.json
└── server/          # Node.js backend server
    ├── index.js     # Express server & Discord bot
    └── package.json
```

## Discord Integration

The backend server connects to Discord as a bot and:
- Fetches the last 50 messages from the specified info channel on startup
- Listens for new messages in real-time
- Handles message deletions
- Provides an API endpoint (`/api/messages`) that returns the latest 3 messages
- The frontend polls this endpoint every 5 seconds to display updates


