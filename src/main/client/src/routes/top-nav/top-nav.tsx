export default function TopNav() {
return (
<>
    <div id="top-nav">
      <a className="active" href="/home">Home</a>
      <a href="/personal">Personal</a>
      <a href="/business">Business</a>
      <a href="/enterprise">Enterprise</a>
      <a href="/about">About</a>
      <div className="button">
          <button>Sign Up</button>
          <button>Login</button>
      </div>
    </div>

       </>
);
}