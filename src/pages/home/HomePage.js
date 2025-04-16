// src/HomePage.jsx
import React from "react";
import { HeroSection } from "./components/HeroSection";
import { ConvertToOrganicSection } from "./components/ConvertToOrganicSection";
import { Faqs } from "./components/Faqs";
import { ChatBot } from "./components/ChatBot";

export const HomePage = () => {
  return (
    <>
      <HeroSection />
      <main>
        <div>
          <ConvertToOrganicSection />
          <Faqs />
        </div>
      </main>
      <ChatBot /> 
    </>
  );
};
