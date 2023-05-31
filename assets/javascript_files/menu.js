const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const menuDisplay = document.querySelector(".menu__display");
const menuBtns = document.querySelector(".menu__categories");

window.addEventListener("DOMContentLoaded", function () {
  showMenuItems(menu);
  showMenuCategories();
});

function showMenuItems(items) {
  const menuItems = items
    .map(function (item) {
      return `<div class="menu-item">
              <img src="./assets/images/item-1" alt="" class="item__img" />
              <div class="item__info">
                <div class="item__heading">
                  <h3 class="item__name">${item.title}</h3>
                  <span class="item__price">$${item.price}</span>
                </div>
                <p class="item__desc">${item.desc}</p>
              </div>
            </div>`;
    })
    .join("");
  menuDisplay.innerHTML = menuItems;
}

function showMenuCategories() {
  const categoryList = menu.reduce(
    function (categories, item) {
      if (!categories.includes(item.category)) {
        categories.push(item.category);
      }
      return categories;
    },
    ["all"]
  );
  const categoryBtns = categoryList
    .map(function (category) {
      return `<button type="button" class="menu__category" data-id="${category}">
              ${category}
            </button>`;
    })
    .join("");
  menuBtns.innerHTML = categoryBtns;
  const categories = document.querySelectorAll(".menu__category");
  categories.forEach(function (category) {
    category.addEventListener("click", function (e) {
      const currentBtn = e.target.dataset.id;
      const filterItems = menu.filter(function (item) {
        if (currentBtn === item.category) {
          return item;
        }
      });
      if (currentBtn === "all") {
        showMenuItems(menu);
      } else {
        showMenuItems(filterItems);
      }
    });
  });
}
