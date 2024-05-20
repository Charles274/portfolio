// ActiveSectionContext.tsx
import React, { createContext, useState } from "react";

// Define the shape of the context state
export interface ActiveContextState {
  activeSection: string | null;
  setActiveSection: (activeSection: string | null) => void;
  handleEnter: (args, params: string) => void;
  handleExit: (args) => void;
}

// Create the context with a default value of null
const ActiveSectionContext = createContext<ActiveContextState | null>(null);

// Provider component
const ActiveSectionProvider: React.FC = ({ children }) => {
  //Declare Initial State
  const [activeSection, setActiveSection] = useState<string | null>(null);

  //Handlers for entering and exiting sections
  const handleEnter = (args, params: string): void => {
    console.log({ args, params });
    setActiveSection(params);
  };

  const handleExit = (args) => {
    console.log(args.value);
    setActiveSection(null);
  };

  //Return JSX & Provider
  return (
    <ActiveSectionContext.Provider
      value={{ activeSection, setActiveSection, handleEnter, handleExit }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
};

export { ActiveSectionProvider, ActiveSectionContext };
