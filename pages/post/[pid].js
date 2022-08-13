import { useRouter } from 'next/router'

const Post = ({ data }) => {
  const router = useRouter()
  const { pid } = router.query

  return <p>Post: {pid}, data: {JSON.stringify(data)}</p>
}

// This gets called on every request
// https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props
export async function getServerSideProps({ req, res }) {
  // Fetch data from external API
  // const res = await fetch(`https://.../data`)
  // const data = await res.json()
  const data = {url: req.url};

  console.log(req.url);

  // Pass data to the page via props
  return { props: { data } }
}

export default Post
