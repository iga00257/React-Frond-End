function DashboardComponent(){

  function SwitchDashBoard(){
    return(
      <>
      <button className=' h-8 mr-3 flex items-center  focus:bg-black focus:text-secondary'>Manny's Dashboard</button>
      </>
    )
  }
    return(
        <div className=' overflow-x-scroll ml-9 h-12 flex items-center'>
            <SwitchDashBoard/>
            <SwitchDashBoard/>
            <SwitchDashBoard/>
            <SwitchDashBoard/>
            <SwitchDashBoard/>
            <SwitchDashBoard/>
            <SwitchDashBoard/>
         </div>
    )
}

export default DashboardComponent