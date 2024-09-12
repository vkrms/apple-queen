import { useState } from 'react'
import './App.css'

import { CredentialResponse, GoogleLogin } from '@react-oauth/google'

function App() {
  const [count, setCount] = useState(0)

  const responseMessage = (response: CredentialResponse) => {
    console.log(response);
  };
  const errorMessage = (error?: Error) => {
    console.log(error);
  };

  return (
    <>
      <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
