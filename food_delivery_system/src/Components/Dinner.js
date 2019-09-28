import React from 'react';


function Dinner() {
    let  ravi = props.input.map(a =>{
        return <div className="m-2">
                <div class="card" style={{width: "24rem"}}>
                    <img src={a.image} class="card-img-top" alt="..." style={{width:"382px",height:"300px"}}/>
                    <div class="card-body">
                        <div>
                            <h5 class="card-title">{a.name} </h5>
                            <div className="rating">{a.rating} <img src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678064-star-128.png" width="20px" height="20px"></img></div>
                            <p>{a.votes} votes</p>
                        </div>
                        <hr></hr>
                        <p><b>CUISINES: </b>{a.Cuisines}</p>
                        <hr></hr>
                        <p><b>COST : </b>{a.Cost}</p>
                        <hr></hr>
                        <p>FEATURED IN : {a.Featured}</p>
                    
                        <a href="#" class="btn btn-primary">Order</a>
                    </div>
                </div>
        </div>
    })
    return(
        <div className="row ml-3">
        {ravi}
        </div>

    )
}


export default Dinner;