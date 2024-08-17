import { useEffect, useState } from "react";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
export default function App() {
  const [text, setText] = useState("");
  const [firstOption, setFirstOption] = useState("USD");
  const [secondOption, setSecondOption] = useState("EUR");
  const [paragraph, setParagraph] = useState("");
  useEffect(
    function () {
      async function fetchCurrencyData() {
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${text}&from=${firstOption}&to=${secondOption}`
        );
        const data = await res.json();
        console.log(data);
        setParagraph(data?.rates?.[secondOption]);
      }

      fetchCurrencyData();
    },
    [text, firstOption, secondOption]
  );
  return (
    <div className="container">
      <Heading />
      <CurrencyConverter
        text={text}
        firstOption={firstOption}
        secondOption={secondOption}
        onFirstOption={setFirstOption}
        onSecondOption={setSecondOption}
        onText={setText}
      />
      <Paragraph
        text={text}
        firstOption={firstOption}
        secondOption={secondOption}
        paragraph={paragraph}
      />
    </div>
  );
}
function CurrencyConverter({
  text,
  onText,
  firstOption,
  secondOption,
  onFirstOption,
  onSecondOption,
}) {
  // const [text, setText] = useState("");
  // const [firstOption, setFirstOption] = useState("USD");
  // const [secondOption, setSecondOption] = useState("EUR");
  // const [paragraph, setParagraph] = useState("");
  // const data = { text, firstOption, secondOption };

  // useEffect(
  //   function () {
  //     async function fetchCurrencyData() {
  //       const res = await fetch(
  //         `https://api.frankfurter.app/latest?amount=${text}&from=${firstOption}&to=${secondOption}`
  //       );
  //       const data = await res.json();
  //       console.log(data);
  //       setParagraph(data?.rates?.[secondOption]);
  //     }

  //     fetchCurrencyData();
  //   },
  //   [text, firstOption, secondOption]
  // );
  // const length = data.text.length;

  return (
    <div>
      <input
        type="number"
        className="text"
        placeholder="Enter Currency"
        value={text}
        onChange={(e) => onText(e.target.value)}
      />
      <div className="option">
        <select
          value={firstOption}
          onChange={(e) => onFirstOption(e.target.value)}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="CAD">CAD</option>
          <option value="INR">INR</option>
        </select>
        <span>➡️</span>
        <select
          value={secondOption}
          onChange={(e) => onSecondOption(e.target.value)}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="CAD">CAD</option>
          <option value="INR">INR</option>
        </select>
      </div>
      {/* <div className="paragraph">
        {length > 0 && (
          <p>
            The conversion of {data.text} {data.firstOption} to{" "}
            {data.secondOption} currency is {paragraph}
          </p>
        )}
      </div> */}
    </div>
  );
}
