import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 120,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 110,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 120,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 120,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 115,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 118,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="contianer">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <div>
        <h1>AXL'S PIZZERIA</h1>
      </div>
    </header>
  );
}

function Menu() {
  const pizzaMenuData = pizzaData;
  const pizzaMenuSize = pizzaMenuData.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <ul className="pizzas">
        {pizzaMenuSize > 0 ? (
          pizzaMenuData.map((pizzaMenu) => (
            <Pizza pizzaMenuDetails={pizzaMenu} key={pizzaMenu.name} />
          ))
        ) : (
          <p>We're still working on our menu. Please come back later</p>
        )}
      </ul>
      {/* <div className="pizzas">
        <Pizza
          name="Pizza Spinaci"
          ingredients="Tomato, mozarella, spinach, and ricotta cheese"
          price={120}
          photoName="pizzas/spinaci.jpg"
        />
      </div> */}
    </main>
  );
}

function Pizza({ pizzaMenuDetails }) {
  return (
    <div className="pizza">
      <img src={pizzaMenuDetails.photoName} alt={pizzaMenuDetails.name} />
      <div>
        <h3>{pizzaMenuDetails.name}</h3>
        <p>{pizzaMenuDetails.ingredients}</p>
        <h3>P{pizzaMenuDetails.price}.00</h3>
        <button className="btn">Add to cart</button>
      </div>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  if (isOpen === true)
    return (
      <footer className="footer">
        {new Date().toLocaleTimeString()} We are currently open.
      </footer>
    );
  else
    return (
      <footer className="footer">
        {new Date().toLocaleTimeString()} Sorry we're closed.
      </footer>
    );
}
