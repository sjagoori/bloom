import Link from "next/link";
// import Buddies from "./buddies"
export default function Dashboard() {

  return (
    <>
      {/* <Buddies /> */}
      <Link href="/blog"><h1>themas</h1></Link>
      <Link href="/buddies"><h1>buddies</h1></Link>
      <Link href="/chat"><h1>chat</h1></Link>
      <Link href="/buddy/test"><h1>profiel</h1></Link>
    </>
  )
}