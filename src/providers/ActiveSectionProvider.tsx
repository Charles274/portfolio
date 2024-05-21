import React, { createContext, useEffect, useState } from "react";

import { ReactNode } from "react";

type ContextProviderProps = {
  children: ReactNode;
};

type ContextProviderValues = {
  currentSection?: string;
  setCurrentSection?: () => void;
};
// Create the context with a default value of null
const ActiveSectionContext = createContext<ContextProviderValues | null>(null);

// Provider component
const ActiveSectionProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  // Declare initial state for current active section
  const [currentSection, setCurrentSection] = useState<
    ContextProviderValues | any
  >(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const isVisible =
          rect.top < 0.3 * window.innerHeight && rect.bottom >= 0;
        if (isVisible) {
          setCurrentSection(section.id);
        }
      });
    };

    // Add scroll event listener on component mount
    document.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Return the Provider with currentSection value provided to the context
  return (
    <ActiveSectionContext.Provider value={{ currentSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
};

export { ActiveSectionProvider, ActiveSectionContext };
