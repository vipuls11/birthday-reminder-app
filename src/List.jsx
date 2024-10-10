import React from 'react';
import './List.css'

const List = ({people}) => {
  return (
    <ul className='people_ul'>
        {
            people.map((people)=>{
                const {id,name,age,image} = people
                return(
                    <li id={id} className='people_list'>
                        <img src={image} alt="people image" srcset="" className='people_image'/>
                        <div className='people_container'>
                        <p className='people_name'>{name}</p>
                        <p className='people_age'>{age}</p>
                        </div>
                    </li>
                )
            })
        }
    </ul>
  )
}

export default List
