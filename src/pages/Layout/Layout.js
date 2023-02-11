import { Outlet } from 'react-router-dom'
import Header from '../../components/Header/Header'

function Layout({setIsAuthorized}) {
  return (
    <>
      <Header setIsAuthorized={setIsAuthorized} />
      <Outlet/>
    </>
  )
}

export default Layout