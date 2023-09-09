import { useNavigate } from "react-router-dom";
import {
  FacebookIconStyled,
  InstagramIconStyled,
  LogoIcon,
  LogoIconsGroup,
} from "./Logo.styled";

export const Logo = () => {
  const navigate = useNavigate();
  return (
    <LogoIconsGroup>
      <LogoIcon
        onClick={() => {
          navigate("/");
        }}
      />
      <a href="https://www.instagram.com/msshopua2023/" class="link">
        <InstagramIconStyled />
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=100091605982461"
        class="link"
      >
        <FacebookIconStyled />
      </a>
    </LogoIconsGroup>
  );
};
