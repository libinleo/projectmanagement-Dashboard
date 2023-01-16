import { useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";



function Protectedroutes(props){

    const {Component} = props



    const navigate = useNavigate()



    useEffect(() => {

        let auth = localStorage.getItem('access_token');

        if(!auth){

            navigate("/login")

        }

    }

    );





    return(

        <div>

            <Component/>

        </div>

    )

}
export default Protectedroutes