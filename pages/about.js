import GG_WP_URL from '../api/get_rooms'
import axios from 'axios';
export default function about() {
    return(
        <h1>hi mazafacer</h1>
    )
}

axios.get(`http://0.0.0.0:3000/api/v1/rooms.json`)
    .then((response) => {
        console.log(response.data);
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.headers);
        console.log(response.config);
    });

//
// const Home = ({ rooms, error }) => {
//     if (error) {
//         return <div>An error occured: {error.message}</div>;
//     }
//     return (
//         <ul>
//             {rooms.map(room => (
//                 <li key={room.id}>{room.name}</li>
//             ))}
//         </ul>
//     );
// };
//
// Home.getInitialProps = async ctx => {
//     try {
//         const room = await axios.get('http://0.0.0.0:3000/api/v1/rooms.json');
//         const rooms = room.data;
//         return { rooms };
//     } catch (error) {
//         return { error };
//     }
// };

// export default Home;