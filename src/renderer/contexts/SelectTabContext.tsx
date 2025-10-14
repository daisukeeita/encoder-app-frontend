import React, { Context, createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

type SelectTabType = {
  selectedTab    : string;
  setSelectedTab : Dispatch<SetStateAction<string>>;
}

type Properties = { children : ReactNode }

export const SelectTabContext : Context<SelectTabType> = createContext<SelectTabType>({} as SelectTabType);

export const SelectTabContextProvider = ( {children} : Properties ) => {
  const [selectedTab, setSelectedTab] = useState("dashboard_component");

  const context: SelectTabType = {
    setSelectedTab, selectedTab
  }
  
  return (
    <SelectTabContext value={context}>
      {children}
    </SelectTabContext>
  )
}