import { ReactNode, useCallback, useEffect, useState } from 'react'
import { api } from '../lib/axios'
import { createContext } from 'use-context-selector'
// import { set } from 'zod'

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
  singlePost: (id: number) => Promise<void>
}

interface IssuesProviderProps {
  children: ReactNode
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

  const singlePost = useCallback(async (id: number) => {
    const response = await api.get(
      `/repos/${userName}/${repoName}/issues/${id}`,
    )

    console.log(response.data)
    setIssues(response.data)
  }, [])

  useEffect(() => {
    fetchIssues()
  }, [fetchIssues])

  return (
    <IssuesContext.Provider
      value={{
        issues,
        fetchIssues,
        singlePost,
      }}
    >
      {children}
    </IssuesContext.Provider>
  )
}
