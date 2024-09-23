let caracterVariety = [
    {
      id: '01',
      name: 'Dragon-like creatures',
      image: 'img/zmij9.jpg',
      description:'a mythical and fictional creature most often imagined in the form of a huge and volatile reptile endowed with the ability to breathe fire. ',
       connect: '../description/personsDes.html'
    },
    {
      id: '02',
      name: 'Mythical figures',
      image: 'img/moriewna13.jpg',
      description:'Human figures appearing in Slavic mythology. Their characteristics vary depending on the myth in which they appear. However, you can find some common elements that create a coherent description of a particular character. ',
      connect: '../description/personsDes.html'
    },
    {
      id: '03',
      name: 'Rusalki',
      image: 'img/evilmarmed11.png',
      description:'Thanks to folk wisdom, we know that girls who died as virgins became mermaids, especially when their death occurred suddenly as a result of drowning.',
       connect: '../description/personsDes.html'
    },
    {
      id: '04',
      name: 'Demons',
      image: 'img/ma.png',
      description:'supernatural beings who in Slavic mythology occupy an intermediate position between gods and humans, with half-human and half-divine features.',
       connect: '../description/demonsDes.html'
    },
    
  
    {
      id: '05',
      name: 'Penitent souls',
      image: 'img/ognik1.jpg',
      description:'Souls of people who died an unnatural death, i.e. suicides, people who died suddenly or without confession. ',
       connect: '../description/personsDes.html'
    },
    {
      id: '06',
      name: 'Benevolent spirits',
      image: 'img/gn8.jpeg',
      description:'According to ancient folk beliefs, supernatural beings inhabit and take care of the household. ',
       connect: '../description/goodspiritsDes.html'
    },
    {
      id: '07',
      name: 'Hybrids',
      image: 'img/alkonostaaa.jpg',
      description:'heraldic figures depicting a fantastic creature that is a combination of features of real animals or animal and human features.',
       connect: '../description/personsDes.html'
    },
  
    {
      id: '08',
      name: 'Cursed creatures',
      image: 'img/wolf3.jpg',
      description:'Creatures created as a result of a curse. Most often, they were originally humans or human-like forms. ',
       connect: '../description/personsDes.html'
    },
    {
      id: '09',
      name: 'Vampires',
      image: 'img/nosferatu2.jpg',
      description:'Vampires were most often depicted as female demons taking human form in order to prey on mortals. They were the retinue of the goddess of the underworld and magic.',
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
            <button > <a href="${creature.connect}" class="variety-intro-btn">See more</a></button>
           
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