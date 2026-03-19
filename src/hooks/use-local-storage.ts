
import { useState } from 'react'

export function useLocalStorage<T>(key:string, defaultValue: T) {
  const [value, setValue] = useState<T>(() => {
    if (typeof localStorage === 'undefined') return defaultValue
    try {
      const saved = localStorage.getItem(key)
      return saved ? (JSON.parse(saved) as T) : defaultValue
    } catch {
      return defaultValue
    }
  })

  function set(newValue: T) {
    setValue(newValue)
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(key, JSON.stringify(newValue))
    }
  }

  function remove() {
    setValue(defaultValue)
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem(key)
    }
  }

  return [value, set, remove] as const
}
