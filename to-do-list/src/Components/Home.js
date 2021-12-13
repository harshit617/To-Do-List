import React from "react";
import {Link} from 'react-router-dom'

function Home() {
        return(<div>
            <h1>TO-Do-List</h1>
            <div>
                <Link to="/AddList">Add a new List </Link>
            </div>
        </div>
        )
}

export default Home;