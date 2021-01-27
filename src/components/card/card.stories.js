import "./card.css";
import cardOffers from "./card-offers.html";
import cardThai from "./card-thai.html";
import cardItalian from "./card-italian.html";


export default {
    title: "Components/Card",
    parameters: { layout: "centered" },
};

export const offers = () => cardOffers;
export const thai = () => cardThai;
export const italian = () => cardItalian;