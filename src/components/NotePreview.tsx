import React from 'react'
import { Link } from 'gatsby'
import PostMetaInfo from './PostMetaInfo'
// import { Image } from './Image'
import config from '../config/blog-config'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'

type Props = {
  postField: GatsbyTypes.MarkdownRemark
}

export const NotePreview = ({ postField }: Props) => {
  return (
    <article className="group max-w-xs rounded-md px-3 py-7 shadow-md" key={postField.frontmatter.slug}>
      <Link to={postField.frontmatter.slug} className="group">
        <div className="px-2">
          <h2 className="mb-2 border-y-0 font-bold">{postField.frontmatter.title}</h2>
          <p dangerouslySetInnerHTML={{ __html: postField.excerpt ?? '' }} />
          <PostMetaInfo tags={postField.frontmatter.tags ?? []} date={postField.frontmatter.date} />
        </div>
      </Link>
    </article>
  )
}
