import React, {useState} from "react";
import Toolbar from "./Toolbar";

function LandingPage(props) {
    const [isLoggedInm, setlsLoggedln] = useState(false);

    const onClickLogin = () => {
        setIsLoggedIn(true);
    };

    const onClickLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <div>
            <Toolbar
                isLoggedInm = {isLoggedInm}
                onClickLogin = {onClickLogin}
                onClickLogout = {onClickLogout}    
            />
            <div style={{padding : 16 }}>소플과 함께하는 리액트 공부!</div>
        </div>
    );
}

export default LandingPage;