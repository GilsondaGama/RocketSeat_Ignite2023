// import { useParams } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { PostHeader } from './components/PostHeader'
import { useCallback, useEffect, useState } from 'react'
import { api } from '../../lib/axios'

// import { SinglePost } from '../../context/IssuesContext'

interface SinglePost {
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

const userName = import.meta.env.VITE_GITHUB_USERNAME
const repoName = import.meta.env.VITE_GITHUB_REPONAME

export function Post() {
  const [postData, setPostData] = useState<SinglePost>({} as SinglePost)

  const { id } = useParams()

  const getPostSelect = useCallback(async () => {
    const response = await api.get(
      `/repos/${userName}/${repoName}/issues/${id}`,
    )

    setPostData(response.data)
  }, [id])

  useEffect(() => {
    getPostSelect()
  }, [getPostSelect])

  return <PostHeader postData={postData} />
}
