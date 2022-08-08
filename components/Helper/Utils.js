import PropTypes from 'prop-types'

 const HelperShape = PropTypes.shape({
    uid: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    helperDescription: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    averageRating: PropTypes.number.isRequired,
    totalRatings: PropTypes.number.isRequired,
    ratePerHour: PropTypes.number.isRequired,
  })

  export default HelperShape