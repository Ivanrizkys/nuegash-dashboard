import React from "react"
import Routes from "@/src/routes/index"
import Spinner from "@/src/components/atoms/Spinner"

function App() {
  return (
    <>
      <React.Suspense fallback={<Spinner />}>
        <Routes />
      </React.Suspense>
    </>
  )
}

export default App
