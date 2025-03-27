import { Provider } from "@/src/components/ui/provider";
import { Inter } from "next/font/google";
const inter = Inter({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning className={inter.className}>
        <body>
        <Provider>
          <div style={{ width: "100%", backgroundColor: "#E9E9E9" }}>
            <div style={{padding: "20px"}}>
                {children}
            </div>
          </div>
        </Provider>
      </body>
    </html>
  );
}
