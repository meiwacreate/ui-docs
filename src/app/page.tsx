import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      {/* Header */}
      <div className="px-8 h-16 border-b shadow-sm bg-white z-50 sticky top-0 flex items-center">
        <Link href="/" className="flex items-center"><Image src="/logo.svg" alt="Logo" width={100} height={100} className="w-6 mr-2" /><h1 className="text-xl font-medium">meiwa/ui</h1></Link>
        <div className="ml-6 flex items-center space-x-4">
          <Link href="/docs"><p>Docs</p></Link>
          <Link href="/components"><p>Components</p></Link>
          <Link href="/components"><p>Blog</p></Link>
          <Link href="/components"><p>FAQ</p></Link>
        </div>
        <div className="ml-auto">
          <Link href="/" rel="noopener noreferrer" target="_blank"><div className="font-medium flex items-center px-3.5 py-1.5 rounded-lg bg-white border"><FaGithub className="mr-1.5" />GitHub</div></Link>
        </div>
      </div>
    </div>
  )
}