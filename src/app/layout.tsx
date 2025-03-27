import { Provider } from "@/src/components/ui/provider";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
        <body>
        <Provider>
          <div style={{ width: "100%" }}>
             
              {children}
          </div>
        </Provider>
      </body>
    </html>
  );
}
