// PhoneContext.tsx
import React, { createContext, useContext, useState } from 'react';

type PhoneData = {
  title: string;
  price: number; 
};

const PhoneContext = createContext<{
  phoneData: PhoneData;
  setPhoneData: React.Dispatch<React.SetStateAction<PhoneData>>;
} | null>(null);

export const PhoneProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [phoneData, setPhoneData] = useState<PhoneData>({ title: '', price: 0 }); // ตั้งค่าเริ่มต้น

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
