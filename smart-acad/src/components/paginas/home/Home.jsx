/* Usando CSS como modulo */
//import style from './Home.module.css'

import './Home.css'
import Navbar from '../../template/Navbar';
import Sidebar from '../../template/Sidebar';


function Home() {
    return (
        <div>
           <Navbar />
           <Sidebar />
           
        </div>
    );
}
export default Home;