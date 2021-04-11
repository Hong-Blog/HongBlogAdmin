export default (axios) => ({
  login(params) {
    return axios.post('/v1/login', params)
  },
})
