import React from 'react'

export function createContext<T extends object | null>(rootComponentName: string, defaultContext?: T) {
  const Context = React.createContext<T | undefined>(defaultContext)

  function Provider(props: T & { children: React.ReactNode }) {
    const { children, ...context } = props
    // Only re-memoize when prop values change
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return <Context.Provider value={context as T}>{children}</Context.Provider>
  }

  function useContext(consumerName: string) {
    const context = React.useContext(Context)
    if (context) return context
    if (defaultContext !== undefined) return defaultContext
    // if a defaultContext wasn't specified, it's a required context.
    throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``)
  }

  Provider.displayName = rootComponentName + 'Provider'
  return [Provider, useContext] as const
}
