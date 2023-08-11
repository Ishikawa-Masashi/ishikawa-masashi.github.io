import * as React from 'react'
import type { PageProps } from 'gatsby'
import { graphql } from 'gatsby'
import { useMemo } from 'react'
import PostList from '../components/PostList'
import Title from '../components/Title'
import _orderBy from 'lodash/orderBy'
import TagList from '../components/TagList'
import { TagCounts } from 'index'
import { GameList } from '../components/GameList'
import { ChevronCircleRight } from '../icons/ChevronCircleRight'
import { SoftwareList } from '../components/SoftwareList'

const IndexPage: React.FC<PageProps<GatsbyTypes.Query>> = ({ data }) => {
  // マージして降順で並び替え
  // gatsby-node.jsで2つのノードに共通のfieldsを追加しているため条件分岐なし
  const posts = data.allMarkdownRemark.edges

  const tagCounts = useMemo(() => {
    const _result: TagCounts = []

    posts.forEach((post) => {
      post.node.frontmatter?.tags?.forEach((t) => {
        if (!t) {
          return
        }

        const targetData = _result.find((data) => data.text === t)
        if (targetData) {
          targetData.size = targetData.size + 1
        } else {
          _result.push({
            text: t,
            size: 1,
          })
        }
      })
    })

    return _orderBy(_result, ['size', 'text'], ['desc', 'asc'])
  }, [posts])

  const postFields = useMemo(() => posts.map((post) => post.node), [posts])
  const gameFields = useMemo(() => posts.filter((post) => post.node.frontmatter.category === 'game').map((post) => post.node), [posts])
  const softwareFields = useMemo(() => posts.filter((post) => post.node.frontmatter.category === 'software').map((post) => post.node), [posts])

  return (
    <>
      <Title />

      <div className="container mx-auto border-b-2 border-dashed border-blue-600 ">
        <div className="flex fill-blue-600 py-2">
          <ChevronCircleRight />
          <div className="px-2 text-3xl text-blue-600">Game</div>
        </div>
      </div>

      <GameList postFields={gameFields} />

      <div className="container mx-auto border-b-2 border-dashed border-blue-600 ">
        <div className="flex fill-blue-600 py-2">
          <ChevronCircleRight />
          <div className="px-2 text-3xl text-blue-600">ソフトウェア</div>
        </div>
      </div>

      <SoftwareList postFields={softwareFields} />
      <div className="container mx-auto border-b-2 border-dashed border-blue-600 ">
        <div className="flex fill-blue-600 py-2">
          <ChevronCircleRight />
          <div className="px-2 text-3xl text-blue-600">ノート</div>
        </div>
      </div>

      <GameList postFields={gameFields} />

      <div className="container mx-auto border-b-2 border-dashed border-blue-600 ">
        <div className="flex fill-blue-600 py-2">
          <ChevronCircleRight />
          <div className="px-2 text-3xl text-blue-600">ブログ</div>
        </div>
      </div>
      <PostList postFields={postFields} />
      <TagList tagCounts={tagCounts} />
    </>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      edges {
        node {
          excerpt
          frontmatter {
            slug
            title
            date
            tags
            thumbnail
            category
            url
          }
        }
      }
    }
  }
`

export default IndexPage
