import Sidebar from '../../../components/ui/sidebar';

const ownerMenu = [
  { name: 'Incidencias', href: '/dashboard/owner/incidencias' },
  { name: 'Acceso a documentos', href: '/dashboard/owner/documentos' },
  { name: 'Registro de pagos', href: '/dashboard/owner/pagos' },
  { name: 'Reportes/Mantenimiento', href: '/dashboard/owner/reportes' },
  { name: 'Formulario de creación de propiedad', href: '/dashboard/owner/crear-propiedad' },
  { name: 'Estadísticas', href: '/dashboard/owner/estadisticas' },
  { name: 'Bandeja de entrada', href: '/dashboard/owner/chat' },
  { name: 'Notificaciones', href: '/dashboard/owner/notificaciones' },
];

export default function OwnerLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex min-h-screen">
      <Sidebar menuItems={ownerMenu} />
      <main className="flex-1 p-6 bg-gray-100">{children}</main>
    </section>
  );
}
