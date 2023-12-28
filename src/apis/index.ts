import axios from 'axios'
import { Issue } from '../types'

const getIssues = async () => {
  const res = await axios.get<Issue[]>('https://api.github.com/repos/facebook/react/issues')
  return res.data
}

const APIs = {
  getIssues
}

export default APIs