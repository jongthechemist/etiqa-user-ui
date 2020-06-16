import React, { useEffect } from 'react'
import { BaseView } from './BaseView'
import { Button } from '../components/Button'
import { useStatePath, useDispatchAction, useThunkStatus } from '../helpers/hooks'
import { setValue, submitNewUser } from '../redux/newUser.redux'
import { UserForm } from '../components/UserForm'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'

export const NewUserView = () => {
  const { username, email, phone, skillsets, hobby } = useStatePath('newUser')
  const dispatchValue = useDispatchAction(setValue)
  const dispatchSubmitUser = useDispatchAction(submitNewUser)

  const [submitStatus, clearStatus] = useThunkStatus(submitNewUser)
  const submitting = submitStatus === 'pending'
  const submitSuccessful = submitStatus === 'fulfilled'

  const onChange = (e) => {
    dispatchValue({ key: e.target.id, value: e.target.value })
  }
  const onSubmit = () => {
    dispatchSubmitUser()
  }

  useEffect(() => {
    if (submitSuccessful) {
      clearStatus()
    }
  }, [submitSuccessful, clearStatus])

  if (submitSuccessful) return <Redirect to={'/'} />

  return (
    <BaseView header={'Create New User'}>
      <div className={'d-flex flex-column'}>
        <UserForm
          username={username}
          email={email}
          phone={phone}
          skillsets={skillsets}
          hobby={hobby}
          onChange={onChange}
        />
        <Button primary className={'align-self-end mt-4'} onClick={onSubmit} disabled={submitting}>
          Submit
        </Button>
        <Button as={Link} to={'/'} className={'align-self-end mt-4'}>
          Cancel
        </Button>
      </div>
    </BaseView>
  )
}
