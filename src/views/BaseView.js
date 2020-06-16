import React from 'react'
import { Heading } from '../components/Heading'
import { TopBar } from '../components/TopBar'

export const BaseView = ({ children, header, controls }) => {
  return (
    <div>
      <TopBar userName={'Hello, User!'} userImg={''}>
        <span role='img' aria-label={'Boy heart coffee'}>
          👦🧡☕
        </span>
      </TopBar>
      <div
        className={
          'container d-flex flex-column flex-sm-row align-items-stretch align-items-sm-center py-4'
        }
      >
        <Heading className={'mb-2 mb-sm-0'}>{header}</Heading>
        <div className={'flex-grow-1'}></div>
        {controls}
      </div>
      <div className={'container'}>{children}</div>
    </div>
  )
}
