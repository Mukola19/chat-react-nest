export default (accessToken: string | undefined) => {
  if (accessToken) {
    localStorage.setItem('accessToken', accessToken)
  }
}
