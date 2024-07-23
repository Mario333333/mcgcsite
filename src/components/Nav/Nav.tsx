"use client";
import "./Nav.css";
import Link from "next/link";
import menuIcon from "../../resources/icons/menuIcon.svg";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useWindowWidth } from "@/hooks/useWindowWidth";

export default function Nav() {
  const width = useWindowWidth();

  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLElement>(null);
  const [loaded, setLoaded] = useState  (false);

  const handleClickOutside = (event: { target: any }) => {
    if (
      (menuRef.current as unknown as HTMLElement) &&
      !(menuRef.current as unknown as HTMLElement).contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
   setLoaded(true);
  }, []);

  return ( loaded &&
    <nav ref={menuRef} className="menu">
      {width < 768 && (
        <Image
          alt="menu-icon"
          className="menu_icon"
          src={menuIcon}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
      )}

      {(width >= 768 || isOpen) && (
        <ol>
          <li className="menu-item">
            <Link href="/">Me</Link>
          </li>
          <li className="menu-item">
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li className="menu-item">
            <Link href="/cv">CV</Link>
            <ol className="sub-menu">
              <li className="menu-item">
                <Link href="cv#presentation">Presentation</Link>
              </li>
              <li className="menu-item">
                <Link href="cv#work_experience">Work Experience</Link>
              </li>
              <li className="menu-item">
                <Link href="cv#education">Skills</Link>
              </li>
            </ol>
          </li>
        </ol>
      )}
    </nav>
  );
}
