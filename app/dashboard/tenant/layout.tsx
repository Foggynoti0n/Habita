import Sidebar from '../../../components/ui/sidebar';

const tenantMenu = [
  { name: 'Incidencias', href: '/dashboard/tenant/incidencias' },
  { name: 'Acceso a documentos', href: '/dashboard/tenant/documentos' },
  { name: 'Registro de pagos', href: '/dashboard/tenant/pagos' },
  { name: 'Reportes/Mantenimiento', href: '/dashboard/tenant/reportes' },
  { name: 'Bandeja de entrada', href: '/dashboard/tenant/chat' },
  { name: 'Notificaciones', href: '/dashboard/tenant/notificaciones' },
];

export default function TenantLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex min-h-screen">
      <Sidebar menuItems={tenantMenu} />
      <main className="flex-1 p-6 bg-gray-100">{children}</main>
    </section>
  );
}
