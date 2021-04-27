import jwtDecode from 'jwt-decode'

export const state = () => {
  return {
    token: process.client ? localStorage.getItem('token') : '',
    expire: process.client ? localStorage.getItem('expire') : '',
    id: process.client ? localStorage.getItem('id') : '',
  }
}

export const mutations = {
  setLoginedInfo(state, data) {
    state.token = data.token
    state.expire = data.expire
    const jwtObj = jwtDecode(state.token)
    state.id = jwtObj.id
    if (process.client) {
      localStorage.setItem('token', data.token)
      localStorage.setItem('expire', data.expire)
      localStorage.setItem('id', jwtObj.id)
    }
  },
}

export const getters = {
  getToken: (state) => {
    return process.client ? localStorage.getItem('token') : ''
  },
  getId: (state) => {
    return process.client ? localStorage.getItem('id') : ''
  },
}
