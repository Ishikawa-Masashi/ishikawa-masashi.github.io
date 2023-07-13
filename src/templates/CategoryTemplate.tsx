import React from 'react'
import { css } from '@emotion/react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTags } from '@fortawesome/free-solid-svg-icons'

import { maxContentWidth } from '../styles/mixinStyle'

import Title from '../components/Title'
import PostList from '../components/PostList'
import Tag from '../components/Tag'
import TagList from '../components/TagList'
import type { PageContextCategory } from '../@types'
import { GameList } from '../components/GameList'
// import { ChevronCircleRight } from '../icons/ChevronCircleRight'

type Props = {
  pageContext: PageContextCategory
}

const CategoryTemplate = ({ pageContext }: Props) => {
  const posts = pageContext.nodes
  const totalCount = posts && posts.length ? posts.length : 0

  const targetTag = <Tag value={pageContext.category} />

  const tagSearchResult = (
    // <div css={styles.tag_search_result}>
    <div>
      {/* <FontAwesomeIcon icon={faTags} css={styles.tag_icon} /> */}
      {/* <div className="mx-auto max-w-screen-md border-b-2 border-dashed border-blue-600">
        <div className="flex pb-2">
          <ChevronCircleRight className="fill-blue-600" />
          <div className="text-2xl text-blue-600">Game</div>
        </div>
      </div> */}
      <FontAwesomeIcon icon={faTags} />
      {targetTag}
      {totalCount}件
    </div>
  )

  const postList = totalCount > 0 ? <PostList postFields={posts} /> : <div css={styles.no_post}>指摘したタグの記事はありません。</div>

  const { isGame } = React.useMemo(() => {
    const isGame = pageContext.category === 'game'
    // const isTag = location.pathname.startsWith(tagPath)
    // const isCategory = location.pathname.startsWith(categoryPath)
    return {
      isGame,
    }
  }, [pageContext.category])

  return (
    <div>
      <Title tag={pageContext.category} />
      {/* {tagSearchResult} */}
      {postList}
      {isGame && <GameList postFields={pageContext.nodes} />}

      <TagList tagCounts={pageContext.tagCounts} />
    </div>
  )
}

export default CategoryTemplate

const styles = {
  tag_rearch_result: css`
    ${maxContentWidth}
    padding: 1em 0 0 1em;
    display: flex;
    align-items: center;
  `,

  tag_icon: css`
    margin-right: 0.5em;
  `,

  no_post: css`
    ${maxContentWidth}
    padding: 1em 0 0 1em;
    display: flex;
    align-items: center;
  `,
}
