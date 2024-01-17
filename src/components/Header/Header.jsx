import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/selectors";
import {
  BiArrowToTopStyled,
  BiCartStyled,
  CashListIcon,
  CashListLength,
  HeaderContainer,
  HeaderStyled,
  ScrolUp,
} from "./Header.styled";
import { Logo } from "./Logo/Logo";
import { Navigation } from "./Navigation/Navigation";
import { UserConfig } from "./UserConfig/UserConfig";
import { useLocation, useNavigate } from "react-router-dom";
import { authSetFavoriteList, authSignInUser } from "../../redux/auth.thunk";
import { useEffect, useState } from "react";

export const Header = () => {
  const { cashList } = useSelector(selectUser);
  const navigate = useNavigate();
  const [scrollPosition, setScrollPosition] = useState(0);

  const path = useLocation().pathname;

  const dispatch = useDispatch();

  useEffect(() => {
    if (
      localStorage.getItem("userEmail") &&
      localStorage.getItem("userPassword")
    ) {
      LogIn();
    }
  }, []);

  const LogIn = async () => {
    const email = await localStorage.getItem("userEmail");
    const password = await localStorage.getItem("userPassword");
    dispatch(
      authSignInUser({
        email,
        password,
      })
    );
    dispatch(authSetFavoriteList(email));
  };

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HeaderStyled>
      <HeaderContainer>
        <Logo />
        {!(path === "/checkout") && (
          <>
            <Navigation />
            <UserConfig />
          </>
        )}
      </HeaderContainer>
      {!(path === "/cashList" || path === "/admin" || path === "/checkout") && (
        <>
          {scrollPosition >= window.innerHeight && (
            <ScrolUp>
              <BiArrowToTopStyled
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              ></BiArrowToTopStyled>
            </ScrolUp>
          )}
          <CashListIcon>
            <BiCartStyled
              onClick={() => {
                navigate("/cashList");
              }}
            />
            <CashListLength>{cashList.length}</CashListLength>
          </CashListIcon>
        </>
      )}
    </HeaderStyled>
  );
};
