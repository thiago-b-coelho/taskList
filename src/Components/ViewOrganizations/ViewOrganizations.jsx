import React from "react";
import del from "../../Assets/delete.svg";

const ViewOrganizations = ({ organizations, deleteOrganization }) => {
    return (
        <>
            {
                organizations.length === 0 &&
                    <div className="OrganizationList__items">Sem grupos de tarefas, adicione um novo</div>
            }
            {organizations.map((organization) => {
                return (
                    <>
                        <div
                            key={organization.id}
                            className="OrganizationList__items"
                        >
                            {organization.title}
                            <img
                                src={del}
                                onClick={() => deleteOrganization(organization.id)}
                                width={"25px"}
                            />
                        </div>
                    </>
                );
            })}
        </>
    );
};

export default ViewOrganizations;
