import React from 'react';
// import { AiOutlinePhone } from 'react-icons/ai';

function Footer(props) {
    return (
        <div className=' footers m-2 p-2'>
            <div className='justify-content: center;'>
                <span >

                    <a href="https://www.instagram.com/dine_osh/" class="text-white">
                        <i class="fa fa-2x fa-fw fa-instagram "></i></a>
                    <a href="https://www.phone.com/+996 (559)-515-600/" class="text-white">
                        <i class="fa fa-2x fa-fw fa-phone "></i></a>
                    <a href="https://www.facebook.com/dine_osh/" class="text-white">
                        <i class="fa fa-2x fa-fw fa-facebook "></i></a>
                </span>
                <span >
                    <p>+996 (559)-515-600</p>
                    <p>+996 (770)-000-180</p>
                </span>
            </div>
           
            <div className='text-center'>@dine_osh</div>
           



        </div>
    );
}

export default Footer;