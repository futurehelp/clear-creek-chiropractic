import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title:'Clear Creek Chiropractic Center | More movement. More life.', description:'Personalized chiropractic and rehabilitation care in League City, Sharpstown, and Channelview.' };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
