import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function PageHeader() {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(true);
  const toggleMenu = () => {
    setCollapsed(!collapsed);
    console.log("toggle");
  };
  const goDown = () => {
    console.log("goning down ...");
  };
  return (
    <div className="page">
      <div className="page__header">
        <div className="header__logo">
          <h1 className="logo">platform</h1>
        </div>
        <div
          className={
            collapsed ? "header__menu collapsed" : "header__menu opened"
          }
        >
          <a href="#" onClick={toggleMenu} className="header__menu-btn"></a>
          <div className="header__menu-container">
            <ul>
              <li>
                <Link href="/">
                  <a className={router.pathname == "/" ? "active-link" : ""}>
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a
                    className={router.pathname == "/about" ? "active-link" : ""}
                  >
                    About
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/our-works">
                  <a
                    className={
                      router.pathname == "/our-works" ? "active-link" : ""
                    }
                  >
                    Our Works
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a
                    className={
                      router.pathname == "/our-works" ? "active-link" : ""
                    }
                  >
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <section className="header__section">
        <h1 className="page__heading">Digital Marketing</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
          error ea dolor commodi explicabo modi eum quos accusamus reprehenderit
          iure exercitationem laudantium repellendus asperiores, ducimus quasi
          sit incidunt necessitatibus iusto!
        </p>
        <Link href="/">
          <a className="btn btn-primary">Get Started</a>
        </Link>
        <a onClick={goDown()} className="arrow-down">
          {/* <svg className="icon">
            <use xlinkHref="/images/sprite.svg#arrow-down"></use>
          </svg> */}
          <span></span>
        </a>
      </section>
    </div>
  );
}
