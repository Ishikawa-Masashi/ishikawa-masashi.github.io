import * as React from 'react'
import Layout from './src/components/Layout'

import './src/styles/global.css'
import { WrapPageElementBrowserArgs } from 'gatsby'

type PageContext = {
  //
}

export const wrapPageElement = ({ element, props }: WrapPageElementBrowserArgs<unknown, PageContext>) => <Layout {...props}>{element}</Layout>
