export const codeExamples = {
  "App.jsx": `import { useState } from "react";
import { CodeFlow } from "@codeflow/ai";

function App() {
  const [code, setCode] = useState("");

  const handleAICompletion = async () => {
    const suggestion = await CodeFlow.complete(code);
    setCode(suggestion);
  };

  return (
    <div className="app">
      <CodeEditor 
        onChange={setCode} 
        onAI={handleAICompletion} 
      />
    </div>
  );
  
}`,
"Hero.jsx": `import React from 'react';

 <section className="hero-section">
      <div className="hero-content">
        <h1>
          <span className="highlight">CodeFlow AI</span> <br />
          <span className="subtitle">Intelligent Code. Instantly.</span>
        </h1>
        <p className="tagline">
          Let AI write, refactor, and explain your code — so you can focus on building.
        </p>
        <div className="cta-group">
          <button className="cta-primary">Start Coding Free</button>
          <button className="cta-secondary">Watch Demo →</button>
        </div>
      </div>


  }`,
  "Navbar.jsx": `import { useState } from "react";
import { CodeFlow } from "@codeflow/ai";

import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/logo.svg" alt="CodeFlow" />
      </div>
      <ul className="nav-links">
        <li><a href="#features">Features</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
  );

  `}
  export const floatingCards = {
  "App.jsx": {
    bgColor: "bg-blue-500/20",
    iconColor: "text-blue-400",
    textColor: "text-blue-200",
    contentColor: "text-blue-300",
    icon: "AI",
    title: "Smart Completion",
    content: "AI-powered code suggestions in real-time",
  },
  "Hero.jsx": {
    bgColor: "bg-purple-500/20",
    iconColor: "text-purple-400",
    textColor: "text-purple-200",
    contentColor: "text-purple-300",
    icon: "⚡",
    title: "Auto Animation",
    content: "Dynamic typing effects generated automatically",
  },
  "Navbar.jsx": {
    bgColor: "bg-emerald-500/20",
    iconColor: "text-emerald-400",
    textColor: "text-emerald-200",
    contentColor: "text-emerald-300",
    icon: "🔍",
    title: "Smart Search",
    content: "Intelligent code search across your project",
  },
};
  