import classNames from "classnames";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Link = ({ to, title, ...restProps }) => {
  return (
    <NavLink
      {...restProps}
      className={({ isActive }) =>
        classNames("text-lg font-semibold transition-all px-3", {
          "text-[#7f7f7f]": isActive,
        })
      }
      to={to}
    >
      {title}
    </NavLink>
  );
};

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="header-container">
        <h1 className="text-3xl font-extrabold">Катя Лаврова</h1>
        <div className="hidden md:block">
          <Link to="lavrushkinskaya" title="Иллюстрации" />
          <Link to="projects" title="Проекты" />
          <Link to="about" title="Обо мне" />
        </div>
        <div
          className="menu-burger block md:hidden"
          onClick={() => setOpen(!open)}
        >
          <div />
          <div />
          <div />
        </div>
      </div>

      <div
        className={classNames(
          "burger h-screen flex flex-col gap-y-4 w-48 pt-4 absolute bg-white -right-48 top-16 transition-all",
          { "!right-0": open }
        )}
      >
        <Link
          to="illustrations"
          title="Иллюстрации"
          onClick={() => {
            setOpen(false);
          }}
        />
        <Link to="projects" title="Проекты" onClick={() => setOpen(false)} />
        <Link to="about" title="Обо мне" onClick={() => setOpen(false)} />
      </div>
    </>
  );
};
