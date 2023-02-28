import { useSession, signIn, signOut } from "next-auth/react"
import Mytab from './MyTab'

export default function Component() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
     <Mytab/> <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}