import actions from './actions'

const { loginBegin, loginSuccess, loginErr, logoutBegin, logoutSuccess, logoutErr } = actions

const login = data => {
  return async dispatch => {
    try {
      dispatch(loginBegin())
      setTimeout(() => {
        localStorage.setItem('user', JSON.stringify(data.user))
        if (data.token) localStorage.setItem('access_token', data.token)
        return dispatch(loginSuccess(data.user))
      }, 0)
    } catch (err) {
      dispatch(loginErr(err))
    }
  }
}

const logOut = () => {
  return async dispatch => {
    try {
      dispatch(logoutBegin())
      localStorage.clear('logedIn')
      dispatch(logoutSuccess(null))
    } catch (err) {
      dispatch(logoutErr(err))
    }
  }
}

export { login, logOut }
