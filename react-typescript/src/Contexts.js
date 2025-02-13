import { title } from 'process';
import { createContext } from 'react';
import React, { createContext, useContext, useState } from 'react';

export const ThemeContext = createContext('light');
export const MyCouter = createContext(0);

const DataContexts = createContext();
export default DataContexts




