import { ReactNode, useCallback, useEffect, useState } from 'react'
import { api } from '../lib/axios'
import { createContext } from 'use-context-selector'

export interface Issues {
  id: number
  number: number
  title: string
  body: string
  created_at: string
}

interface IssuesContextType {
  issues: Issues[]
  fetchIssues: (query?: string) => Promise<void>
}

interface IssuesProviderProps {
  children: ReactNode
}

export interface SinglePost {
  title: string
  body: string
  created_at: string
  number: number
  html_url: string
  comments: number
  user: {
    login: string
  }
}

export const IssuesContext = createContext({} as IssuesContextType)

const userName = import.meta.env.VITE_GITHUB_USERNAME
const repoName = import.meta.env.VITE_GITHUB_REPONAME

export function IssuesProvider({ children }: IssuesProviderProps) {
  const [issues, setIssues] = useState<Issues[]>([])

  const fetchIssues = useCallback(async (query: string = '') => {
    const response = await api.get(
      `/search/issues?q=${query}%20repo:${userName}/${repoName}`,
    )

    setIssues(response.data.items)
  }, [])

  useEffect(() => {
    fetchIssues()
  }, [fetchIssues])

  return (
    <IssuesContext.Provider
      value={{
        issues,
        fetchIssues,
      }}
    >
      {children}
    </IssuesContext.Provider>
  )
}
