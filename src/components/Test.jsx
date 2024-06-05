import React, { useContext } from "react";
import UserContext from "./UserContext";

function Test() {
    const { userId } = useContext(UserContext);
    return <div>{userId}</div>;
}

export default Test;
