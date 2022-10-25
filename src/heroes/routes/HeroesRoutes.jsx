import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../ui/components/Navbar";
import { DcPages } from "../pages/DcPages";
import { HeroPage } from "../pages/HeroPage";
import { MarvelPage } from "../pages/MarvelPage";
import { SearchPage } from "../pages/SearchPage";


const HeroesRoutes = () => {

    return(
        <>
        
        <Navbar/>

        <div className="container" >

            <Routes>
                <Route path="marvel" element={<MarvelPage/> } />
                <Route path="dc" element={<DcPages />} />
                
                { /** const {Hero, id} = HeroTemplate() */ }
                { /**Search, Hero By ID: Load( FindObject( Hero, id ) */ }
                <Route path="search" element={<SearchPage />} />
                
                <Route path="hero/:id" element={<HeroPage />} />

                <Route path="/" element={<Navigate to="/marvel" />} />
        
            </Routes>

        </div>


        </>

    )

}


export { HeroesRoutes };