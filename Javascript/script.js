function time(){
    const clock = ()=>{
        const time= new Date()
        document.getElementById("display").innerHTML= `${time.getHours()}: ${time.getMinutes()}: ${time.getSeconds()}`
    }
    setInterval(clock,1000)
}