import { useState } from "react";
import {
  FaPaperclip,
  FaSmile,
  FaMapMarkerAlt,
  FaPoll,
  FaThumbtack,
  FaPaperPlane,
  FaCheck,
} from "react-icons/fa";

import css from "./Action.module.css";
import clsx from "clsx";

const Action = () => {
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [activeIcons, setActiveIcons] = useState({
    poll: false,
    map: false,
    thumbtack: false,
    paperclip: false,
    smile: false,
  });

  const toggleIcon = (icon) => {
    setActiveIcons((prev) => ({
      ...prev,
      [icon]: !prev[icon],
    }));
  };

  return (
    <div className={css.firstWrap}>
      <div className={css.thirdWrap}>
        <span
          className={clsx(css.check, {
            [css.checkActive]: isAnonymous,
          })}
          onClick={() => setIsAnonymous(!isAnonymous)}
        >
          {isAnonymous && <FaCheck className={css.checkIcon} />}
        </span>
        <span
          className={clsx(css.checkAnonymous, {
            [css.checkActive]: isAnonymous,
          })}
        >
          Анонімно
        </span>
        <div className={css.actionWrap}>
          <ul className={css.map}>
            <li
              className={clsx(css.listItemOne, {
                [css.activeOne]: activeIcons.poll,
              })}
            >
              <FaPoll
                className={css.firstIcon}
                title="Створити опитування"
                onClick={() => toggleIcon("poll")}
              />
            </li>
            <li
              className={clsx(css.listItemOne, {
                [css.activeOne]: activeIcons.map,
              })}
            >
              <FaMapMarkerAlt
                className={css.firstIcon}
                title="Вказати геолокацію"
                onClick={() => toggleIcon("map")}
              />
            </li>
          </ul>
          <ul className={css.nextAction}>
            <li
              className={clsx(css.listItem, {
                [css.active]: activeIcons.thumbtack,
              })}
            >
              <FaThumbtack
                className={css.firstIcon}
                title="Закріпити"
                onClick={() => toggleIcon("thumbtack")}
              />
            </li>
            <li
              className={clsx(css.listItem, {
                [css.active]: activeIcons.paperclip,
              })}
            >
              <FaPaperclip
                className={css.firstIcon}
                title="Прикріпити"
                onClick={() => toggleIcon("paperclip")}
              />
            </li>
            <li
              className={clsx(css.listItem, {
                [css.active]: activeIcons.smile,
              })}
            >
              <FaSmile
                className={css.firstIcon}
                onClick={() => toggleIcon("smile")}
              />
            </li>
          </ul>
        </div>
        <button className={css.btn}>
          <FaPaperPlane className={css.send} />
        </button>
      </div>
    </div>
  );
};

export default Action;
