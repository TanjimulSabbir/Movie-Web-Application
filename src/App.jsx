import LandingPage from "./components/LandingPage/LandingPage";
import Toaster from "react-hot-toast"

export default function App() {
  return (
    <>
      <LandingPage />
      <div>
        <Toaster />
      </div>
    </>
  )
}
