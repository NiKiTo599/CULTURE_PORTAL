import React from "react"
import Layout from "../components/layout";
import Fullscreen from "./homePageComponents/fullscreen";
import DirectorOfDay from "./homePageComponents/directorOfDay";
import Team from "./homePageComponents/team";

const HomePage = () => {
    return (
        <Layout>
            <Fullscreen />
            <DirectorOfDay />
            <Team />
        </Layout>
    )
}
export default HomePage
