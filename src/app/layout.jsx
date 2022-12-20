import "../styles/globals.css";
import Header from '../components/Header';

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        <Header />
        <main className='max-w-5xl mx-auto'>
          {children}
        </main>
      </body>
    </html>
  );
}
