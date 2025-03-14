import tourImg1 from '../src/images/tour-1.jpeg'
import tourImg2 from '../src/images/tour-2.jpeg'
import tourImg3 from '../src/images/tour-3.jpeg'
import tourImg4 from '../src/images/tour-4.jpeg'

export const pageLinks = [
  {id: 1, href: '#home', text: 'home'},
  {id: 2, href: '#about', text: 'about'},
  {id: 3, href: '#services', text: 'services'},
  {id: 4, href: '#tours', text: 'tours'}
];

export const socialLinks = [
  {id: 1, href: 'https://www.twitter.com', icon: 'fab fa-facebook'},
  {id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter'},
  {id: 3, href: 'https://www.twitter.com', icon: 'fab fa-squarespace'}
];

export const services = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.\n' +
      '              Asperiores, officia.'
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    title: 'endless hiking',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.\n' +
      '              Asperiores, officia.'
  },
  {
    id: 3,
    icon: 'fas fa-socks fa-fw',
    title: 'amazing comfort',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.\n' +
      '              Asperiores, officia.'
  }
];

export const tours = [
  {
    id: 1,
    image: tourImg1,
    date: 'august 26th, 2020',
    title: 'tibet Adventure',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque\n' +
      '              vitae tempore voluptatum maxime reprehenderit eum quod\n' +
      '              exercitationem fugit, qui corporis.',
    location: 'China',
    duration: '6 days',
    price: 'from $2100'
  },
  {
    id: 2,
    image: tourImg2,
    date: 'october 1th, 2020',
    title: 'best of java',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque\n' +
      '              vitae tempore voluptatum maxime reprehenderit eum quod\n' +
      '              exercitationem fugit, qui corporis.',
    location: 'indonesia',
    duration: '11 days',
    price: 'from $1600'
  },
  {
    id: 3,
    image: tourImg3,
    date: 'september 15th, 2020',
    title: 'explore hong kong',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque\n' +
      '              vitae tempore voluptatum maxime reprehenderit eum quod\n' +
      '              exercitationem fugit, qui corporis.',
    location: 'hong kong',
    duration: '8 days',
    price: 'from $3000'
  },
  {
    id: 4,
    image: tourImg4,
    date: 'may 4th, 2020',
    title: 'kenya highlights',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque\n' +
      '              vitae tempore voluptatum maxime reprehenderit eum quod\n' +
      '              exercitationem fugit, qui corporis.',
    location: 'kenya',
    duration: '10 days',
    price: 'from $2500'
  }
];

