import Home from './home-page.tsx'
import {AuthStatus} from './auth.tsx'
import '../index.css'

export default function Root() {
  return (
    <>
      <div id="root">
      <AuthStatus/>
        <Home />
      </div>
    </>
  );
}



