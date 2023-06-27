async function getDetailData(name) {
    const res = await fetch(`https://api.tvmaze.com/shows/${name}`)
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
}

export default async function Details({params : {name}}) {

    const data = await getDetailData(name)

    return (
        <>
          <p>{data.name}</p>
          <p>{data.status}</p>
        </>
      );
}