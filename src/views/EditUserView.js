import React, { useEffect } from 'react'
import { BaseView } from './BaseView'
import { Button } from '../components/Button'
import { useStatePath, useDispatchAction, useThunkStatus } from '../helpers/hooks'
import { setValue, submitEditUser, fetchUser } from '../redux/editUser.redux'
import { UserForm } from '../components/UserForm'
import { Redirect, useRouteMatch } from 'react-router'
import { Link } from 'react-router-dom'
import { Skeleton } from '../components/Skeleton'

export const EditUserView = () => {
  const { params } = useRouteMatch()
  const { uuid, username, email, phone, skillsets, hobby } = useStatePath('editUser')

  const dispatchValue = useDispatchAction(setValue)
  const dispatchFetchUser = useDispatchAction(fetchUser)
  const dispatchSubmitUser = useDispatchAction(submitEditUser)

  const [fetchStatus] = useThunkStatus(fetchUser)
  const [submitStatus, clearSubmitStatus] = useThunkStatus(submitEditUser)
  const fetching = fetchStatus === 'pending'
  const submitting = submitStatus === 'pending'
  const submitSuccessful = submitStatus === 'fulfilled'

  const onChange = (e) => {
    dispatchValue({ key: e.target.id, value: e.target.value })
  }
  const onSubmit = () => {
    dispatchSubmitUser()
  }

  useEffect(() => {
    dispatchFetchUser({ uuid: params.id })
  }, [dispatchFetchUser, params.id])
  useEffect(() => {
    if (submitSuccessful) {
      clearSubmitStatus()
    }
  }, [submitSuccessful, clearSubmitStatus])

  if (submitSuccessful) return <Redirect to={'/'} />

  return (
    <BaseView header={'Edit User'}>
      <div className={'d-flex flex-column'}>
        <Skeleton count={5} loading={fetching}>
          {() => (
            <>
              <UserForm
                username={username}
                email={email}
                phone={phone}
                skillsets={skillsets}
                hobby={hobby}
                onChange={onChange}
              />
              <Button
                primary
                className={'align-self-end mt-4'}
                onClick={onSubmit}
                disabled={submitting || !uuid}
              >
                Submit
              </Button>
              <Button as={Link} to={'/'} className={'align-self-end mt-4'}>
                Cancel
              </Button>
            </>
          )}
        </Skeleton>
      </div>
    </BaseView>
  )
}
