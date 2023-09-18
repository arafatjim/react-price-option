
import PropTypes from 'prop-types'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
const Features = ({feature}) => {
          return (
                    <div>
                        {/* <p> <IoIosArrowDropdown></IoIosArrowDropdown><{feature} </p>       */}
                        <p  className='flex gap-1 py-1 '><IoMdCheckmarkCircleOutline className='mr-6 text-2xl'></IoMdCheckmarkCircleOutline> {feature}</p>
                    </div>
          );
};
Features.propTypes ={
          feature: PropTypes.string
}
export default Features;