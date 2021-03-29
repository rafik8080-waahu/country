

function Card({name,img,population}) {
    return (
        <div className="card m-4" style={{height:"20rem",width:"20rem"}}>
            <img src={img} alt="" className="card-img-top"  style={{height:"rem" ,width:"18rem"}}/>
            <div className="card-body">
                <h4>{name}</h4>
                <h5>{population}</h5>
            </div>

        </div>
    )
}

export default Card;
