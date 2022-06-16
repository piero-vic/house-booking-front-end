import PropTypes from 'prop-types';

const PageHeading = ({ title, subtitle }) => (
  <div className="mb-5">
    <h2 className="text-center text-black font-black text-3xl">{title}</h2>
    {subtitle !== ''
      && <p className="text-center text-gray-500 font-semibold text-1xl">{subtitle}</p>}
  </div>
);

PageHeading.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

PageHeading.defaultProps = {
  subtitle: '',
};

export default PageHeading;
