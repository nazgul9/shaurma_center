import React from 'react';
// import { AiOutlinePhone } from 'react-icons/ai';

function Footer(props) {
    return (
        <div className=' footers m-2 p-2'>
            <div className='m-3 text-center '>
                

                    <a href="https://www.instagram.com/dine_osh/" class="text-white m-2">
                        <i class="fa fa-2x fa-fw fa-instagram "></i></a>
                    <a href="tel:+996559-515-600" class="text-white">
                        <i class="fa fa-2x fa-fw fa-phone "></i></a>
                    <a href="https://www.facebook.com/dine_osh/" class="text-white">
                        <i class="fa fa-2x fa-fw fa-facebook "></i></a>
               
                {/* <div className='text-center' >
                <span className='f11'>
                    <p>+996 (559)-515-600</p>
                    <p>+996 (770)-000-180</p>
                </span></div> */}
            </div>
           
            <div className='text-center'>@dine_osh</div>
           



        </div>
    );
}

export default Footer;