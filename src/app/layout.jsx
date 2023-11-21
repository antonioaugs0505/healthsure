
import './globals.css'




export const metadata = {
  title: 'HealthSure',
  description: 'Entrega da GS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {children}
        </body>
    </html>
  )
}
