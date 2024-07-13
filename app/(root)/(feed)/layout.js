
import "../../globals.css";
import { Inter } from "next/font/google";

import LeftSideBar from "@components/layout/LeftSideBar";
import MainContainer from "@components/layout/MainContainer";
import RightSideBar from "@components/layout/RightSideBar";
import BottomBar from "@components/layout/BottomBar";

export const metadata = {
  title: "Social-Home",
  description: "Next 14 Social Media App",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
      <html lang="en">
        <body className={inter.className}>
          <main className="flex flex-row">
            <LeftSideBar />
            <MainContainer>
              {children}
            </MainContainer>
            <RightSideBar />
          </main>
          <BottomBar />
        </body>
      </html>
  );
}