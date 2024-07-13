import React, {
  createContext,
  useEffect,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface ContextProviderProps {
  children: ReactNode;
}

interface ContextProviderValues {
  currentSection: string;
  setCurrentSection: Dispatch<SetStateAction<string>>;
}

// Create the context with a default value of undefined
const ActiveSectionContext = createContext<ContextProviderValues | undefined>(
  undefined
);

// Provider component
const ActiveSectionProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  // Declare initial state for current active section
  const [currentSection, setCurrentSection] = useState("about");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: [1, 0.5], // Trigger when 50% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSection(entry.target.id);
          console.log("Current Section: ", entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  // Return the Provider with currentSection value provided to the context
  return (
    <ActiveSectionContext.Provider
      value={{ currentSection, setCurrentSection }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
};

export { ActiveSectionProvider, ActiveSectionContext };
