import { NextSeo } from 'next-seo'
import HamburgerMenu from 'components/HamburgerMenu'
import Layout from 'components/Layout'
import Post from 'components/Post'
import { getAllPosts } from 'libs/posts'
import { IPost } from 'interfaces/Post'

export function getStaticProps() {
  const posts = getAllPosts()
  return {
    props: {
      posts,
    },
  }
}

export type PostsPageProps = {
  posts: IPost[]
}

const Posts = ({ posts }: PostsPageProps) => {
  return (
    <Layout>
      <NextSeo title="Posts" />

      <div className="relative flex h-full min-h-screen w-full flex-col items-center justify-center">
        <div className="absolute top-11 right-9 md:top-10 md:right-12">
          <HamburgerMenu />
        </div>
        <div className="flex flex-col gap-2 pt-10 text-center md:gap-4">
          <h1 className="gradient-text-light font-monument text-4xl md:text-7xl">
            Posts
          </h1>
        </div>
        <div className="container mt-10 grid max-w-screen-lg grid-cols-1 gap-4 p-4 md:grid-cols-3 md:gap-6 md:px-6">
          {posts.length > 0 &&
            posts.map((post) => <Post key={post.slug} post={post} />)}
        </div>
      </div>
    </Layout>
  )
}

export default Posts
