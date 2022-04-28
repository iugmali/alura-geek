import Header from "./Header";
import Footer from "./Footer";
import React from "react";
import {Box, Image, Text} from "theme/components";

interface Props {
  children: React.ReactNode;
}
export default function DefaultPage({children}:Props) {
  return (
    <
      // @ts-ignore
      Box>
        <Header/>
        <
          // @ts-ignore
          Box>
          {children}
        </Box>
        <Footer/>
    </Box>
  );
}