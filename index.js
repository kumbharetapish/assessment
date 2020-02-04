const cartData = [
  {
    id: 1,
    imgSrc: "https://i.vimeocdn.com/video/600595198_390x220.webp",
    name: "Croissants | Flour and Stone"
  },
  {
    id: 2,
    imgSrc: "https://i.vimeocdn.com/video/604150056_390x220.webp",
    name: "Perfect Mashed Potatoes and Gravy"
  },
  {
    id: 3,
    imgSrc: "https://i.vimeocdn.com/video/726986673_390x220.webp",
    name: "The Heart of Soba"
  },

  {
    id: 4,
    imgSrc: "https://i.vimeocdn.com/video/570486309_390x220.webp",
    name: "Grilled Cheese 9 Ways"
  },
  {
    id: 5,
    imgSrc: "https://i.vimeocdn.com/video/602705517_390x220.webp",
    name: "Pineapple Cheesecake"
  },

  {
    id: 6,
    imgSrc: "https://i.vimeocdn.com/video/537261616_390x220.jpg",
    name: "Lemony Chicken Noodle Soup"
  }
];

const videoCard = document.getElementById("video-card-grid");

const renderVideoCart = () => {
  cartData.map((newData, i) => videoCard.appendChild(createCart(newData, i)));
  // for(let i =0; i<= data.length;i++){

  // }
};

const createCart = (newData, i) => {
  newData.map(data => {
    const cart = document.createElement("div");
    cart.classList = "playlist-card active-card";

    const cartImg = document.createElement("img");
    cartImg.className = "thumbnail";
    cartImg.src = data.imgSrc;

    const cartTitle = document.createElement("h3");
    cartTitle.className = "video-card-title";
    cartTitle.innerHTML = data.name;

    cart.appendChild(cartImg);
    cart.appendChild(cartTitle);
    console.log(cart);
    return videoCard.appendChild(cart);
  });
};

createCart(cartData);
const ascendingBtn = document.getElementById("ascending");

// ascendingBtn.onclick(() => {
//     cartData.name.sort((a,b)=> (a.name>b.name))
// });

function searchMenu() {
  let text = document.getElementById("search-box").value;
  const filterData = cartData.filter(menu =>
    menu.name.toLowerCase().includes(text.toLowerCase())
  );
  videoCard.innerHTML = "";
  console.log(filterData);
  createCart(filterData);
}
