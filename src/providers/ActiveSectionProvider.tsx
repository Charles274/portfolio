import React, { createContext, useEffect, useState, ReactNode } from "react";

interface ContextProviderProps {
  children: ReactNode;
}

interface ContextProviderValues {
  currentSection: string;
}

// Create the context with a default value of undefined
const ActiveSectionContext = createContext<ContextProviderValues | undefined>(
  undefined
);

// Debounce function to limit the rate at which the handleScroll function is called
const debounce = (func: () => void, wait: number) => {
  let timeout: number;
  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func();
    }, wait);
  };
};

// Provider component
const ActiveSectionProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  // Declare initial state for current active section
  const [currentSection, setCurrentSection] = useState("about");

  useEffect(() => {
    const handleScroll = debounce(() => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const isVisible =
          rect.top < 0.3 * window.innerHeight && rect.bottom >= 0;
        if (isVisible) {
          console.log("Section ID: ", section.id);
          console.log("Current Section: ", currentSection);
          setCurrentSection(section.id);
        }
      });
    }, 200); // Adjust the debounce wait time as needed

    // Add scroll event listener on component mount
    document.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [currentSection]);

  // Return the Provider with currentSection value provided to the context
  return (
    <ActiveSectionContext.Provider value={{ currentSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
};

export { ActiveSectionProvider, ActiveSectionContext };
