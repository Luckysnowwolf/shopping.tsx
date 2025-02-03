import "./page.css";
import { ChangeEvent, useState,} from "react";

function shoping() {
    const [Poster, setPoster] = useState<string[]>(["wolfposter", "leopardposter", "foxposter", "huskyposter", "catposter"]);
    const [inputValue, setInputValue] = useState<string>("");
    const [number, setNumber] = useState(0)



    function handleAddPoster() {
        const handleAddPoster = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            const Poster = (e.target as HTMLInputElement).files;
            if (inputValue.trim()) {
        setPoster([...Poster, inputValue]);
        setInputValue("");
            }
    }
    function handleRemovePoster(index: number) {
        const handleRemovePoster = (_event: React.MouseEvent<HTMLButtonElement>) => void;
        setPoster(Poster.filter((_, i) => i !== index));
    }


    function handleAmountOf()  {
        const handleAmountOf = (_event: React.MouseEvent<HTMLButtonElement>) => void;
        setNumber(number + 1)

        }
    }
    const increseNumber = () => {
        setNumber(number + 1);
    }


    return (
        <div className="shopingSection">
            <h2 className="Header"> list of posters to pick from</h2>
            <p className="posterlist">wolfposter, leopardposter, foxposter, huskyposter,catposter</p>
            <ul className="options">
                {Poster.map((Poster: any, index: any) => (
                    <li key={index}>
                        {Poster}
                        <button className="remove" 
                        onClick={() => handleRemovePoster(index)}
                        >
                        remove poster
                        </button>
                    </li>
                ))}
            </ul>
            <input
                type="text" className="textzone"
                placeholder="enter poster animal..." id="posterOption"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)} />
            <button className="add"
                onClick={handleAddPoster}>add poster</button>
            <button className="amount" onClick={handleAmountOf}>amount: {number}</button><button className="plus" onClick={increseNumber}>+</button><button className="remove" onClick={() => handleRemovePoster(index)}>remove poster</button>
        </div>
    );
}

export default shoping;