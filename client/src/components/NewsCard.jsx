import React from "react";

function NewsCard() {
    return ( 
        <div className="card m-3" style={{width:"18rem"}}>
            <img src="" className="card-img-top" alt="" />
            <div className="card-body">
                <h5 className="card-title">Card Title</h5>
                <p className="card-text">text....</p>
                <a href="#" className="btn btn-primary">Click</a>
            </div>
        </div>
    );
}

export default NewsCard;