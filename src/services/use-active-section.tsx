// ActiveSectionContext.tsx
import { useContext } from "react";
import {
  ActiveContextState,
  ActiveSectionContext,
} from "../providers/active-section-provider";

// Custom hook to use the context
export const useActiveSection = (): ActiveContextState => {
  const context = useContext(ActiveSectionContext);
  if (context === null) {
    throw new Error(
      "useActiveSection must be used within a ActiveSectionProvider"
    );
  }
  return context;
};
