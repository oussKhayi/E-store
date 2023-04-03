import * as types from "./typeActions";

// import React, { useEffect, useState } from "react";
// import axios, { Axios } from "axios";

// function Test (){
//   const [data, setData] = useState({});
//   useEffect(() => {
//     axios.get("http://localhost:3010").then((response) => {
//       setData(response.data);
//     });
//     console.table(data);
//   }, []);
// }

const dbState = { cart: [], products: [] };

const initState = {
  users: {
    userName: "user-1",
    cart: [
      {
        id: 1090,
        name: "Logitech MX Anywhere 3 Mouse",
        description: "Logitech",
        image:
          "https://thefoschini.vtexassets.com/arquivos/ids/43936136-800-800?v=638145677088370000&width=800&height=800&aspect=true",
        price: 49,
        newPrice: 49,
        quantity: 100,
        cartQnt: 1,
        category: "accessoires",
      },
      {
        id: 1091,
        name: "Logitech MK470 Wireless Keyboard and Mouse Combo",
        description: "Logitech",
        image:
          "https://thefoschini.vtexassets.com/arquivos/ids/42739727-800-800?v=638142707881870000&width=800&height=800&aspect=true",
        price: 100,
        newPrice: 100,
        quantity: 30,
        cartQnt: 1,
        category: "accessoires",
      },
      {
        id: 1091,
        name: "Logitech MK470 Wireless Keyboard and Mouse Combo",
        description: "Logitech",
        image:
          "https://thefoschini.vtexassets.com/arquivos/ids/42739727-800-800?v=638142707881870000&width=800&height=800&aspect=true",
        price: 100,
        newPrice: 100,
        quantity: 30,
        cartQnt: 1,
        category: "accessoires",
      },
      {
        id: 1091,
        name: "Logitech MK470 Wireless Keyboard and Mouse Combo",
        description: "Logitech",
        image:
          "https://thefoschini.vtexassets.com/arquivos/ids/42739727-800-800?v=638142707881870000&width=800&height=800&aspect=true",
        price: 100,
        newPrice: 100,
        quantity: 30,
        cartQnt: 1,
        category: "accessoires",
      },
      {
        id: 1092,
        name: "Apple Airtag (4 Pack)",
        description: "Apple",
        image:
          "https://thefoschini.vtexassets.com/arquivos/ids/43893853-800-800?v=638145571122370000&width=800&height=800&aspect=true",
        price: 999,
        newPrice: 999,
        quantity: 30,
        cartQnt: 1,
        category: "accessoires",
      },
      {
        id: 2092,
        name: "Beats Fit Pro True Wireless Earbuds",
        description: "Earbuds",
        image:
          "https://thefoschini.vtexassets.com/arquivos/ids/42103565-800-800?v=638141535753930000&width=800&height=800&aspect=true",
        price: 999,
        newPrice: 999,
        quantity: 30,
        cartQnt: 1,
        category: "accessoires",
      },
    ],
  },
  products: [
    {
      name: "laptops",
      content: [
        {
          id: 1,
          name: "PACKARD BELL BARRICHELLO CELERON",
          description: "PACKARD",
          image:
            "https://thefoschini.vtexassets.com/arquivos/ids/42043584-800-800?v=638141463306770000&width=800&height=800&aspect=true",
          price: 49,
          newPrice: 49,
          quantity: 100,
          cartQnt: 1,
          category: "laptops",
        },
        {
          id: 25,
          name: "HP Laptop 15s-fq5008ni - i7",
          description: "HP Laptop",
          image:
            "https://thefoschini.vtexassets.com/arquivos/ids/42883928-800-800?v=638143171773670000&width=800&height=800&aspect=true",
          price: 100,
          newPrice: 100,
          quantity: 30,
          cartQnt: 1,
          category: "laptops",
        },
        {
          id: 246,
          name: "HP Laptop 15s-fq5008ni - i7",
          description: "HP Laptop",
          image:
            "https://thefoschini.vtexassets.com/arquivos/ids/42883928-800-800?v=638143171773670000&width=800&height=800&aspect=true",
          price: 100,
          newPrice: 100,
          quantity: 30,
          cartQnt: 1,
          category: "laptops",
        },
        {
          id: 42,
          name: "HP Laptop 15s-fq5008ni - i7",
          description: "HP Laptop",
          image:
            "https://thefoschini.vtexassets.com/arquivos/ids/42883928-800-800?v=638143171773670000&width=800&height=800&aspect=true",
          price: 100,
          newPrice: 100,
          quantity: 30,
          cartQnt: 1,
          category: "laptops",
        },
        {
          id: 36,
          name: "Acer Aspire A514-54-707H i7 Laptop",
          description: "Acer",
          image:
            "https://thefoschini.vtexassets.com/arquivos/ids/42148295-800-800?v=638141582804300000&width=800&height=800&aspect=true",
          price: 999,
          newPrice: 999,
          quantity: 30,
          cartQnt: 1,
          category: "laptops",
        },
        {
          id: 4,
          name: "Acer Aspire A514-54-38Dq i3 Laptop",
          description: "ACER",
          image:
            "https://thefoschini.vtexassets.com/arquivos/ids/43948403-800-800?v=638145799544030000&width=800&height=800&aspect=true",
          price: 100,
          newPrice: 100,
          quantity: 30,
          cartQnt: 1,
          category: "laptops",
        },
      ],
    },
    {
      name: "tv",
      content: [
        {
          id: 4,
          name: "Samsung 50 inch Neo QLED 4K QN90B TV",
          description: "Samsung",
          image:
            "https://thefoschini.vtexassets.com/arquivos/ids/42837110-800-800?v=638143108234630000&width=800&height=800&aspect=true",
          price: 49,
          newPrice: 49,
          quantity: 100,
          cartQnt: 1,
          category: "tv",
        },
        {
          id: 5,
          name: "Skyworth 75 inch UHD Android 10 Smart TV",
          description: "Skyworth",
          image:
            "https://thefoschini.vtexassets.com/arquivos/ids/42291670-800-800?v=638141772989200000&width=800&height=800&aspect=true",
          price: 100,
          newPrice: 100,
          quantity: 30,
          cartQnt: 1,
          category: "tv",
        },
        {
          id: 5,
          name: "Skyworth 75 inch UHD Android 10 Smart TV",
          description: "Skyworth",
          image:
            "https://thefoschini.vtexassets.com/arquivos/ids/42291670-800-800?v=638141772989200000&width=800&height=800&aspect=true",
          price: 100,
          newPrice: 100,
          quantity: 30,
          cartQnt: 1,
          category: "tv",
        },
        {
          id: 5,
          name: "Skyworth 75 inch UHD Android 10 Smart TV",
          description: "Skyworth",
          image:
            "https://thefoschini.vtexassets.com/arquivos/ids/42291670-800-800?v=638141772989200000&width=800&height=800&aspect=true",
          price: 100,
          newPrice: 100,
          quantity: 30,
          cartQnt: 1,
          category: "tv",
        },
        {
          id: 55,
          name: "Hisense 55 inch QDULED 4K TV",
          description: "Hisense",
          image:
            "https://thefoschini.vtexassets.com/arquivos/ids/42467615-800-800?v=638142048106570000&width=800&height=800&aspect=true",
          price: 100,
          newPrice: 100,
          quantity: 30,
          cartQnt: 1,
          category: "tv",
        },
        {
          id: 6,
          name: "Hisense 55 inch U8H Mini-LED ULED 4K TV",
          description: "Hisense",
          image:
            "https://thefoschini.vtexassets.com/arquivos/ids/42176931-800-800?v=638141613185100000&width=800&height=800&aspect=true",
          price: 999,
          newPrice: 999,
          quantity: 30,
          cartQnt: 1,
          category: "tv",
        },
      ],
    },

    {
      name: "phones",
      content: [
        {
          id: 7,
          name: "Iphone 11 64GB",
          description: "Apple",
          image:
            "https://thefoschini.vtexassets.com/arquivos/ids/42946422-800-800?v=638143290482600000&width=800&height=800&aspect=true",
          price: 49,
          newPrice: 49,
          quantity: 100,
          cartQnt: 1,
          category: "phones",
        },
        {
          id: 8,
          name: "iPhone 14 Pro 128GB",
          description: "Apple",
          image:
            "https://thefoschini.vtexassets.com/arquivos/ids/42772959-800-800?v=638142823169530000&width=800&height=800&aspect=true",
          price: 100,
          newPrice: 100,
          quantity: 30,
          cartQnt: 1,
          category: "phones",
        },
        {
          id: 8,
          name: "iPhone 14 Pro 128GB",
          description: "Apple",
          image:
            "https://thefoschini.vtexassets.com/arquivos/ids/42772959-800-800?v=638142823169530000&width=800&height=800&aspect=true",
          price: 100,
          newPrice: 100,
          quantity: 30,
          cartQnt: 1,
          category: "phones",
        },
        {
          id: 8,
          name: "iPhone 14 Pro 128GB",
          description: "Apple",
          image:
            "https://thefoschini.vtexassets.com/arquivos/ids/42772959-800-800?v=638142823169530000&width=800&height=800&aspect=true",
          price: 100,
          newPrice: 100,
          quantity: 30,
          cartQnt: 1,
          category: "phones",
        },
        {
          id: 9,
          name: "Xiaomi 12 Lite Dual Sim",
          description: "Xiaomi",
          image:
            "https://thefoschini.vtexassets.com/arquivos/ids/42649309-800-800?v=638142459911500000&width=800&height=800&aspect=true",
          price: 999,
          newPrice: 999,
          quantity: 30,
          cartQnt: 1,
          category: "phones",
        },
        {
          id: 99,
          name: "Samsung Galaxy A04E",
          description: "Samsung",
          image:
            "https://thefoschini.vtexassets.com/arquivos/ids/42700484-600-600?v=638142604136900000&width=600&height=600&aspect=true",
          price: 999,
          newPrice: 999,
          quantity: 30,
          cartQnt: 1,
          category: "phones",
        },
      ],
    },

    {
      name: "accessoires",
      content: [
        {
          id: 10,
          name: "Logitech MX Anywhere 3 Mouse",
          description: "Logitech",
          image:
            "https://thefoschini.vtexassets.com/arquivos/ids/43936136-800-800?v=638145677088370000&width=800&height=800&aspect=true",
          price: 49,
          newPrice: 49,
          quantity: 100,
          cartQnt: 1,
          category: "accessoires",
        },
        {
          id: 11,
          name: "Logitech MK470 Wireless Keyboard and Mouse Combo",
          description: "Logitech",
          image:
            "https://thefoschini.vtexassets.com/arquivos/ids/42739727-800-800?v=638142707881870000&width=800&height=800&aspect=true",
          price: 100,
          newPrice: 100,
          quantity: 30,
          cartQnt: 1,
          category: "accessoires",
        },
        {
          id: 11,
          name: "Logitech MK470 Wireless Keyboard and Mouse Combo",
          description: "Logitech",
          image:
            "https://thefoschini.vtexassets.com/arquivos/ids/42739727-800-800?v=638142707881870000&width=800&height=800&aspect=true",
          price: 100,
          newPrice: 100,
          quantity: 30,
          cartQnt: 1,
          category: "accessoires",
        },
        {
          id: 11,
          name: "Logitech MK470 Wireless Keyboard and Mouse Combo",
          description: "Logitech",
          image:
            "https://thefoschini.vtexassets.com/arquivos/ids/42739727-800-800?v=638142707881870000&width=800&height=800&aspect=true",
          price: 100,
          newPrice: 100,
          quantity: 30,
          cartQnt: 1,
          category: "accessoires",
        },
        {
          id: 12,
          name: "Apple Airtag (4 Pack)",
          description: "Apple",
          image:
            "https://thefoschini.vtexassets.com/arquivos/ids/43893853-800-800?v=638145571122370000&width=800&height=800&aspect=true",
          price: 999,
          newPrice: 999,
          quantity: 30,
          cartQnt: 1,
          category: "accessoires",
        },
        {
          id: 22,
          name: "Beats Fit Pro True Wireless Earbuds",
          description: "Earbuds",
          image:
            "https://thefoschini.vtexassets.com/arquivos/ids/42103565-800-800?v=638141535753930000&width=800&height=800&aspect=true",
          price: 999,
          newPrice: 999,
          quantity: 30,
          cartQnt: 1,
          category: "accessoires",
        },
      ],
    },
  ],
};

function reducer(state = initState, action) {
  let p = {};
  switch (action.type) {
    case types.ADD_TO_CART:
      switch (action.payload.category) {
        case "laptops":
          state.products.map((g) => {
            if (g.name === "laptops") {
              g.content.map((pr) => {
                if (parseInt(pr.id) === parseInt(action.payload.id)) {
                  p = pr;
                }
              });
            }
          });
        case "tv":
          state.products.map((g) => {
            if (g.name === "tv") {
              g.content.map((pr) => {
                if (parseInt(pr.id) === parseInt(action.payload.id)) {
                  p = pr;
                }
              });
            }
          });
        case "phones":
          state.products.map((g) => {
            if (g.name === "phones") {
              g.content.map((pr) => {
                if (parseInt(pr.id) === parseInt(action.payload.id)) {
                  p = pr;
                }
              });
            }
          });
        case "accessoires":
          state.products.map((g) => {
            if (g.name === "accessoires") {
              g.content.map((pr) => {
                if (parseInt(pr.id) === parseInt(action.payload.id)) {
                  p = pr;
                }
              });
            }
          });
      }
      return {
        ...state,
        users: { ...state.users, cart: [...state.users.cart, p] },
      };

    case types.REMOVE_FROM_CART:
      return {
        ...state,
        users: {
          ...state.users,
          cart: [
            ...state.users.cart.filter(
              (i) =>
                i !==
                state.users.cart.find(
                  (p) =>
                    p.category === action.payload.category &&
                    parseInt(p.id) === parseInt(action.payload.id)
                )
            ),
          ],
        },
      };

    case types.INCR_PRODUCT:
      return {
        ...state,
        users: {
          ...state.users,
          cart: state.users.cart.map((i) => {
            if (
              i.category === action.payload.category &&
              parseInt(i.id) === parseInt(action.payload.id)
            ) {
              i.cartQnt = i.cartQnt + 1;
            }
            return i;
          }),
        },
      };
    case types.DECR_PRODUCT:
      return {
        ...state,
        users: {
          ...state.users,
          cart: state.users.cart.map((i) => {
            if (
              i.category === action.payload.category &&
              parseInt(i.id) === parseInt(action.payload.id) &&
              i.cartQnt > 1
            ) {
              i.cartQnt = i.cartQnt - 1;
            }
            return i;
          }),
        },
      };
    case types.SETQNT:
      return {
        ...state,
        users: {
          ...state.users,
          cart: state.users.cart.map((i) => {
            if (
              i.category === action.payload.category &&
              parseInt(i.id) === parseInt(action.payload.id)
            ) {
              i.cartQnt = action.payload.v;
            }
            return i;
          }),
        },
      };

    case types.EMPTY_CART:
      return { ...state, users: { ...state.users, cart: [] } };
    default:
      return state;
  }
}

export default reducer;

//     let products =[
//         {id:1, name:'Product 1', description:'product number 1', image:'', price:49 ,newPrice:0, quantity:100},
//         {id:2, name:'Product 2', description:'product number 2', image:'', price:49 ,newPrice:0, quantity:30}
// ]100
