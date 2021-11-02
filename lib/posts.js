import fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'

const postsDirectory = join(process.cwd(), '__posts')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export const getPostBySlug = (slug) => {
  if (!slug) {
    throw new Error('getPostBySlug: slug must be provided')
  }
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  return {
    ...data,
    slug: data.slug ?? realSlug,
    content
  }
}

export function getAllPosts() {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}