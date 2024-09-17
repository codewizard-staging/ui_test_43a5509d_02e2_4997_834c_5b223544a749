import React from "react";
import { Routes, Route } from "react-router-dom";
import {
PetCareCenterCreate, PetCareCenterEdit, PetCareCenterView, 
PetCareCenterList
} from "screens";

const Component = (props) => {

    return (
        <Routes>
            

                        
                                                        <Route path="PetCareCenters/view/:id" element={<PetCareCenterView {...props} title={'View PetCareCenter'} />} />
                        <Route path="PetCareCenters/edit/:id" element={<PetCareCenterEdit {...props} title={'Edit PetCareCenter'} />} />
                        <Route path="PetCareCenters/create" element={<PetCareCenterCreate {...props} title={'Create PetCareCenter'} />} />

                <Route path="/pcs/list" element={<PetCareCenterList {...props} title={'List'} />} />
        </Routes>
    )

};

export default Component;