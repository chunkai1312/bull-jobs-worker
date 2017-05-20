const app = (jobs, callback = () => {}) => {
  try {
    jobs.forEach(job => require(`./jobs/${job}`))
    callback(null)
  } catch (err) {
    callback(err)
  }
}

export default app
