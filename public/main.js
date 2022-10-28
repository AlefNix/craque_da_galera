
const forma = document.getElementById('votos');
forma.addEventListener('submit',(e)=>{
  const choice = document.querySelector('select[name=os]').value;
  const data = {os: choice};
  console.log(choice);

  fetch('http://localhost:8081/enquete',{
    method: 'post',
    body: JSON.stringify(data),
    headers: new Headers({
        'Content-type': 'application/json'
    })
  })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
  
    localStorage.setItem("jogo28/10","jogo28/10");
    Cookies.set('jogo28/10', 'jogo28/10', { expires: 9999 });
    document.getElementById("btn").disabled = true;
    location.reload();

    e.preventDefault();
});

fetch('http://localhost:8081/enquete')
    .then(res => res.json())
    .then(data => {
        const testesCraque = data.testesCraque;
        //const totalTestesCraque = testesCraque.length;
        
        const testeCountsCraque = testesCraque.reduce((acc,testeCraque) => ((acc[testeCraque.os] = (acc[testeCraque.os] || 0) + parseInt(testeCraque.points)),acc),{});
      //votos no console

            console.log("Aliança - Caio"+" = "+testeCountsCraque.A);
            console.log("Bangu - Lango"+" = "+testeCountsCraque.B);
            console.log("Barreiro - Helton Jhon"+" = "+ testeCountsCraque.C);
            console.log("Benfica - Rodrigo"+" = "+ testeCountsCraque.D);
            console.log("Cantareira - Quinho"+" = "+ testeCountsCraque.E);
            console.log("Dom Bosco - Bernado Augusto"+" = "+ testeCountsCraque.F);
            console.log("Internacional - Bruno"+" = "+ testeCountsCraque.G);
            console.log("Sparta - Sorin"+" = "+ testeCountsCraque.H);
            console.log("São Salvador -  Goe"+" = "+ testeCountsCraque.I);
            console.log("São Cristóvão - Welligton Gorila"+" = "+ testeCountsCraque.J);
            console.log("União F.C. - Verton"+" = "+ testeCountsCraque.K);
            console.log("União E.C.- Tchuck"+" = "+ testeCountsCraque.L);


            Pusher.logToConsole = true;
        
            var pusher = new Pusher('cfa4b06555370ffa6124', {
              cluster: 'sa1',
              useTLS: true
            });
        
            var channel = pusher.subscribe('enquete');
            channel.bind('votacao', function(data) {
              dataPoints = dataPoints.map(x =>{
                if(x.label == data.os){
                    x.y += data.points;
                    return x;
                }else{
                    return x;
                }
              })
              chart.render();
            });
        }
    );

