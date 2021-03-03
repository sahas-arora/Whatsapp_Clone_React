import  { useState } from "react";

export const SelectedSeed = () => {
    const [selectedSeed, setSelectedSeed] = useState('');

    const setSeed = (src) => {
        setSelectedSeed(src);
        console.log("Selected seed is ", selectedSeed);
    }

    return [selectedSeed, setSeed];
}