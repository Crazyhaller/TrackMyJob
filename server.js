import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
const app = express()
import morgan from 'morgan'
import { nanoid } from 'nanoid'

let jobs = [
  { id: nanoid(), company: 'Apple', position: 'Front-end' },
  { id: nanoid(), company: 'Google', position: 'Back-end' },
]

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Working')
})

app.post('/', (req, res) => {
  console.log(req)
  res.json({ message: 'Post request is working!', data: req.body })
})

// Get All Jobs
app.get('/api/jobs', (req, res) => {
  res.status(200).json({ jobs })
})

// Create A Job
app.post('/api/jobs', (req, res) => {
  const { company, position } = req.body
  if (!company || !position) {
    return res
      .status(400)
      .json({ message: 'Please provide company and position' })
  }

  const id = nanoid(10)
  const job = { id, company, position }
  jobs.push(job)
  res.status(201).json({ job })
})

// Get A Single Job
app.get('/api/jobs/:id', (req, res) => {
  const { id } = req.params
  const job = jobs.find((job) => job.id === id)
  if (!job) {
    return res.status(404).json({ message: 'Job Not Found' })
  }
  res.status(200).json({ job })
})

// Edit A Job
app.patch('/api/jobs/:id', (req, res) => {
  const { company, position } = req.body
  if (!company || !position) {
    return res.status(400).json({ msg: 'Please Provide Company and Position' })
  }

  const { id } = req.params
  const job = jobs.find((job) => job.id === id)
  if (!job) {
    return res.status(404).json({ msg: `Job Not Found` })
  }

  job.company = company
  job.position = position
  res.status(200).json({ msg: 'Job Modified', job })
})

// Delete A Job
app.delete('/api/jobs/:id', (req, res) => {
  const { id } = req.params
  const job = jobs.find((job) => job.id === id)
  if (!job) {
    return res.status(404).json({ msg: `Job Not Found` })
  }
  const newJobs = jobs.filter((job) => job.id !== id)
  jobs = newJobs
  res.status(200).json({ msg: `Job Removed` })
})

// Start Server
const port = process.env.PORT || 5100
app.listen(port, () => {
  console.log(`Server started on ${port}`)
})
