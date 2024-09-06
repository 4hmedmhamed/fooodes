import React from 'react'
import img from "../../assets/1.jpg"
import { menu_list } from '../../assets/assets'
import "./ExploreMenu.css"
function ExploreMenu({ category, setCategory }) {
    return (
        <div className='exploreMenu' id='exploreMenu'>
            <h2>Explore  your Menu </h2>
            <p className='explore-menu-text' >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla commodi totam beatae blanditiis et possimus. Temporibus nemo doloremque nulla? Quos aspernatur quis dignissimos consectetur vel, ab fugiat distinctio dolorum sequi?</p>
            <div className="explore-menu-list">
                {
                    menu_list.map((item, index) => {
                        return (
                            <div key={index} onClick={()=>setCategory(prev=>prev===item.menu_name?"All" :item.menu_name)} className='explore-menu-list-item'>
                                <img src={item.menu_image} alt='' style={{width:"70px" , borderRadius:"50%"}} className={category===item.menu_name?"active":""}></img>
                                <p>{item.menu_name}</p>
                            </div>
                        )
                    })
                }
            </div>
            <hr />
        </div>
    )
}

export default ExploreMenu