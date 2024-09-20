import React, { useEffect } from "react";
import Video from "../components/images/video.mp4";
import doctors from "../Components/images/doctors-day.png";
import blood from "../Components/images/blood-drop.png";

import Header from "./pages/Header";
import Footer from "./Footer";
import Marquee from "react-fast-marquee"
import { TypeAnimation } from "react-type-animation";
import { Link, useNavigate } from "react-router-dom";
import Irise from "./images/Irise.png"
import Rise from "./images/Rise.png"
import  ministry from "./images/ministry.png"
import  who  from "./images/who.png"

function Home() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  // Handle user logout
  // const handleLogout = () => {
  //   localStorage.removeItem("user"); // Clear user data
  //   navigate("/"); // Redirect to home page
  // };

  return (
    <div>
      <Header user={user} />
      {/* Hero Section */}
      <div className="">
        
        <video className="w-full relative" autoPlay loop muted>
          <source src={Video} type="video/mp4" />
        </video>
        <div className="">
  <h1 className="text-white text-[50px] absolute top-[280px]  left-[140px] font-bold hover:text-red-500 sm:text-[30px] sm:top-[150px] sm:left-[500px]">
    Sadaqeyso Dhiig oo badbaadi Naf
  </h1>
  {!user ? (
    <div className="absolute top-[80px] flex left-[50px] sm:top-[300px] sm:left-[500px]">
      <Link to="/userLogin">
        <button className="ml-4 p-2 text-white text-2xl bg-red-500 hover:border-white hover:border-2 w-[150px] font-bold rounded-lg hover:bg-transparent sm:w-[150px] sm:text-lg">
          Log in
        </button>
      </Link>
      <Link to="/userSign">
        <button className="ml-4 p-2 text-white text-2xl bg-transparent border-2 border-white hover:border-2 hover:border-red-500 w-[150px] font-bold rounded-lg hover:bg-red-500 sm:w-[150px] sm:text-lg">
          Register
        </button>
      </Link>
    </div>
  ) : (
    ""
  )}
  {user && (
    <div className="absolute top-[80px] mt-16 left-[50px] sm:top-[300px] sm:left-[500px]">
      <Link to="/register">
        <button className="ml-4 p-2 text-white text-2xl bg-transparent border-2 border-white hover:border-red-500 w-[300px] font-bold rounded-lg hover:bg-red-500 sm:w-[400px] sm:text-lg">
          Donate Blood
        </button>
      </Link>
    </div>
  )}
</div>


        <div className="w-full h-[100vh] bg-white backdrop-blur-md bg-opacity-60 shadow">
  <div className="">
    <h1 className="font-bold text-blue-900 text-2xl md:text-3xl pt-[30px] pl-[20px] md:pl-[50px]">
      Faidada ay kuu leedahay inaad Dhiig Sadaqeysato
    </h1>
    <img
      className="absolute bottom-0 h-[200px] md:h-[559px] ml-[20px] md:ml-[450px] hover:scale-125 duration-300"
      src={doctors}
      alt=""
    />
  </div>

  {/* Cards */}
  <div className="flex flex-wrap gap-4 md:gap-10 ml-2 mt-6 justify-center md:justify-start">
    <div className="bg-gradient-to-r from-red-400 rounded-md to-blue-100 backdrop-blur-lg bg-opacity-60 w-[250px] md:w-[300px] py-2">
      <img
        className="w-[40px] md:w-[50px] m-auto animate-ping duration-700"
        src={blood}
        alt=""
      />
      <h1 className="font-bold text-lg md:text-xl text-center text-red-500 px-2">
        Waxa Kor u qaadma caafimaadkag wadnaha
      </h1>
    </div>

    <div className="bg-gradient-to-r from-red-400 rounded-md to-blue-100 backdrop-blur-lg bg-opacity-60 w-[250px] md:w-[300px] py-2">
      <img
        className="w-[40px] md:w-[50px] m-auto animate-ping duration-700"
        src={blood}
        alt=""
      />
      <h1 className="font-bold text-lg md:text-xl text-center text-red-500 px-2">
        Cusboonaysiinta unugyada dhiigga
      </h1>
    </div>

    <div className="bg-gradient-to-r from-red-400 rounded-md to-blue-100 backdrop-blur-lg bg-opacity-60 w-[250px] md:w-[300px] py-2">
      <img
        className="w-[40px] md:w-[50px] m-auto animate-ping duration-700"
        src={blood}
        alt=""
      />
      <h1 className="font-bold text-lg md:text-xl text-center text-red-500 px-2">
        Kor u qaadidda caafimaadka maskaxda iyo dareenka wanaagsan
      </h1>
    </div>
  </div>
</div>



      </div>

      <section className="text-center bg-white py-12">
  <h3 className="text-2xl md:text-7xl font-bold text-red-500 mb-10">
    Faa'iidada ay u leedahay Bulshada in dhiig la sadaqeyso?
  </h3>

  <div className="flex flex-wrap justify-center">
    {/* <!-- First Block (Left to Right Animation) --> */}
    <div className="bg-red-600 relative w-full sm:w-[400px] mx-5 h-[300px] text-white p-6 mb-6 transition-transform transform hover:scale-105 hover:translate-y-10 hover:border-2 hover:border-red-600 hover:text-red-600 hover:bg-white border border-transparent ease-in-out duration-500">
      <h4 className="text-lg md:text-xl pt-6 font-bold">Badbaadinta nolosha</h4>
      <p className="mt-4 hover:text-black transition-colors duration-300">
        Dhiigga la sadaqeynta wuxuu ka badbaadin karaa dad badan oo qaba xaalado deg-deg ah sida shilalka, qalliinka, ama xaaladaha caafimaad.
      </p>
      <i className="fa-solid fa-bed w-[50px] h-[50px] absolute text-3xl top-2 left-1/2 transform -translate-x-1/2"></i>
    </div>

    {/* <!-- Second Block (Right to Left Animation) --> */}
    <div className="bg-red-600 relative w-full sm:w-[400px] mx-5 h-[300px] text-white p-6 mb-6 transition-transform transform hover:scale-105 hover:-translate-x-10 hover:border-2 hover:border-red-600 hover:text-red-600 hover:bg-white border border-transparent ease-in-out duration-500">
      <h4 className="text-lg md:text-xl pt-6 font-bold">
        Caawinta bukaannada cudurrada dhiigga qaba
      </h4>
      <p className="mt-4 hover:text-black transition-colors duration-300">
        Bukaannada qaba xaaladaha dhiigga sida ku-sumowga, cudurka 'thalassemia', iyo anemia waxay iyana baahi badan u qabaan dhiig.
      </p>
      <i className="fa-solid fa-truck-medical w-[50px] h-[50px] absolute text-3xl top-2 left-1/2 transform -translate-x-1/2"></i>
    </div>

    {/* <!-- Third Block (Left to Right Animation) --> */}
    <div className="bg-red-600 relative w-full sm:w-[400px] mx-5 h-[300px] text-white p-6 mb-6 transition-transform transform hover:scale-105 hover:translate-y-10 hover:border-2 hover:border-red-600 hover:text-red-600 hover:bg-white border border-transparent ease-in-out duration-500">
      <h4 className="text-lg md:text-xl pt-6 font-bold">Caafimaadka bulshada</h4>
      <p className="mt-2 hover:text-black transition-colors duration-300">
        Dhiigga la sadaqeynta waxaa laga yaabaa in la isticmaalo haddii ay jirto xaalad degdeg ah oo qaraxyo, musiibooyin ama cudurro ka dhaca bulshada dhexdeeda.
      </p>
      <i className="fa-solid fa-person-rays w-[50px] h-[50px] absolute text-3xl top-2 left-1/2 transform -translate-x-1/2"></i>
    </div>

    {/* <!-- Fourth Block (Right to Left Animation) --> */}
    <div className="bg-red-600 relative w-full sm:w-[400px] mx-5 h-[300px] text-white p-6 mb-6 transition-transform transform hover:scale-105 hover:-translate-y-10 hover:border-2 hover:border-red-600 hover:text-red-600 hover:bg-white border border-transparent ease-in-out duration-500">
      <h4 className="text-lg md:text-xl pt-6 font-bold">
        Caafimaadka maskaxda iyo dareenka
      </h4>
      <p className="mt-2 hover:text-black transition-colors duration-300">
        Dhiigga sadaqeynta wuxuu ku siin karaa dareen farxad ah iyo caafimaad maskaxeed oo wanaagsan. Waxaa lagu dareemi karaa inaad caawineyso bulshada.
      </p>
      <i className="fa-solid fa-brain w-[50px] h-[50px] absolute text-3xl top-2 left-1/2 transform -translate-x-1/2"></i>
    </div>
  </div>
</section>


      
   
   {/* Qeybtaan waa text writer animation */}

   <div className="bg-white w-full md:w-[1200px] rounded-[10px] shadow-lg ml-2 md:ml-[30px] h-[150px]">
</div>
<div className="relative top-[-140px] text-center">
  <h1 className="text-center text-2xl md:text-4xl text-blue-900 font-bold">
    Shuruudaha qofka raba inuu dhiig shubo
  </h1>
  <div className="text-black mt-[20px]">
    <TypeAnimation
      sequence={[
        "Waa in uu qofka uu yahay 18-60 jir.",
        1000,
        "Waa in uu ka miisaan badan yahay 50 kg, si uu si nabad ah ugu shubi karo dhiig.",
        1000,
        "Waa in uu qofka dhiigga bixinaya uusan lahayn cudurro halis ah.",
        1000,
        "Waa in uu Hemoglobin-ka dhiigga ahada ugu yaraan 12.5 g/dl si loga fogado anemia.",
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1.25em', display: 'inline-block' }}
      repeat={Infinity}
    />
  </div>
</div>


{/* qeybtaan waa qeybta loogooyinka soconaya */}

<div className="relative top-[-50px] ">
    <h1 className="text-center text-3xl font-bold">Our Sponsors</h1>

<div className="mt-[20px] ">
    <Marquee direction="left" speed={50} gradient={true}>
        <div className="bg-white w-[250px] h-[150px] shadow-lg ">
            <img className=" w-[250px] h-[250px] absolute top-[-60px]" src={who} alt="" />
        </div>
        <div className="bg-white w-[250px] h-[150px] shadow-lg flex justify-center ml-8">
            <img className="w-[100px] h-[100px] mt-[20px] " src={ministry} alt="" />
        </div>
        <div className="bg-white w-[250px] h-[150px] shadow-lg flex justify-center ml-8 ">
            <img className="w-[250px] h-[250px] absolute top-[-60px] " src={Rise} alt="" />
        </div>
        <div className="bg-white w-[250px] h-[150px] shadow-lg flex justify-center ml-8 ">
            <img className="w-[150px] h-[150px] pb-[0px] -" src={Irise} alt="" />
        </div> 
    </Marquee>
    

</div>
</div>

      <Footer />
    </div>
  );
}

export default Home;
