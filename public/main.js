
const forma = document.getElementById('votos');
forma.addEventListener('submit',(e)=>{
  const choice = document.querySelector('input[name=os]:checked').value;
  const data = {os: choice};

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
  
    localStorage.setItem("rodada1","rodada1");
    document.getElementById("btn").disabled = true;
    document.getElementById("10").disabled = true;
    document.getElementById("9").disabled = true;
    document.getElementById("8").disabled = true;
    document.getElementById("7").disabled = true;
    document.getElementById("6").disabled = true;
    document.getElementById("5").disabled = true;
    document.getElementById("4").disabled = true;
    document.getElementById("3").disabled = true;
    document.getElementById("2").disabled = true;
    document.getElementById("1").disabled = true;
    document.getElementById("20").disabled = true;
    document.getElementById("19").disabled = true;
    document.getElementById("18").disabled = true;
    document.getElementById("17").disabled = true;
    document.getElementById("16").disabled = true;
    document.getElementById("15").disabled = true;
    document.getElementById("14").disabled = true;
    document.getElementById("13").disabled = true;
    document.getElementById("12").disabled = true;
    document.getElementById("11").disabled = true;
    document.getElementById("30").disabled = true;
    document.getElementById("29").disabled = true;
    document.getElementById("28").disabled = true;
    document.getElementById("27").disabled = true;
    document.getElementById("26").disabled = true;
    document.getElementById("25").disabled = true;
    document.getElementById("24").disabled = true;
    document.getElementById("23").disabled = true;
    document.getElementById("22").disabled = true;
    document.getElementById("21").disabled = true;
    document.getElementById("10a").disabled = true;
    document.getElementById("9a").disabled = true;
    document.getElementById("8a").disabled = true;
    document.getElementById("7a").disabled = true;
    document.getElementById("6a").disabled = true;
    document.getElementById("5a").disabled = true;
    document.getElementById("4a").disabled = true;
    document.getElementById("3a").disabled = true;
    document.getElementById("2a").disabled = true;
    document.getElementById("1a").disabled = true;
    document.getElementById("20a").disabled = true;
    document.getElementById("19a").disabled = true;
    document.getElementById("18a").disabled = true;
    document.getElementById("17a").disabled = true;
    document.getElementById("16a").disabled = true;
    document.getElementById("15a").disabled = true;
    document.getElementById("14a").disabled = true;
    document.getElementById("13a").disabled = true;
    document.getElementById("12a").disabled = true;
    document.getElementById("11a").disabled = true;
    document.getElementById("27a").disabled = true;
    document.getElementById("26a").disabled = true;
    document.getElementById("25a").disabled = true;
    document.getElementById("24a").disabled = true;
    document.getElementById("23a").disabled = true;
    document.getElementById("22a").disabled = true;
    document.getElementById("21a").disabled = true;
    location.reload();

    e.preventDefault();
});

fetch('http://localhost:8081/enquete')
    .then(res => res.json())
    .then(data => {
        const testesCraque = data.testesCraque;
        const totalTestesCraque = testesCraque.length;
        
        const testeCountsCraque = testesCraque.reduce((acc,testeCraque) => ((acc[testeCraque.os] = (acc[testeCraque.os] || 0) + parseInt(testeCraque.points)),acc),{});
      //votos no console

      //time1
            console.log("TIME 1");
            console.log("Adrian Lucas Ribeiro Sousa"+" = "+testeCountsCraque.A);
            console.log("Adriano da Silva Ananias"+" = "+testeCountsCraque.B);
            console.log("Alex Júnior Martins de Oliveira"+" = "+testeCountsCraque.C);
            console.log("Bruno Teodoro Lopes"+" = "+testeCountsCraque.D);
            console.log("Bruno Henrique Gonçalves"+" = "+testeCountsCraque.E);
            console.log("Caique Júnior Messias"+" = "+testeCountsCraque.F);
            console.log("Cassio Henrique Messias"+" = "+testeCountsCraque.G);
            console.log("Danilo Eurides Perpétuo"+" = "+testeCountsCraque.H);
            console.log("Dione Carlos da Silva"+" = "+testeCountsCraque.I);
            console.log("Denilson Cardoso"+" = "+testeCountsCraque.J);
            console.log("Douglas Braga Reginaldo"+" = "+testeCountsCraque.k);
            console.log("Eduardo Gonzaga da Silva"+" = "+testeCountsCraque.l);
            console.log("Eduardo Henrique Viana"+" = "+testeCountsCraque.m);
            console.log("Ernando dos Reis Lima"+" = "+testeCountsCraque.n);
            console.log(" Guilherme Rodrigues Costa Silva"+" = "+testeCountsCraque.o);
            console.log("Ilson Jacinto"+" = "+testeCountsCraque.p);
            console.log("Júlio Cesar Diogo"+" = "+testeCountsCraque.q);
            console.log("Leandro dos Reis Lima"+" = "+testeCountsCraque.r);
            console.log("Luiz Guilherme Paiva Tobias"+" = "+testeCountsCraque.s);
            console.log("Marcus Júnior da Silva Ananias"+" = "+testeCountsCraque.t);
            console.log("Marcos Vinicius Borges"+" = "+testeCountsCraque.u);
            console.log("Patrick Roger Sousa"+" = "+testeCountsCraque.v);
            console.log("Pedro Henrique Mendes Martins"+" = "+testeCountsCraque.w);
            console.log("Rafael Pereira Lopes"+" = "+testeCountsCraque.x);
            console.log("Washington Júnior Ferreira"+" = "+testeCountsCraque.y);
            console.log("Washington Sebastião Malaquias"+" = "+testeCountsCraque.z);
            console.log("Wueverton Silva Moraes"+" = "+testeCountsCraque.ç);
            //time2
            console.log("TIME 2");
            console.log("Alberto de Moraes"+" = "+testeCountsCraque.A2);
            console.log("Alejandro Aparecida Simão"+" = "+testeCountsCraque.B2);
            console.log("Aleff Ananias de C. Oliveira"+" = "+testeCountsCraque.C2);
            console.log("Álvaro Henrique Ribeiro"+" = "+testeCountsCraque.D2);
            console.log("André Luis Moreira Costa"+" = "+testeCountsCraque.E2);
            console.log("Daniel José dos Santos"+" = "+testeCountsCraque.F2);
            console.log("Douglas Ferreira"+" = "+testeCountsCraque.G2);
            console.log("Eduardo Jesus"+" = "+testeCountsCraque.H2);
            console.log("Eduardo Henrique"+" = "+testeCountsCraque.I2);
            console.log("Fábio Eduardo"+" = "+testeCountsCraque.J2);
            console.log("Felipe Gabriel da Silva"+" = "+testeCountsCraque.k2);
            console.log("Felipe Mateus M. Resende"+" = "+testeCountsCraque.l2);
            console.log("Gabriel de Moraes Rufino"+" = "+testeCountsCraque.m2);
            console.log("Helder Junio Costa de Moura"+" = "+testeCountsCraque.n2);
            console.log("Henrique Crescêcio de Fátima"+" = "+testeCountsCraque.o2);
            console.log("Ivander Dias Santos"+" = "+testeCountsCraque.p2);
            console.log("Jonathan Cássio A. Mateus"+" = "+testeCountsCraque.q2);
            console.log("Luís Alberto Silva"+" = "+testeCountsCraque.r2);
            console.log("Luís Carlos Lázaro da Silva"+" = "+testeCountsCraque.s2);
            console.log("Luís Felipe Santos Silva"+" = "+testeCountsCraque.t2);
            console.log("Lucas Eduardo Beraldo De Oliveira"+" = "+testeCountsCraque.u2);
            console.log("Paulo César Santos Lopes"+" = "+testeCountsCraque.v2);
            console.log("Rafael Eduardo Santos"+" = "+testeCountsCraque.w2);
            console.log("Thaison Eduardo de Moraes Silva"+" = "+testeCountsCraque.x2);
            console.log("Wagner Santos Oliveira"+" = "+testeCountsCraque.y2);
            console.log("Wallyson Ananias de Oliveira"+" = "+testeCountsCraque.z2);
            console.log("Wellington Costa Rafael"+" = "+testeCountsCraque.ç2);
            console.log("Werley Mateus N. C."+" = "+testeCountsCraque.ça2);
            console.log("Weslei Carlos da Silva"+" = "+testeCountsCraque.çb2);
            console.log("Yuri Santos Reis"+" = "+testeCountsCraque.çc2);





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

