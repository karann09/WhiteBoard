const JoinRoomForm = () => {
    return(
        <form className="form col-md-12 mt-5">
        <div className="form-group">
            <input type="text" className="form-control my-2" placeholder="Enter Username"/>
        </div>
        <div className="form-group border">
                <input type="text" className="form-control my-2 border-0" placeholder="Enter room code"/>
            </div>
        <button className="mt-4 btn btn-primary btn-block form-control" type="submit">Join Room</button>
    </form>
    )
}

export default JoinRoomForm;