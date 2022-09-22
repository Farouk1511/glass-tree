import PropTypes from 'prop-types'

 const PostShape = PropTypes.shape({
    id:PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    averageRating: PropTypes.number.isRequired,
    totalRatings: PropTypes.number.isRequired,
    ratePerHour: PropTypes.number.isRequired,
  })

  export default PostShape