import React from 'react';
import './Images.css';
import ImagePopup from './Popup';

const cards = [
  {
    image: 'https://images.unsplash.com/photo-1524578271613-d550eacf6090?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJvb2tzfGVufDB8fDB8fHww',
    alt: 'Books',
    authorImage: 'https://images.unsplash.com/profile-1656733325746-40f80857c806image?bg=fff&crop=faces&dpr=1&h=32&w=32&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    authorName: 'Nick Fewings',
    likes: 209,
    views: '90.9k',
  },
  {
    image: 'https://plus.unsplash.com/premium_photo-1663835910976-cc2a4b8a96f7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Drawing',
    authorImage: 'https://images.unsplash.com/profile-1648828806223-1852f704c58aimage?bg=fff&crop=faces&dpr=1&h=16&w=16&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    authorName: 'Jane Brown',
    likes: 897,
    views: '42.9k',
  },
  {
    image: 'https://images.unsplash.com/photo-1526142684086-7ebd69df27a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHZpb2xpbnxlbnwwfHwwfHx8MA%3D%3D',
    alt: 'Violin',
    authorImage: 'https://images.unsplash.com/profile-1700605284178-24ef711a3fcaimage?bg=fff&crop=faces&dpr=1&h=32&w=32&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    authorName: 'Heflon Ton',
    likes: 307,
    views: '35.8k',
  },
  {
    image: 'https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FydG9vbnN8ZW58MHx8MHx8fDA%3D',
    alt: 'Minion',
    authorImage: 'https://images.unsplash.com/profile-1587557506333-b29d27a9e277image?bg=fff&crop=faces&dpr=1&h=32&w=32&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    authorName: 'Alison Wang',
    likes: 448,
    views: '90k',
  },
  {
    image: 'https://images.unsplash.com/photo-1590273466070-40c466b4432d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Trees and Woods',
    authorImage: 'https://images.unsplash.com/profile-1493320375113-8d776e646fd0?bg=fff&crop=faces&dpr=1&h=32&w=32&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    authorName: 'Johannes Plenio',
    likes: 908,
    views: '89k',
  },
  {
    image: 'https://images.unsplash.com/photo-1536623975707-c4b3b2af565d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVkaXRhdGlvbnxlbnwwfHwwfHx8MA%3D%3D',
    alt: 'Peace',
    authorImage: 'https://images.unsplash.com/profile-1549626490357-32da1bcb28ff?bg=fff&crop=faces&dpr=1&h=32&w=32&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    authorName: 'Colton Sturgeon',
    likes: 144,
    views: '32k',
  },
  {
    image: 'https://images.unsplash.com/photo-1564630322990-4a9e93d13946?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhhbmR3cml0aW5nfGVufDB8fDB8fHww',
    alt: 'Calligraphy',
    authorImage: 'https://images.unsplash.com/profile-1670718713383-8618729ad715?bg=fff&crop=faces&dpr=1&h=32&w=32&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    authorName: 'Judith Browne',
    likes: 567,
    views: '7.7k',
  },
  {
    image: 'https://images.unsplash.com/1/macbook-air-iphone-moleskin.jpg?q=80&w=1488&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Laptops',
    authorImage: 'https://images.unsplash.com/profile-1554128916364-8b63bfef2e91?bg=fff&crop=faces&dpr=1&h=32&w=32&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    authorName: 'Alejandro Escamilla',
    likes: 356,
    views: '8k',
  },
  {
    image: 'https://images.unsplash.com/photo-1570626742839-59acd9822944?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Phones',
    authorImage: 'https://images.unsplash.com/profile-1570459350594-2544a8d74fc5image?bg=fff&crop=faces&dpr=1&h=32&w=32&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    authorName: 'Luke Lung',
    likes: 817,
    views: '34.5k',
  },
  {
    image: 'https://images.unsplash.com/photo-1527903789995-dc8ad2ad6de0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJhZ3JhbmNlfGVufDB8fDB8fHww',
    alt: 'Fragrance',
    authorImage: 'https://images.unsplash.com/profile-1686162881418-8cd60dbb266aimage?bg=fff&crop=faces&dpr=1&h=32&w=32&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    authorName: 'Paul Auston',
    likes: 789,
    views: '2.3k',
  },
  {
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Paints',
    authorImage: 'https://images.unsplash.com/profile-1575693732694-cc2003e2fbc4image?bg=fff&crop=faces&dpr=1&h=32&w=32&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    authorName: 'Steve Johnson',
    likes: 765,
    views: '5.4k',
  }, {
    image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW5pbWV8ZW58MHx8MHx8fDA%3D',
    alt: 'Anime',
    authorImage: 'https://images.unsplash.com/profile-1705480099173-b6e90435c526image?bg=fff&crop=faces&dpr=1&h=32&w=32&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    authorName: 'Tim Mossholder',
    likes: '999',
    views: '99k',
  },
  {
    image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Anime Stickers',
    authorImage: 'https://images.unsplash.com/profile-1690947145947-5ff8f92360d8image?bg=fff&crop=faces&dpr=1&h=32&w=32&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    authorName: 'Gracia Dharma',
    likes: '187',
    views: '5.8k',
  },
  {
    image: 'https://images.unsplash.com/photo-1589561253898-768105ca91a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cXVvdGVzfGVufDB8fDB8fHww',
    alt: 'Quotes',
    authorImage: 'https://images.unsplash.com/profile-1542893119878-f06efe455f6a?bg=fff&crop=faces&dpr=1&h=32&w=32&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    authorName: 'Mika Baumeister',
    likes: '554',
    views: '5.6k',
  },
  {
    image: 'https://images.unsplash.com/photo-1627807452502-0c8329fc710b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Machines',
    authorImage: 'https://images.unsplash.com/profile-1716388541581-d6270b456c28image?bg=fff&crop=faces&dpr=1&h=32&w=32&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    authorName: 'Mike Hindle',
    likes: '241',
    views: '1k',
  },
  {
    image: 'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29sb3JzfGVufDB8fDB8fHww',
    alt: 'Bg Colors',
    authorImage: 'https://images.unsplash.com/profile-1639041071160-72e401f7a951image?bg=fff&crop=faces&dpr=1&h=32&w=32&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    authorName: 'Efe Kurnaz',
    likes: '436',
    views: '2.5k',
  },
  {
    image: 'https://images.unsplash.com/photo-1480694313141-fce5e697ee25?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1vYmlsZXxlbnwwfHwwfHx8MA%3D%3D',
    alt: 'Mobile ',
    authorImage: 'https://images.unsplash.com/profile-fb-1480694266-f228e9a1de2a.jpg?bg=fff&crop=faces&dpr=1&h=32&w=32&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    authorName: 'Rami Al-zayat',
    likes: '998',
    views: '9.7k',
  },
  {
    image: 'https://images.unsplash.com/photo-1495364141860-b0d03eccd065?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGltZXxlbnwwfHwwfHx8MA%3D%3D',
    alt: 'Time Control',
    authorImage: 'https://images.unsplash.com/profile-1494586455964-faceafd44a6f?bg=fff&crop=faces&dpr=1&h=32&w=32&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    authorName: 'Lukas Blazek',
    likes: '785',
    views: '2k',
  },
  {
    image: 'https://images.unsplash.com/photo-1582538883349-a0c1c74589b7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Keychain',
    authorImage: 'https://images.unsplash.com/profile-1562947793246-6f1ccf9383cf?bg=fff&crop=faces&dpr=1&h=32&w=32&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    authorName: 'Markus Winkler',
    likes: '457',
    views: '5k',
  },
  {
    image: 'https://images.unsplash.com/photo-1480044965905-02098d419e96?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJpcmRzfGVufDB8fDB8fHww',
    alt: 'Bird',
    authorImage: 'https://images.unsplash.com/profile-1470119415572-4c671c554a9e?bg=fff&crop=faces&dpr=1&h=32&w=32&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    authorName: 'Boris Smokrovic',
    likes: '675',
    views: '1.9k',
  },
  {
    image: 'https://images.unsplash.com/photo-1623474237394-055b5c5b9095?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJ1dHRlcmZseXxlbnwwfHwwfHx8MA%3D%3D',
    authorImage: 'https://images.unsplash.com/profile-1667326507175-6f167c6e994bimage?bg=fff&crop=faces&dpr=1&h=32&w=32&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    authorName: 'Andra C Taylor Jr',
    likes: '689',
    views: '9.1k',
  },
];


function App() {
  return (
    <div className="app">
      {cards.map((card, index) => (
        <div className="card" key={index}>
          <div className="image">
            <ImagePopup 
              src={card.image} 
              alt={card.alt} 
              likes={card.likes} 
              views={card.views} 
              authorName={card.authorName} 
              authorImage={card.authorImage}
            />
          </div>
          <div className="info">
            <div className="author">
              <img src={card.authorImage} alt="Profile picture" />
              <span>{card.authorName}</span>
            </div>
            <div className="stats">
              <span>❤️{card.likes}</span>
              <span>👁️{card.views}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
