import { useState } from "react";

import css from "./PostInput.module.css";
import Action from "../Action/Action.jsx";

const PostInput = () => {
  const [text, setText] = useState("");

  return (
    <div className={css.firstWrap}>
      <div className={css.secondWrap}>
        <img
          src="https://randomuser.me/api/portraits/women/2.jpg"
          alt="Avatar"
          className={css.imageUser}
        />
        <textarea
          type="text"
          placeholder="Що у вас нового?"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className={css.textArea}
        />
      </div>
      <Action />
    </div>
  );
};

export default PostInput;
