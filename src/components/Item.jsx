import React from "react";
import { Link } from "react-router-dom";

const Item = ({item}) => {
    return(
        <div className="col-md-4">
            <Link to={"/item/" + item.id} className=" text-dark text-decoration-none">
                <div className="card m-3 text-center border border-0">
                    <img src={item.image} className="card-img-top" alt={item.name}/>
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <h5 className="card-title">{item.price + "€"}</h5>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Item