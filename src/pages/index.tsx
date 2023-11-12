// pages/index.tsx

import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { Inter } from 'next/font/google'
import { prisma } from '../../prisma/prisma'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

type PublisherProps = ({
  catalog: {
    id: number;
    publisherId: number;
} | null;
} & {
id: number;
name: string;
})[]

export const getServerSideProps: GetServerSideProps<{
  publishers: PublisherProps
}> = (async () => {
	const response = await fetch('http://127.0.0.1:3000/api/publishers')
  const publishers = await response.json()

  return { props: {publishers} }
})

export default function Home({publishers}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <main
      className={`flex min-h-screen flex-col items-start justify-between p-24 ${inter.className}`}
    >
      {publishers.map((publisher) => (
        <div className='mb-5'>
          <h1 className='text-3xl'>
            Publisher: {publisher.name} ({publisher.id})
          </h1>
          <Link href={`catalog/${publisher.catalog?.id}`}>
            Catálogo: @{publisher.catalog?.id}
          </Link>
        </div>
      ))}
    </main>
  )
}
