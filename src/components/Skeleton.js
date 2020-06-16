import React from 'react'
import PropTypes from 'prop-types'
import BaseSkeleton from 'react-loading-skeleton'

export const Skeleton = ({ loading, children, ...rest }) => {
  return loading ? <BaseSkeleton {...rest} style/> : children()
}
Skeleton.propTypes = {
  count: PropTypes.number,
  duration: PropTypes.number,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  wrapper: PropTypes.node,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  circle: PropTypes.bool,
  style: PropTypes.object,
  className: PropTypes.string,
}