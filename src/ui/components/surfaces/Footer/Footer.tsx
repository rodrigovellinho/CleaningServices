import React from "react";
import {
  FooterStyled,
  FooterContainer,
  FooterTitle,
  AppList,
} from "./Footer.style";
import { Typography, Box } from "@material-ui/core";

const Footer = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        <Box sx={{ maxWidth: "400px" }}>
          <FooterTitle>Quem somos</FooterTitle>
          <Typography variant={"body2"} sx={{ mt: 2 }}>
            E- diaristas te ajuda a encontrar um profissional perfeito para
            realizar a limpeza da sua casa. Garantimos a melhor profissional com
            total segurança e praticidade! São milhares de clientes satisfeitos
            em todo pais.
          </Typography>
        </Box>
        <div>
          <FooterTitle>Baixe nossos aplicativos</FooterTitle>
          <AppList>
            <li>
              <a href={"/"} target={"_blank"} rel={"noopener noreferrer"}>
                <img src={"img/logos/app-store.png"} alt="app store" />
              </a>
            </li>
            <li>
              <a href={"/"} target={"_blank"} rel={"noopener noreferrer"}>
                <img src={"img/logos/google-play.png"} alt="google play" />
              </a>
            </li>
          </AppList>
        </div>
      </FooterContainer>
    </FooterStyled>
  );
};

export default Footer;
