import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="hidden lg:block">
      <div className="container">
        <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">
          <Link className="navbar__link relative" href="#">
            HOME
          </Link>
          <Link className="navbar__link relative" href="#">
            CATEGORIAS
          </Link>
          <Link className="navbar__link relative" href="#">
            {`FEMININO`}
          </Link>
          <Link className="navbar__link relative" href="#">
            {`MASCULINO`}
          </Link>
          <Link className="navbar__link relative" href="#">
            JÓIAS
          </Link>
          <Link className="navbar__link relative" href="#">
            PERFUME
          </Link>
          <Link className="navbar__link relative" href="#">
            BLOG
          </Link>
          <Link className="navbar__link relative" href="#">
            OFERTAS
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
