'use client';

import React, { Dispatch, PropsWithChildren, SetStateAction, createContext, useState } from 'react';

interface IGrolbalContext {
  accessToken?: string;
  setAccessToken?: Dispatch<SetStateAction<string>>;
}
export const GlobalContext = createContext<IGrolbalContext>({});

export default function ContextProvider(props: PropsWithChildren<any>) {
  const [accessToken, setAccessToken] = useState('');
  const value = {
    accessToken,
    setAccessToken,
  };
  return <GlobalContext.Provider value={value}>{props.children}</GlobalContext.Provider>;
}
