export const metadata = {
  title: 'Admin Dashboard | Aktivacity',
  description: 'Manage website content',
}

export default function AdminLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  )
}
