import React from 'react'
import './aboutUs.css';
import img1 from '../../assets/about-us.jpg'

const AboutUs = () => {
    return (
        <div>
            <div className="banner-container">
                <img style={{width:'100%',height:'800px',objectFit:'cover',filter:'brightness(40%)'}} src={img1} />
                <div className="banner-text">
                    About Us
                </div>
            </div>
            {/* Content here */}
            <div className='col-lg-12 container'>
                <h1 className='top-heading'>About Us</h1>
                <p className='t-description'>
                With a legacy of nurturing over 11,500 talents, Arena Animation at Creative Campus Delhi & Noida stands as a beacon of excellence in the field of animation and multimedia education. For the past 25 years, we have consistently delivered top-notch training, helping our students transform their creative passions into successful careers. Our commitment to quality education and industry-relevant skills ensures our graduates are well-prepared for the dynamic and ever-evolving digital media landscape.
                </p>
                <p className='t-description'>
                At Arena Animation, we pride ourselves on our outstanding placement history, a testament to our unwavering dedication to our students' success. Our comprehensive curriculum, taught by experienced professionals, covers a wide range of disciplines, including animation, visual effects, game design, and digital marketing. This holistic approach empowers our students to excel in their chosen fields and adapt to the industry's changing demands. We achieve this through the guidance of highly experienced, qualified, and committed trainers who inspire students to strengthen their power of imagination and breathe life into their imaginary characters. This hands-on approach enables our students to master the latest tools and techniques, ensuring they remain at the forefront of the industry.
                </p>
                <p className='t-description'>
                Our state-of-the-art facilities and hands-on learning approach provide an immersive educational experience, fostering creativity and innovation. We continuously strive to raise the bar, ensuring that every student who walks through our doors receives the best possible training and support.
                </p>
                <p className='t-description'>
                Join us at Arena Animation Creative Campus Delhi & Noida, and become part of a legacy that shapes the future of the animation and multimedia industry. Together, let's create, innovate, and succeed!
                </p>
            </div>



        </div>
    )
}

export default AboutUs