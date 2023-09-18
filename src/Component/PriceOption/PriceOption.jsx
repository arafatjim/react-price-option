import PropTypes from 'prop-types'
import Features from '../Features/Features';

const PriceOption = ({option}) => {
          const{name, price, features}= option;
          return (
                    <div className='bg-orange-600 flex flex-col rounded-xl p-6 text-white text-center'>
                        <h2 className=''>
                    <span className='text-7xl font-extrabold'>${price}</span>    
                    <span className='text-3xl'>/Month</span>    
                    </h2>  
                    <h3 className='text-2xl my-6'>{name}</h3>   
                    <div className='text-justify flex-grow'>
                    {
                              features.map((feature, index) => <Features  key={index} feature={feature}></Features> )
                        } 
                    </div>
                    <button className='bg-blue-600 w-full py-4 rounded-md mt-4 text-2xl font-semibold hover:bg-red-600'>Buy Now</button>
                    </div>
          );
};
PriceOption.propTypes ={
          option: PropTypes.object
}
export default PriceOption;