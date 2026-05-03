import { useEffect, useState } from "react";

type Props = {
    text: string;
    speed?: number;
};

function AnimatedText({ text, speed = 20 }: Props) {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        if (displayedText.length === text.length) {
            return;
        }

        const timer = setTimeout(() => {
            setDisplayedText(text.slice(0, displayedText.length + 1));
        }, speed);

        return () => clearTimeout(timer);
    }, [displayedText, text, speed]);

    return <span>{displayedText}</span>;
}

export default AnimatedText;
