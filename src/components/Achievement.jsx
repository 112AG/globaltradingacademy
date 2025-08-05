import React from 'react'

function Achievement() {
    const certificates = [];
  return (
    <div className='pt-[233px]'>
        <h1
          className="w-[739px] mx-auto h-[123px] text-center text-[48px] font-[900] leading-[55px] uppercase text-white"
        >
          <span           style={{
            background: 'linear-gradient(90deg, #c4ffb0 0%, #82e95f 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            color: 'transparent'
          }}>ACHIEVEMENTS</span> THAT SPEAK FOR THEMSELVES.
        </h1>
        <p className='w-[963px] mx-auto h-[139px] text-white text-[20px] text-center font-[700] leading-[27px]'>Backed by results you can see: verified certificates, funded accounts, and real milestones  from our growing trading community.</p>
        
        <div>
            
        <div
        className="w-[418px] lg:w-[360px] 2xl:w-[418px] h-[589px] py-[16px] px-[26px] flex flex-col justify-center items-center text-white"
        style={{
          background:
            "linear-gradient(92deg, rgba(130, 233, 95, 0.14) 5.1%, rgba(131, 234, 96, 0.31) 83.56%)",
          boxShadow: "0 4px 50px 0 rgba(92, 239, 0, 0.24)",
          backdropFilter: "blur(12.5px)",
          WebkitBackdropFilter: "blur(12.5px)",
        }}
        ></div>
        </div>
    </div>
  )
}

export default Achievement