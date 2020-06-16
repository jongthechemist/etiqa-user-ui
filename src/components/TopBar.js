import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Heading } from './Heading'

const TopBarContainer = styled.nav`
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  padding-top: 10px;
  width: 100%;
  ${Heading} {
    line-height: 1;
    margin-bottom: 0;
    margin-left: 12px;
  }
`

const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props) => props?.theme?.accent};
`

export const TopBar = ({ userName, userImg, children }) => {
  return (
    <TopBarContainer>
      <div className={'container d-flex justify-content-between'}>
        <section className={'d-flex align-items-center'}>
          <ProfileImg alt={''} src={userImg} />
          <Heading>{userName}</Heading>
        </section>
        <section>{children}</section>
      </div>
    </TopBarContainer>
  )
}
TopBar.propTypes = {
  userName: PropTypes.string,
  userImg: PropTypes.string,
  children: PropTypes.node
}
