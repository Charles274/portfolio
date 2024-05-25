// ActiveSectionContext.tsx
import { useContext } from "react";
import { ActiveSectionContext } from "../providers/ActiveSectionProvider";

// Custom hook to use the context
export const useActiveSection = () => {
  const context = useContext(ActiveSectionContext);
  if (context === undefined) {
    throw new Error(
      "useActiveSection must be used within a ActiveSectionProvider"
    );
  }
  return context;
};
