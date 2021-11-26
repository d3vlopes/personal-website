import { GetServerSideProps } from 'next'
import { getServerSideSitemap, ISitemapField } from 'next-sitemap'

import { GetAllProjectsQuery } from 'graphql/generated/graphql'
import { GET_ALL_PROJECTS } from 'graphql/queries'

import { api } from 'services/api'

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { projects } = await api.request<GetAllProjectsQuery>(GET_ALL_PROJECTS)

  const fields: ISitemapField[] = projects.map((project) => ({
    changefreq: 'weekly',
    loc: `${process.env.SITE_URL}/project/${project.slug}`,
    lastmod: project.updatedAt,
  }))

  return getServerSideSitemap(context, fields)
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
export default () => {}
