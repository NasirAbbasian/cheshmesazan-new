import "./globals.css";
import Sidebar from "@/components/sidebar";

export const metadata = {
  title: "چشمه سازان",
  description: "سامانه مدیریت جامع چشمه سازان",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body className={`antialiased`} >
        <div id="userContent" className="bg-pzinc w-full min-h-screen flex justify-center items-center p-5">
          <div className="bg-darkgray rounded-3xl p-5 flex w-full" style={{minHeight: "calc(100vh - 40px)"}}>
            {/* <Sidebar ></Sidebar> */}
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
