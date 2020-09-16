import React from "react";
import SearchIcon from "@material-ui/icons/Search";

const Header = () => {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="amazon_logo"
      />

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="header__boxes">
          <span className="header__boxesFirstLine">hello</span>
          <span className="header__boxesSecondLine">sign in</span>
        </div>
        <div className="header__boxes">
          <span className="header__boxesFirstLine">returns</span>
          <span className="header__boxesSecondLine">& orders</span>
        </div>
        <div className="header__boxes">
          <span className="header__boxesFirstLine">your</span>
          <span className="header__boxesSecondLine">prime</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
