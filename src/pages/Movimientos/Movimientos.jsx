import './Movimientos.css';

import BarrelDiv from '../../components/barril';
import EnhancedReactTable from '../../components/table';
import Header from '../../components/header';
import LoginCard from '../../components/loginCard';

function Movimientos() {

  const data = [
    {
      fecha: "2024-05-01",
      remision: "RM-001",
      factura: "F-1001",
      descripcion: "Compra de gasolina magna",
      monto: 15200.50,
      comentario: "Pago en efectivo"
    },
    {
      fecha: "2024-05-02",
      remision: "RM-002",
      factura: "F-1002",
      descripcion: "Compra de gasolina premium",
      monto: 18340.75,
      comentario: "Transferencia bancaria"
    },
    {
      fecha: "2024-05-03",
      remision: "RM-003",
      factura: "F-1003",
      descripcion: "Compra de diésel",
      monto: 21350.00,
      comentario: "Pago a crédito"
    },
    {
      fecha: "2024-05-04",
      remision: "RM-004",
      factura: "F-1004",
      descripcion: "Reembolso proveedor",
      monto: -1200.00,
      comentario: "Devolución parcial"
    },
    {
      fecha: "2024-05-05",
      remision: "RM-005",
      factura: "F-1005",
      descripcion: "Compra de lubricantes",
      monto: 5400.00,
      comentario: "Pago con tarjeta"
    },
    {
      fecha: "2024-05-06",
      remision: "RM-006",
      factura: "F-1006",
      descripcion: "Compra de gasolina magna",
      monto: 16200.75,
      comentario: "Transferencia"
    },
    {
      fecha: "2024-05-07",
      remision: "RM-007",
      factura: "F-1007",
      descripcion: "Compra de diésel",
      monto: 20450.25,
      comentario: "Pago en efectivo"
    },
    {
      fecha: "2024-05-08",
      remision: "RM-008",
      factura: "F-1008",
      descripcion: "Compra de gasolina premium",
      monto: 18900.00,
      comentario: "Pago a crédito"
    },
    {
      fecha: "2024-05-09",
      remision: "RM-009",
      factura: "F-1009",
      descripcion: "Compra de aceites",
      monto: 7200.90,
      comentario: "Contado"
    },
    {
      fecha: "2024-05-10",
      remision: "RM-010",
      factura: "F-1010",
      descripcion: "Reembolso proveedor",
      monto: -800.00,
      comentario: "Descuento aplicado"
    },
    {
      fecha: "2024-05-11",
      remision: "RM-011",
      factura: "F-1011",
      descripcion: "Compra de gasolina magna",
      monto: 15800.30,
      comentario: "Transferencia SPEI"
    },
    {
      fecha: "2024-05-12",
      remision: "RM-012",
      factura: "F-1012",
      descripcion: "Compra de gasolina premium",
      monto: 17500.00,
      comentario: "Tarjeta empresa"
    },
    {
      fecha: "2024-05-13",
      remision: "RM-013",
      factura: "F-1013",
      descripcion: "Compra de diésel",
      monto: 21800.00,
      comentario: "Transferencia"
    },
    {
      fecha: "2024-05-14",
      remision: "RM-014",
      factura: "F-1014",
      descripcion: "Mantenimiento de bombas",
      monto: 8500.00,
      comentario: "Proveedor externo"
    },
    {
      fecha: "2024-05-15",
      remision: "RM-015",
      factura: "F-1015",
      descripcion: "Compra de gasolina magna",
      monto: 16400.00,
      comentario: "Pago anticipado"
    },
    {
      fecha: "2024-05-16",
      remision: "RM-016",
      factura: "F-1016",
      descripcion: "Compra de gasolina premium",
      monto: 18600.00,
      comentario: "Pago en línea"
    },
    {
      fecha: "2024-05-17",
      remision: "RM-017",
      factura: "F-1017",
      descripcion: "Compra de diésel",
      monto: 20900.00,
      comentario: "Crédito a 30 días"
    },
    {
      fecha: "2024-05-18",
      remision: "RM-018",
      factura: "F-1018",
      descripcion: "Compra de aceites",
      monto: 7400.00,
      comentario: "Contado"
    },
    {
      fecha: "2024-05-19",
      remision: "RM-019",
      factura: "F-1019",
      descripcion: "Compra de lubricantes",
      monto: 5600.00,
      comentario: "Transferencia inmediata"
    },
    {
      fecha: "2024-05-20",
      remision: "RM-020",
      factura: "F-1020",
      descripcion: "Reembolso proveedor",
      monto: -1000.00,
      comentario: "Reverso parcial"
    }
  ];


  return (<>
    <Header />
    <div className="movimientos-container">
      <EnhancedReactTable data={data} />
    </div>
  </>
  );
}

export default Movimientos;