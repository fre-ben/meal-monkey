import "./card.css";
import cardOffers from "./card-offers.html";
import cardThai from "./card-thai.html";
import cardItalian from "./card-italian.html";
import cardContainer from "./card-container.html";


export default {
    title: "Components/Card",
    parameters: { layout: "centered" },
};

export const offers = () => cardOffers;
export const thai = () => cardThai;
export const italian = () => cardItalian;
export const container = () => cardContainer;
container.parameters = { layout: "fullscreen"};