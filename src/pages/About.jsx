import React from 'react'
import Header from "../pages/Header"
import Footer from  "../components/Footer"
import Anas from "../images/Anas.jpg"
import yusuf from "../images/yusuf.jpg"
import shakra from "../images/shakra.jpg"
import moha from "../images/moha.jpg"
import Caaqil from "../images/Caaqil.jpg"
import SomaliWoman from "../images/SomaliWoman.jpeg.jpg"
import { TypeAnimation } from 'react-type-animation';
// import counting from "../countingNumbers"


function About() {
  return  <div>
      <Header/>

{/* <counting end={500}/> */}

<div className="absolute top-[70px] sm:top-[150px] ml-[40px] sm:ml-[250px] text-white text-[18px] sm:text-[25px] font-bold">
  <TypeAnimation
    sequence={[
      "One Donation Can Save Three Lives.",
      1000, 
    ]}
    wrapper="span"
    speed={50}
    style={{ fontSize: '1.5em', display: 'inline-block' }} // Adjusted for mobile
    repeat={Infinity}
  />
</div>


        <div className='im'>
  <div className="b">
    <div className="w-full sm:w-fulll h-[120px] sm:h-[220px] relative top-[0px] bg-blue-900 opacity-60"></div>
  </div>
</div>

<div className="w-full h-auto sm:h-[500px] bg-white backdrop-blur-lg shadow-md opacity-80 mt-[200px] sm:mt-[300px] ">
  <h1 className="text-center text-[30px] sm:text-[60px] font-bold text-blue-900 ">
    Why We Need You?
  </h1>

  <p className="mt-[15px] sm:mt-[30px] p-[10px] sm:p-[20px] text-[12px] sm:text-[16px] text-center text-justify">
    As a sector, we are used to deposits, savings and lending; The Blood Bank is taking those concepts and turning them into a nationwide effort to get more people informed about blood donation and, ultimately, increase the giving thereof. By lending our time and making a different kind of deposit, the financial services market will save lives.
  </p>
  <p className="mt-[15px] sm:mt-[30px] p-[10px] sm:p-[20px] text-[12px] sm:text-[16px] text-center text-justify">
    The Blood Bank, launched in April 2021, believes that it has the ability to harness a large amount of interest from a wide-ranging community of possible donors. The requirement for blood is always high, however, the recommencement of certain procedures now that the Covid-19 vaccine is being rolled out means that demand — especially for certain types of blood and from specific donor demographics — is exceptionally huge.
  </p>
  <p className="mt-[15px] sm:mt-[30px] p-[10px] sm:p-[20px] text-[12px] sm:text-[16px] text-center text-justify">
    The idea was initiated by regular donors Roger Morris, group distribution director at OneSavings Bank; and Tim Vigeon, head of lending at Buckinghamshire Building Society; and Peter Harte, sales development manager at Mortgage Brain. Since then, various trade publications and other industry stakeholders have helped to get it off the ground and build maximum distribution potential.
  </p>
</div>



<div className='pt-0 px-4 sm:px-24 backdrop-blur-lg shadow-md h-auto sm:h-[450px] bg-white'>
  {/* mission and vision */}
  <div>
    <div className="bg-blue-900 rounded-3xl mt-[150px] sm:mt-[550px] sm:mx-auto px-4 sm:px-7 pt-6 w-full max-w-[970px] h-auto sm:flex sm:gap-5 sm:h-[400px]">
      <div className="flex-1">
        <h1 className="text-center text-2xl sm:text-4xl text-white font-bold">
          <i className="fa-solid fa-bullhorn mr-2 sm:mr-4"></i> Our Vision
        </h1>
        <p className="pt-4 sm:pt-6 text-white text-xs sm:text-base">
          Our vision is to create a healthier and more resilient Somali society where no one suffers due to a shortage of blood. We aim to cultivate a culture of regular blood donation, fostering unity, compassion, and responsibility within the community. By building a sustainable and accessible blood donation network, we strive to ensure that life-saving blood is available to all, regardless of location, and to contribute to the overall improvement of public health in Somalia.
        </p>
      </div>

      {/* Divider */}
      <div className="hidden sm:block sm:border-l-2 sm:my-5"></div>

      <div className="flex-1">
        <h1 className="text-center text-2xl sm:text-4xl text-white font-bold">
          <i className="fa-solid fa-bullseye mr-2 sm:mr-4"></i> Our Mission
        </h1>
        <p className="pt-4 sm:pt-6 text-white text-xs sm:text-base">
          Our mission is to bridge the gap between blood donors and those in need across Somalia by providing an easy-to-use, accessible platform for blood donation. We aim to educate and encourage the public about the critical importance of regular blood donations, while empowering individuals to save lives through small acts of kindness. By working closely with medical professionals, hospitals, and the community, we are committed to building a strong, reliable blood supply network that supports both emergency and routine medical needs, ultimately improving the health and well-being of the Somali people.
        </p>
      </div>
    </div>
  </div>
</div>




{/* our voluenter teams */}
<div className='backdrop-blur-lg shadow-md bg-white'>
  <h1 className='text-4xl text-center font-bold mt-8'>Our Volunteer Teams</h1>
  <div className='mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-10 px-4'>
    {[
      { img: Anas, name: "Eng. Anas Abdinasir Ali" },
      { img: shakra, name: "Eng. Abdishakur Dahir Elmi" },
      { img: yusuf, name: "Eng. Yusuf Hassan Hersi" },
      { img: moha, name: "Eng. Mohamed Ahmed Diiriye" },
      { img: Caaqil, name: "Eng. Idiris Mohamed Hussein" },
      { img: SomaliWoman, name: "Drs. Asha Hassan Ahmed" },
    ].map((teamMember, index) => (
      <div key={index} className='w-full max-w-[300px] mx-auto bg-transparent cursor-pointer group perspective'>
        <div className='relative preserve-3d group-hover:my-rotate-y-180 w-full h-[420px] duration-1000'>
          <div className='absolute backface-hidden border-2 w-full h-full'>
            <img className='w-full h-full object-cover' src={teamMember.img} alt={teamMember.name} />
          </div>
          <div className='w-full h-full absolute backface-hidden bg-blue-900 my-rotate-y-180'>
            <div className='text-center flex flex-col items-center justify-center h-full'>
              <h1 className='text-white font-bold text-[20px]'>{teamMember.name}</h1>
              <p className='text-red-500 text-[20px]'>Junior Fullstack Developer</p>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>


{/* google map */}
<div className='bg-white backdrop-blur-lg opacity-80 w-full mt-[0px] h-[650px]'>
    <iframe className="pt-[30px] w-full " src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.88909558375!2d45.31090959165652!3d2.04126784326574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3d58420b91f45b93%3A0xee2da9712473db4c!2sHodan%2C%20Mogadishu!5e0!3m2!1sen!2sso!4v1726666090637!5m2!1sen!2sso" width="1150" height="600" style={{border: "0"}}  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>

<Footer/>
    </div>
  
}

export default About