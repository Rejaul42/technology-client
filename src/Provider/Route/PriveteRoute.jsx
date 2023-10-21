import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { authContest } from "../AuthProvider";
import PropTypes from 'prop-types';

const PriveteRoute = ({children}) => {
    const {user, loader} = useContext(authContest)
    if(loader){
        return <span className="loading loading-spinner loading-lg"></span>

    }
    if(user){
       return children;
    }
    return <Navigate to="/login"></Navigate>
};

PriveteRoute.propTypes ={
    children:PropTypes.node
}
export default PriveteRoute;