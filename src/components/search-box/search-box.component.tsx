import { ChangeEventHandler } from "react";
import "./search-box.styles.css";

/* 
Interface is more for object oriented programming

interface ISearchBoxProps {
  className: string;
  placeholder?: string;
}

interface ISearchBoxProps {
  onChangeHandler: (a: string) => void;
}

type is more for functional programming
*/

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
};

const SearchBox = ({
  className,
  placeholder,
  onChangeHandler,
}: SearchBoxProps) => (
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;
