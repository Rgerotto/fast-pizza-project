import { useDispatch } from "react-redux";
import Button from "../../ui/Button"
import { decreaseItem, increaseItem } from "./cartSlice";

function UpdateItemQuantity({pizzaId, currentQuantity}) {
    const dispatch = useDispatch();
    
    return (
        <div className="flex gap-3 items-center md:gap-5">
            <Button type='round' onClick={() => dispatch(decreaseItem(pizzaId))}>-</Button>
            <span >{currentQuantity}</span>
            <Button type='round' onClick={() => dispatch(increaseItem(pizzaId))}>+</Button>
        </div>
    )
}

export default UpdateItemQuantity;
