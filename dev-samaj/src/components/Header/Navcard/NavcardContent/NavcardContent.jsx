import React from 'react'
import PropTypes from 'prop-types';


const NavcardContent = (props) => {
    const {id, title, desc, images} = props;
    return (
        <div className='flex flex-row px-5 py-2 w-[600px] text-black justify-between h-300'>
        <div className='flex flex-col gap-2'>
            <div >
            <h4 className='text-2xl text-secondary font-bold' >{title}</h4>
            </div>
            <div className=' mt-5 mr-5 pt-0 text-lg font-light'>
                {desc}
            </div>
            <div>
            <button className="primary-btn">Learn More</button>
            {/* <a href={`#${id}`} className={styles.customButton}  >See more</a> */}
               {/* {id==='about'?<a href='#aboutUs' className={styles.customButton}  >See more</a>:<a className={styles.customButton}  href='#contact'>See more</a>}
                <Button  className={styles.customButton} onClick={() => handleButtonClick('about')} >See More</Button> */}
            </div>
        </div>
        <div className='flex items-center'>
            {images.map((image,index) => {
                return <img className='h-[100%] w-[300px] object-cover'  src={image} key={index} alt="img"/>
            })}
        </div>
       </div>
    )
}

NavcardContent.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    images: PropTypes.array.isRequired
}

export default NavcardContent