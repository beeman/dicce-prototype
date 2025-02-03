import React, { ReactNode } from 'react'
import { AppConfig } from './app-config'

const AppConfigContext = React.createContext<AppConfig>({} as AppConfig)

export function AppConfigProvider(props: { children: ReactNode; config: AppConfig }) {
  return <AppConfigContext.Provider value={props.config}>{props.children}</AppConfigContext.Provider>
}

export function useAppConfig() {
  return React.useContext(AppConfigContext)
}
