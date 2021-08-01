import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import map from 'lodash/map';
import { roomsRequested } from "../../redux/slices/rooms";

function Rooms() {

    const dispatch = useDispatch();
    const rooms = useSelector((state) => state.rooms.collection);

    const loadRooms = () => dispatch(roomsRequested({status: 'is to be'}));

    // useEffect(() => {
    //
    //
    // }, [])

    return(
        <>
            <h1>Rooms:</h1>
            <button onClick={loadRooms}>load rooms</button>
            map( rooms , (room, index) => <p key= {index} >{room.name}</p> )
        </>

    )
}

export default Rooms;