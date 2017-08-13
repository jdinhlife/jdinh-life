import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

import Markdown from '../components/markdown'
import dateFormat from '../../common/utils/date-format'
import { colors, fonts } from '../config'

const propTypes = {
  pages: PropTypes.arrayOf(PropTypes.shape({
    link: PropTypes.string,
    title: PropTypes.string,
    date: PropTypes.string,
    desc: PropTypes.string,
  })),
}

const PageList = ({ pages }) =>
  <div>
    {
      pages.map(
        (page, i) =>
          <div className='entry' key={i}>
            <h2><Link prefetch href={page.link}><a>{page.title}</a></Link></h2>
            {page.date ? <time>{dateFormat({date: (new Date(page.date)), format: 'mmm dd yyyy'})}</time> : <time>♣ ♦ ♥</time>}
            <Markdown source={page.desc} />
          </div>
      )
    }

    <style jsx>{`
      h2 {
        margin-bottom: 0;
      }
      h2::before {
        content: '#';
        font-family: ${fonts.monospace};
        padding-right: .5rem;
      }
      a {
        color: ${colors.purple};
        transition: color .5s ease;
      }
      a:hover {
        color: ${colors.orange};
      }
      time {
        display: block;
        font-size: 87.5%;
        margin-bottom: 1rem;
      }
      time::before {
        content: '♠';
        padding-right: .5rem;
      }
      .entry + .entry::before {
        font-family: ${fonts.monospace};
        content: '/* --- */';
        display: block;
        text-align: center;
        font-size: 87.5%;
        color: ${colors.comment};
        padding-top: 1.5rem;
        padding-bottom: 1.5rem;
      }
    `}</style>
  </div>

PageList.propTypes = propTypes

export default PageList
