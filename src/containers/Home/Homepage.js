import React from "react";
import {HomepageStyled} from "./HomepageStyled";
import {WelcomeSection} from "../../components/WelcomeSection/WelcomeSection";
import {CardStorage} from "../../components/Card/CardStorage";
import {ItemCard} from "../../components/Card/ItemCard";
import model1 from "../../components/Icon/model1.jpg"


export const Homepage = () => (
    <HomepageStyled>
        <WelcomeSection />
        <h1>The best models:</h1>
        <CardStorage>

            <ItemCard
                      name="Super"
                      price="230$"
                      power="200V"
                      imageSrc={model1}
            />
            <ItemCard
                      name="BlackBB"
                      price="600$"
                      power="390v"
                      imageSrc={model1}
            />
            <ItemCard
                      name="Kact"
                      price="400$"
                      power="230V"
                      imageSrc={model1}
            />
        </CardStorage>
    </HomepageStyled>
);