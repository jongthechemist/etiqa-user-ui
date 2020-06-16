import React from 'react'
import PropTypes from 'prop-types'
import { Modal as ModalBase, ModalHeader, ModalBody } from 'reactstrap'

export const Modal = ({ isOpen, header, toggle, children }) => {
  return (
    <ModalBase isOpen={isOpen} size={'sm'} style={{ marginTop: 200 }} toggle={toggle}>
      <ModalHeader>{header}</ModalHeader>
      <ModalBody>{children}</ModalBody>
    </ModalBase>
  )
}
Modal.propTypes = {
  isOpen: PropTypes.bool,
  header: PropTypes.node,
  toggle: PropTypes.func,
  children: PropTypes.node
}