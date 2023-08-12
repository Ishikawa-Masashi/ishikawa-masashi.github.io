import React from 'react'
import { Link } from 'gatsby'
import PostMetaInfo from './PostMetaInfo'
import Image from './Thumbnail'
// import { Image } from './Image'
import config from '../config/blog-config'

import Tag from './Tag'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTags, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
// import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'

import moment from 'moment'

type Props = {
  postField: GatsbyTypes.MarkdownRemark
}

export const PostPreview = ({ postField }: Props) => {
  const formattedDate = React.useMemo(() => moment(postField.frontmatter.date).format(config.dateFormat), [postField])

  const tagList = (postField.frontmatter.tags ?? []).map((tag) => <Tag key={tag} value={tag} />)
  return (
    <article className="group max-w-xs rounded-md px-3 py-7 shadow-md" key={postField.frontmatter.slug}>
      <Link to={postField.frontmatter.slug} className="group">
        <div className="relative mb-3 flex transition-all">
          <FontAwesomeIcon icon={faCalendarAlt} size="sm" />
          <h2>{formattedDate}</h2>

          {/* <ImageWrapper>
            <Image css={styles.image} filename={postField.frontmatter.thumbnail || config.defaultThumbnailImagePath} alt={'thumbnail'} />
          </ImageWrapper> */}
          {/* <div className="absolute z-20 flex h-full w-full items-center justify-center">
            <div className="flex items-center bg-green-700 p-2 font-bold text-white">
              <FontAwesomeIcon icon={faPlayCircle} />
              <div className="px-2">Run Game</div>
            </div>
          </div> */}
        </div>
        {/* </Link> */}

        {/* <Link to={postField.frontmatter.slug}> */}
        <div className="px-2">
          <h2 className="mb-2 truncate border-y-0 font-bold">{postField.frontmatter.title}</h2>
          <p dangerouslySetInnerHTML={{ __html: postField.excerpt ?? '' }} />

          <div className="flex">
            <FontAwesomeIcon icon={faTags} size="sm" />
            {tagList}
          </div>
          {/* <PostMetaInfo tags={postField.frontmatter.tags ?? []} date={postField.frontmatter.date} /> */}
        </div>
      </Link>
    </article>
  )
}
