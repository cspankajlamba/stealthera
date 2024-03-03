import React from "react";

const Items = ['Home'];

export default function MenuItems() {
    const listItems = Items.map(item =>{
        let hreflink = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
        return(
            <li key={item}>
                <a href={hreflink}>{item}</a>
            </li>
        );
    });
    return <ul>
        {listItems}
        <li><a className='btn' href='/contact'>subscribe now</a></li>
    </ul>
}