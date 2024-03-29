import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'

import { Post } from './pages/post'
import { Blog } from './pages/blog'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Blog />} />
        <Route path="/post/:id" element={<Post />} />
      </Route>
    </Routes>
  )
}
