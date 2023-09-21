
const BackgroundCircles = () => {
  return (
    <div className="relative flex justify-center items-center top-16">
        {/* Inner Circle */}
      <div className="absolute border border-[#FFFF] h-[200px] w-[200px] rounded-full mt-52 animate-ping" />
      <div className="absolute border-[#FFFF] h-[200px] w-[200px] rounded-full mt-52" />
      <div className="absolute border-[#FFFF] h-[200px] w-[200px] rounded-full mt-52" />
      {/* Outer Circle */}
      <div className="absolute border border-[#F7AB0A] h-[650px] w-[650px] rounded-full mt-52 animate-pulse"/>
      <div className="absolute border-[#FFFF] h-[800px] w-[800px] rounded-full mt-52"/>
    </div>
  )
}

export default BackgroundCircles;
