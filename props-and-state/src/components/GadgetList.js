import React from "react";

function Gadget({ item }) {
  return (
    <div>
      <h3>{item.title}</h3>
      <p>{item.price}</p>
      <img src={item.src} alt={item.title}/>
      
    </div>
  );
}

const GadgetList = (props) => {
  return (
    <main>
      <h2>Headphones color {props.color}</h2>
      {props.items.map((item) => (
        <Gadget item={item} key={item.title} />
      ))}
    </main>
  );
};

export default GadgetList;
