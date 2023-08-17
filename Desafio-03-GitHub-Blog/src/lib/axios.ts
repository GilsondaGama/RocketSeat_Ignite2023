import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.github.com',
})

export const apiUser = axios.create({
  baseURL: 'https://api.github.com/users/',
})

export const apiIssues = axios.create({
  baseURL: 'https://api.github.com/repos/',
})

export const apiSelectIssue = axios.create({
  baseURL: 'https://api.github.com/search/issues?q=',
})
