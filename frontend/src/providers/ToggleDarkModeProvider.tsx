// createContext.ts
import { createContext, ReactNode, useState } from "react";

interface ContextProviderProps {
  children: ReactNode;
}

interface ContextType {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const ThemeContext = createContext<ContextType | null>(null);

// Then, create a provider component:

// ThemeProvider.tsx

const ThemeProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
