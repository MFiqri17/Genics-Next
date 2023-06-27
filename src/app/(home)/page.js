import Link from 'next/link'

async function getData() {
  const res = await fetch("https://api.tvmaze.com/shows")
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function Home() {
  const data = await getData()
  return (
    <div className='text-center'>
      <h1 className='text-5xl mb-10'>Tutorial Next JS</h1>
      {data.map((tv) => (
        <Link className="block" href={`/details/${tv.id}`} key={tv.id}>
          {tv.name}
        </Link>
      ))}
    </div>
  )
}
