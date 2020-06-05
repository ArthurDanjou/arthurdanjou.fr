import React from "react";
import "../public/style/style.scss";
import Head from "next/head";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Template from "../components/template/template";
import Work from "../components/work/work";

const WorkPage = () => {
    return (
        <div className="showcase">
            <Head>
                <title>Arthur Danjou | Mon Travail</title>
            </Head>
            <Header />
            <Template
                question="Mes projets"
                title="Mon Travail"
                description="Ayez un aperçu de mon travail ainsi que de mes compétences à travers mes différents projets professionnels et personnels."
            >
                <Work />
            </Template>
            <Footer />
        </div>
    )
}

export default WorkPage;