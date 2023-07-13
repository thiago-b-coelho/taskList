import { React, useState, useEffect } from "react";
import Header from "./Components/Header/Header";
import OrganizationList from "./Components/OrganizationList/OrganizationList";
import { Outlet } from "react-router-dom";

/* Lista de tarefas default */
const odb = [
    {
        id: 1,
        title: "DNC",
    },
    
];

const Organizations = () => {

    return (
        <>
            <Header focus="organizations" />
            <OrganizationList data={odb}/>
        </>
    );
}

export default Organizations;
