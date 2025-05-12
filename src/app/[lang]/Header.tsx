"use client";

import { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import AccordionComponent from "@/components/Accordion";
import DropdownComponent from "@/components/Dropdown";
import Link from "next/link";
import Image from "next/image";
import logoLeone from "../../../public/logoLeone.png";
import { useAuth } from "@/context/AuthContext";
import "./header.css";

interface Option {
  label: string;
  href: string;
}
interface HeaderClientProps {
  lang: "it" | "en";
  options1: Option[];
  options2: Option[];
  options3: Option[];
  options4: Option[];
  dropdownCompanyLabel: string;
  dropdownOrthodonticsLabel: string;
  dropdownImplantologyLabel: string;
  dropdownCoursesLabel: string;
}

export default function Header({
  lang,
  options1,
  options2,
  options3,
  options4,
  dropdownCompanyLabel,
  dropdownOrthodonticsLabel,
  dropdownImplantologyLabel,
  dropdownCoursesLabel,
}: HeaderClientProps) {
  const [show, setShow] = useState(false);
  const { userId, userData } = useAuth();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <header className="px-5 flex items-center">
        <div className="logo">
          <Link href={`/${lang}`}>
            <Image src={logoLeone} width={125} alt="logo" />
          </Link>
        </div>
        <nav className="nav-menu flex justify-between">
          <ul className="hidden xl:flex items-center space-x-4">
            <li>
              <DropdownComponent
                options={options1}
                dropdownLabel={dropdownCompanyLabel}
              />
            </li>
            <li>
              <DropdownComponent
                options={options2}
                dropdownLabel={dropdownOrthodonticsLabel}
              />
            </li>
            <li>
              <DropdownComponent
                options={options3}
                dropdownLabel={dropdownImplantologyLabel}
              />
            </li>
            <li>
              <DropdownComponent
                options={options4}
                dropdownLabel={dropdownCoursesLabel}
              />
            </li>
          </ul>
        </nav>
        {userId ? (
          <Link href={`/${lang}/personal-area`}>
            <div className="hidden blue xl:flex flex items-center">
              {userData && `${userData.Nome} ${userData.Cognome}`}
            </div>
          </Link>
        ) : (
          <Link href={`/${lang}/login`}>
            <div className="hidden xl:flex blue items-center">
              {lang === "it" ? "Area Riservata": "Register / Login"}
            </div>
          </Link>
        )}
        <button className="hamburger" onClick={handleShow} aria-label="Menu">
          <i className="fa-solid fa-bars"></i>
        </button>

        <Offcanvas show={show} onHide={handleClose} placement="end">
          <Offcanvas.Header closeButton></Offcanvas.Header>
          <Offcanvas.Body>
            <nav className="mobile-body">
              <ul>
                <li>
                  <AccordionComponent
                    options={options1}
                    accordionLabel="Company"
                  />
                </li>
                <li>
                  <AccordionComponent
                    options={options2}
                    accordionLabel="Orthodontics"
                  />
                </li>
                <li>
                  <Link href={`/${lang}/orders`}>Orders</Link>
                </li>
                <li>
                  <Link href={`/${lang}/events`}>Events</Link>
                </li>
              </ul>
            </nav>
          </Offcanvas.Body>
        </Offcanvas>
      </header>
    </>
  );
}
