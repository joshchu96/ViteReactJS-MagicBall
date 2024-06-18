import styles from "./EightBall.module.css";
import { useState } from "react";

function EightBall() {
  const answers = [
    { msg: "It is certain.", color: "green" },
    { msg: "It is decidedly so.", color: "green" },
    { msg: "Without a doubt.", color: "green" },
    { msg: "Yes - definitely.", color: "green" },
    { msg: "You may rely on it.", color: "green" },
    { msg: "As I see it, yes.", color: "green" },
    { msg: "Most likely.", color: "green" },
    { msg: "Outlook good.", color: "green" },
    { msg: "Yes.", color: "green" },
    { msg: "Signs point to yes.", color: "goldenrod" },
    { msg: "Reply hazy, try again.", color: "goldenrod" },
    { msg: "Ask again later.", color: "goldenrod" },
    { msg: "Better not tell you now.", color: "goldenrod" },
    { msg: "Cannot predict now.", color: "goldenrod" },
    { msg: "Concentrate and ask again.", color: "goldenrod" },
    { msg: "Don't count on it.", color: "red" },
    { msg: "My reply is no.", color: "red" },
    { msg: "My sources say no.", color: "red" },
    { msg: "Outlook not so good.", color: "red" },
    { msg: "Very doubtful.", color: "red" },
  ];

  let defaultRes = { msg: "Think of a Question", color: "black" };
  const [res, setRes] = useState(defaultRes);

  const handleResponse = () => {
    let randIdx = Math.floor(Math.random() * answers.length);
    setRes(answers[randIdx]);
  };

  return (
    <div
      className={styles.ball}
      style={{ backgroundColor: res.color }}
      onClick={handleResponse}
    >
      <p>{res.msg}</p>
    </div>
  );
}

export default EightBall;
