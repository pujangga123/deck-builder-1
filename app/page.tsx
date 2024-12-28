import type { NextPage } from "next";
import "./globals.css";
import Link from "next/link";

const Page: NextPage = () => {
  return (
    <>
        <div>Hello</div>
        <Link href="/test">Test 1</Link>
    </>
  )
}

export default Page