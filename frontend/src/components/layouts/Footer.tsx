import { ReactElement } from 'react'
import styled from 'styled-components'

import { STYLE, COLOR } from 'consts'

import { ExtLink, Text } from 'components'

const StyledContainer = styled.footer`
  padding: 30px;
  background-color: ${COLOR.lightGrey};
  text-align: center;
  //opacity: 0.5;
  @media ${STYLE.media.mobile} {
    min-height: 100px;
  }
`

const Footer = (): ReactElement => {
  const community = [
    {
      href: `https://developers.quarkchain.io/#introduction`,
      title: 'DOCS',
    },
    {
      href: `https://github.com/QuarkChain`,
      title: 'Github',
    },
    {
      href: `mailto:pichao@quarkchain.org`,
      title: 'Contact Us',
    },
  ]
  return (
    <StyledContainer>
      {community.map(
        ({ href, title }) =>
          href && (
            <ExtLink
              href={href}
              key={title}
              style={{
                paddingLeft: 15,
                paddingRight: 15,
                fontSize: 13,
                textTransform: 'uppercase',
              }}
            >
              <Text>{title}</Text>
            </ExtLink>
          )
      )}
    </StyledContainer>
  )
}

export default Footer
