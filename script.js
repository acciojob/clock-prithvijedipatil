window.onload = () => {

    setInterval(update,1000);
}

function update(){

    const disp = document.getElementById('timer');
    const curr = new Date();

    const dateop = { weekday :'long' , year:'numeric', month:'long', day:'numeric'};
    const timeop = {hour :'numeric', minute:'numeric',second:'numeric',hour12:true};

    const date1 = curr.toLocaleDateString(undefined,dateop);
    const time1 = curr.toLocaleTimeString(undefined,timeop);

    disp.innerHTML = `${date1} , ${time1}`;
}