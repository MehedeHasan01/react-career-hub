import PropTypes from 'prop-types';
const JobBanner = ({title}) => {
    return (
        <div className='bgColor'>
            <div className={` bgImg py-[83px]  flex items-center `}>
            <h1 className="w-fit mx-auto font-extrabold -mt-10 text-black text-3xl ">{title}</h1>
            </div>
        </div>
    );
};
JobBanner.propTypes = {
    title: PropTypes.string
};
export default JobBanner;