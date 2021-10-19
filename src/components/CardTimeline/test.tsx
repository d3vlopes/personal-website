import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helpers'

import CardTimeline, { CardTimelineProps } from '.'

const props: CardTimelineProps = {
  title: 'CardTimeline',
  content: '<p>Loren ipsum dolor</p>',
}

const { getByRole, getByText } = screen

describe('<CardTimeline />', () => {
  it('should render CardTimeline', () => {
    const { container } = renderWithTheme(<CardTimeline {...props} />)

    const title = getByRole('heading', { name: 'CardTimeline' })
    const content = getByText('Loren ipsum dolor')
    const p = container.querySelector('p')

    expect(title).toBeInTheDocument()
    expect(content).toBeInTheDocument()
    expect(p?.tagName.toLowerCase()).toBe('p')
  })

  it('should match snapshot ', () => {
    const { container } = renderWithTheme(<CardTimeline {...props} />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
