import { useState } from "react"

export const SelectResaturant=  ({list, action}) => {

    const [selectRestaurant, setSelectRestaurant] = useState()

    const selectValue = (selected) => {
        let seleectRestaurantItem = `${selected}`
        if(selected === selectRestaurant){
            seleectRestaurantItem = undefined
        }
        setSelectRestaurant(seleectRestaurantItem)
        action(seleectRestaurantItem)
    }
    return(
        <div>
            {list?.map((itemName) => {
                return(<p selected= {selectRestaurant === itemName} onClick={() => selectValue(itemName)}>{itemName}</p>) })
        }
        </div>
    )
}



