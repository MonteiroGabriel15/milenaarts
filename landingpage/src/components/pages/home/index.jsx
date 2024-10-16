import React from "react";
import { PageContainer } from "./style";
import Header from "../../micros/aheader";
import Main from "../../../components/micros/main";
const Home = () => {
    return (
        <PageContainer>
            <Header/>
            <Main/>
        </PageContainer>
    );
}

export default Home;