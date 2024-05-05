'use client'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function NotFound() {
    const router = useRouter()
    router.push('/quiz')
    return (
        <div className="min-h-screen px-4 items-center flex justify-center flex-col md:flex-row md:gap-28 gap-16">
            <div className="flex flex-col items-center text-center gap-2">
                <h1 className=" text-gray-200 font-bold text-2xl">
                    Looks like you&apos;ve found the
                    doorway to the great nothing
                </h1>
                <p className=" text-gray-300">Sorry about that! Please visit our hompage to get where you need to go.</p>
                <Link className=" w-fit rounded py-2 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 " href='/'>Go Home nigga</Link>
            </div>

        </div>
    )
}