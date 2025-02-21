import { Dropdown } from "flowbite-react";
import Link from "next/link";
import "./dropdown.css";

interface Option {
  label: string;
  href: string;
}

interface DropdownComponentProps {
  options: Option[];
  dropdownLabel: string;
}

export default function DropdownComponent({
  options,
  dropdownLabel,
}: DropdownComponentProps) {
  return (
    <Dropdown
      label={dropdownLabel}
      inline
      dismissOnClick={false}
      className="relative"
    >
      {options.map((option, index) => (
        <Dropdown.Item key={index}>
          <Link href={option.href}>
            <span>{option.label}</span>
          </Link>
        </Dropdown.Item>
      ))}
    </Dropdown>
  );
}
