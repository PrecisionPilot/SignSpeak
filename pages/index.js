import { useState } from "react";
import Level1 from "./level1";
import Level2 from "./Level2";

export default function Home() {
    const [level, setLevel] = useState(1);

    let currentLevel

    if (level === 1) {
        currentLevel = <Level1 />
    }
    else if (level === 2) {
        currentLevel = <Level2 />
    }

    return (
        <div>
            { currentLevel }
        </div>
    )
}