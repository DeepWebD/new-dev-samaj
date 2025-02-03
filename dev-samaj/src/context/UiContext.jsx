/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const initialUiState = {
  showCard: false,
  isResponsiveNavOpen: false,
  path: "",
};
// Create the context
const UiContext = createContext();

// Create a custom hook to access the context
export const useUiContext = () => useContext(UiContext);

// Create a provider component
const UiContextProvider = ({ children }) => {
  const [uiState, setUiState] = useState(initialUiState);
  const [showCard, setShowCard] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  // Define any other state or functions you need

  const setCardVisibility = (isVisible) => {
    setShowCard(isVisible);
  };

  const setResponsiveCardVisibility = (isOpen) => {
    setIsOpen(isOpen);
  };

  const setUiStateHandler = (uiStateArgs) => {
    setUiState(uiStateArgs);
  };

  return (
    <UiContext.Provider
      value={{
        showCard,
        setShowCard: setCardVisibility,
        isOpen,
        setIsOpen: setResponsiveCardVisibility,
        uiState,
        setUiState: setUiStateHandler,
      }}
    >
      {children}
    </UiContext.Provider>
  );
};

export default UiContextProvider;
