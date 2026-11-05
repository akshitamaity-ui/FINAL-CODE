import './globals.css';

export const metadata = {
  title: 'Section 138 Court Trajectories | Legal Systems Map',
  description: 'Interactive Causal Loop Map for Cheque Bounce Court Bottlenecks',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
