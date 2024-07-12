// ActiveSectionContext.tsx
import React, { createContext, useState } from "react";

// Define the shape of the context state
export interface ActiveContextState {
  activeItemId: string | null;
  setActiveItemId: (itemId: string | null) => void;
}

// Provider component
interface Props {
  children: React.ReactNode;
}

// Create the context with a default value of null
const ActiveSectionContext = createContext<ActiveContextState | null>(null);

// Provider component
const ActiveSectionProvider: React.FC<Props> = ({ children }) => {
  const [activeItemId, setActiveItemId] = useState<string | null>(null);

  return (
    <ActiveSectionContext.Provider value={{ activeItemId, setActiveItemId }}>
      {children}
    </ActiveSectionContext.Provider>
  );
};

// Custom hook to use the context

export { ActiveSectionProvider, ActiveSectionContext };
