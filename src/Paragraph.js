export default function Paragraph({
  text,
  firstOption,
  secondOption,
  paragraph,
}) {
  const data = { text, firstOption, secondOption };
  const length = data.text.length;
  return (
    <div className="paragraph">
      {length > 0 && (
        <p>
          The conversion of {data.text} {data.firstOption} to{" "}
          {data.secondOption} currency is {paragraph}
        </p>
      )}
    </div>
  );
}
