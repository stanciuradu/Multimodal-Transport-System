// componenta simpla care mapeaza prin array-ul initial
import React from "react";
import MenuItem from "./MenuItem";
import '../components/MenuList.scss';
function MenuList(props) {
  const { items } = props;
  return (
    <div className='directory-menu'>
      {items.map((item, index) => {
        return (
          <MenuItem title={item.title} imageUrl={item.imageUrl} size={item.size}  key={index} />
        );
      })}
    </div>
  );
}

export default MenuList;