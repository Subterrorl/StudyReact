// PhoneContext.tsx
import React, { createContext, useContext, useState } from 'react';

type PhoneData = {
  _id: number;
  title: string;
  price: number; 
  item_type_id: number | "";
};

const PhoneContext = createContext<{
  phoneData: PhoneData;
  setPhoneData: React.Dispatch<React.SetStateAction<PhoneData>>;
} | null>(null);

export const PhoneProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [phoneData, setPhoneData] = useState<PhoneData>({ _id: 0, title: '', price: 0 ,item_type_id: "",});

  return (
    <PhoneContext.Provider value={{ phoneData, setPhoneData }}>
      {children}
    </PhoneContext.Provider>
  );
};

export const usePhoneContext = () => {
  const context = useContext(PhoneContext);
  if (!context) {
    throw new Error('usePhoneContext must be used within a PhoneProvider');
  }
  return context;
};
