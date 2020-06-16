import React from 'react'
import styled from 'styled-components'
import { Label } from './Label'
import { Input } from './Input'

const UserFormContainer = styled.form`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-row-gap: 10px;
`
export const UserForm = ({ username, email, phone, skillsets, hobby, onChange }) => {
  return (
    <UserFormContainer>
      <Label htmlFor={'username'}>Username:</Label>
      <Input id={'username'} value={username} type={'text'} onChange={onChange} />
      <Label htmlFor={'email'}>Email:</Label>
      <Input id={'email'} value={email} type={'email'} onChange={onChange} />
      <Label htmlFor={'phone'}>Phone:</Label>
      <Input id={'phone'} value={phone} type={'number'} onChange={onChange} />
      <Label htmlFor={'skillsets'}>Skillsets:</Label>
      <Input id={'skillsets'} value={skillsets} type={'text'} onChange={onChange} />
      <Label htmlFor={'hobby'}>Hobby:</Label>
      <Input id={'hobby'} value={hobby} type={'text'} onChange={onChange} />
    </UserFormContainer>
  )
}
