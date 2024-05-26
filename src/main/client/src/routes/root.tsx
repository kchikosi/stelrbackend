import TopNav from './top-nav/top-nav.tsx'
import Home from './home-page.tsx'
import BottomNav  from './bottom-nav/bottom-nav.tsx'
import '../index.css'

export default function Root() {
  return (
    <>
    <TopNav/>
    <Home/>
    <BottomNav/>
    </>
  )
};

