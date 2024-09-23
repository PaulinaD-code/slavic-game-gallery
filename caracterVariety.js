let caracterVariety = [
  {
    id: '01',
    name: 'Istoty smokopodobne',
    image: 'img/zmij9.jpg',
    description:'mityczne i fikcyjne stworzenie najczęściej wyobrażane w postaci olbrzymiego i lotnego gada obdarzonego zdolnością ziania ogniem. ',
     connect: '../description/personsDes.html'
  },
  {
    id: '02',
    name: 'Postacie mityczne',
    image: 'img/moriewna13.jpg',
    description:'Postacie ludzkie wystepujące w mitologii słowiańskiej. Ich charakterystyka jest różna w zależności od mitu, w którym wystepują. Można jednak doszukać się pewnych elementów wspólnych tworzących spójny opis poszczególnej postaci. ',
    connect: '../description/personsDes.html'
  },
  {
    id: '03',
    name: 'Rusałki',
    image: 'img/evilmarmed11.png',
    description:'Dzięki ludowym mądrościom wiemy, że rusałkami stawały się dziewczęta, które zmarły jako dziewice, zwłaszcza gdy śmierć nastąpiła nagle w wyniku utonięcia.',
     connect: '../description/personsDes.html'
  },
  {
    id: '04',
    name: 'Demony',
    image: 'img/ma.png',
    description:'byty nadprzyrodzone, które w mitologii słowiańskiej zajmują pozycję pośrednią między bogami a ludźmi, o cechach na wpół ludzkich i na wpół boskich.',
     connect: '../description/demonsDes.html'
  },
  

  {
    id: '05',
    name: 'Dusze pokutujące',
    image: 'img/ognik1.jpg',
    description:'Dusze ludzi zmarłych nienaturalną śmiercią, czyli samobójców, ludzi zmarłych nagłą śmiercią, lub bez spowiedzi. ',
     connect: '../description/personsDes.html'
  },
  {
    id: '06',
    name: 'Dobrotliwe duchy',
    image: 'img/gn8.jpeg',
    description:'Według dawnych wierzeń ludowych istoty nadprzyrodzone zamieszkujące i opiekujące się domostwem. ',
     connect: '../description/goodspiritsDes.html'
  },
  {
    id: '07',
    name: 'Hybrydy',
    image: 'img/alkonostaaa.jpg',
    description:'figury heraldyczne przedstawiające fantastyczną istotę, będącą połączeniem cech zwierząt realnie istniejących lub cech zwierzęcych i ludzkich. ',
     connect: '../description/personsDes.html'
  },

  {
    id: '08',
    name: 'Istoty przeklęte',
    image: 'img/wolf3.jpg',
    description:'Istoty powstałe w yniku rzuconej klątwy.Najczęściej oryginalnie były ludźmi lub formami zbliżonymi do ludzi. ',
     connect: '../description/personsDes.html'
  },
  {
    id: '09',
    name: 'Wampiry',
    image: 'img/nosferatu2.jpg',
    description:'Wampiry były najczęściej przedstawiane jako żeńskie demony przyjmujące ludzką postać, aby móc żerować na śmiertelnikach. Stanowiły one orszak bogini świata podziemnego i magii.',
     connect: '../description/personsDes.html'
  },

]

function renderCaracetVariety(){
  let html = '';

 caracterVariety.forEach((creature)=>{
    html += `
     <div class="item" style="background-image: url('${creature.image}');">
        <div class="content">
          <div class="name">${creature.name}</div>
          <div class="des">${creature.description}</div>
          <button > <a href="${creature.connect}" class="variety-intro-btn">Zobacz więcej</a></button>
         
        </div>
      </div>   
    `

    document.querySelector('.js-variety-slide').innerHTML = html
  })

}

renderCaracetVariety();

let next = document.querySelector('.js-next');
let prev = document.querySelector('.js-prev');

prev.addEventListener('click', ()=>{
  let items = document.querySelectorAll('.item');
  document.querySelector('.slide').appendChild(items[0])
});

next.addEventListener('click', ()=>{
  let items = document.querySelectorAll('.item');
  document.querySelector('.slide').prepend(items[items.length - 1])
});