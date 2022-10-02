import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ShellPrompt from "../components/ShellPromp";
import StartMessage from "../components/StartMessage";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [cmds, setCmds] = useState([]);

  const [arg, setArg] = useState("");

  const input_prompt = useRef(null);

  const focusClick = (e) => {
    input_prompt.current.focus();
  };

  const handleStrokes = (event) => {
    event.preventDefault();
    const keycode = event.keyCode;
    const value = arg.slice();
    if (value.length === 126 && event.keyCode !== 8) return;
    if (event.keyCode === 8) {
      if (value === "") return;
      else if (value.length === 1) setArg("");
      else setArg(value.slice(0, -1));
    } else if (keycode == 13) {
      let newCmds = cmds.slice();
      setArg("");
      if (value === "clear") {
        setCmds([]);
        return;
      } else {
        newCmds.push({
          text: value,
          result: `Error: Unknown command, got ${value} ...\n If help is needed type the "help" command for more assistance.`,
        });
      }
      setCmds(newCmds);
    } else if (
      (keycode > 47 && keycode < 58) || // number keys
      keycode == 32 ||
      //keycode == 13 || // spacebar & return key(s) (if you want to allow carriage returns)
      (keycode > 64 && keycode < 91) || // letter keys
      (keycode > 95 && keycode < 112) || // numpad keys
      (keycode > 185 && keycode < 193) || // ;=,-./` (in order)
      (keycode > 218 && keycode < 223)
    ) {
      setArg(value + event.key);
    }
  };

  return (
    <div
      onClick={focusClick}
      className="p-3 text-white min-h-screen min-w-full flex flex-col"
    >
      <textarea
        ref={input_prompt}
        onKeyDown={handleStrokes}
        id="input_prompt"
        className="max-h-0 absolute"
      />
      <StartMessage />
      {cmds.map((cmd) => (
        <div>
          <div className="inline-flex">
            <ShellPrompt />
            {cmd.text.split(/\r?\n/).map((line) => (
              <p className="ml-3 whitespace-pre">{line}</p>
            ))}
          </div>
          <p>{cmd.result}</p>
        </div>
      ))}

      <div className="inline-flex">
        <ShellPrompt />
        <p className="ml-3 whitespace-pre">{arg}</p>
        <div className="animate-pulsing">█</div>
      </div>
    </div>
  );
}
