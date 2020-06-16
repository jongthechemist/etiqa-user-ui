import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import classNames from 'classnames'

import { useDispatchAction, useStatePath, useThunkStatus, useToggle } from '../helpers/hooks'

import { fetchUsers, filteredUsersSelector, setFilter, removeUser } from '../redux/user.redux'

import { Skeleton } from '../components/Skeleton'
import { Card } from '../components/Card'
import { Heading } from '../components/Heading'
import { Button } from '../components/Button'
import { Input } from '../components/Input'

import { BaseView } from './BaseView'
import { Modal } from '../components/Modal'

const EmptyViewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
`
const EmptyView = () => {
  return (
    <EmptyViewContainer>
      <Card className={'d-flex flex-column align-items-center'}>
        <Heading>There is no user.</Heading>
        <Button as={Link} to={'/new'} primary>
          + New User
        </Button>
      </Card>
    </EmptyViewContainer>
  )
}

const UserListItem = ({ uuid, username, first, last }) => {
  const [deleteActive, toggleDelete] = useToggle()
  const dispatchRemoveUser = useDispatchAction(removeUser)
  const onConfirmDelete = () => {
    toggleDelete()
    dispatchRemoveUser({ id: uuid })
  }
  return (
    <div
      className={classNames({
        'w-100 d-flex align-items-center': true,
        'pb-1 border-bottom': !last,
        'pt-1': !first
      })}
    >
      <h5 className={'mb-0'}>{username}</h5>
      <span className={'flex-grow-1'}></span>
      <Button as={Link} to={`/edit/${uuid}`}>
        <span className='fas fa-pencil-alt'></span>
      </Button>
      <Button onClick={toggleDelete}>
        <span className='fas fa-trash'></span>
      </Button>
      <Modal isOpen={deleteActive} toggle={toggleDelete} header={'Are you sure?'}>
        <div className={'d-flex justify-content-between'}>
          <Button warn onClick={onConfirmDelete}>
            Delete
          </Button>
          <Button primary onClick={toggleDelete}>
            Cancel
          </Button>
        </div>
      </Modal>
    </div>
  )
}
const ListView = () => {
  const filteredUsers = useSelector(filteredUsersSelector)
  return (
    <Card>
      {filteredUsers.map((user, index) => (
        <UserListItem
          key={user.uuid}
          uuid={user.uuid}
          username={user.username}
          last={index === filteredUsers.length - 1}
        />
      ))}
    </Card>
  )
}

export const UserListView = () => {
  const users = useStatePath('user.userList', [])
  const [status] = useThunkStatus(fetchUsers)
  const hasUsers = users.length > 0
  const loading = status !== 'fulfilled'

  const dispatchFetchUsers = useDispatchAction(fetchUsers)
  useEffect(() => {
    dispatchFetchUsers()
  }, [dispatchFetchUsers])

  const dispatchSetFilter = useDispatchAction(setFilter)
  const filter = useStatePath('user.filter')
  const onFilterChange = (e) => {
    dispatchSetFilter(e.target.value)
  }

  return (
    <BaseView
      header={'Users'}
      controls={
        <>
          <Input
            placeholder={'Search username'}
            className={'mr-sm-2 mb-2 mb-sm-0'}
            value={filter}
            onChange={onFilterChange}
          />
          <Button as={Link} to={'/new'} primary>
            + New User
          </Button>
        </>
      }
    >
      <Skeleton count={20} loading={loading}>
        {() => (hasUsers ? <ListView /> : <EmptyView />)}
      </Skeleton>
    </BaseView>
  )
}
