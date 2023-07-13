import React from "react";

const ViewOrganizations = ({ organizations, deleteOrganization }) => {
    return (
        <>
            {
                organizations.length === 0 &&
                    "Sem grupos de tarefas, adicione um novo" /* ShorCircuit */
            }
            {organizations.map((organization) => {
                return <>
                    <div className="OrganizationList__items">{organization.title}</div>
                </>;
            })}
        </>
    );
};

export default ViewOrganizations;
