import { createContext, useContext, useState } from "react";

export const ActiveContext = createContext<ActiveContextType | null>(null);

type ActiveContextType = {
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [active, setActive] = useState<string>("About");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return (
    <ActiveContext.Provider
      value={{
        active,
        setActive,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveContext.Provider>
  );
};

export const useActiveContext = () => {
  const context = useContext(ActiveContext);

  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }

  return context;
};
