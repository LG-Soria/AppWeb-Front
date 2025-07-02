import { Card } from "@/frontend-resourses/components/Cards/CardBase";
import { crearExportConfig } from "@/utils/helpers/botonera";
import BotoneraDefault from "../../../_components/BotoneraDefault";
import { ventasCreditoData } from "../Data/Data";
import { useVentasCreditoPorCliente } from "../Store/Store";

interface BotoneraProps {
  className?: string;
  datosParaFooter?: Record<string, any>; 
  disabled?: boolean;
  handleClean?: () => void; 
}

export default function BotoneraPrincipal({ className, handleClean }: BotoneraProps) {
  const { id, estaProcesado } = useVentasCreditoPorCliente();
  const exportConfig = crearExportConfig("informe_ventas_credito_clientes", "Informe Ventas de Crédito por Clientes", ventasCreditoData);
  return (
    <Card className={`${className}  col-start-12 row-start-1 self-center v1536:col-start-12  `}>
      <BotoneraDefault exportConfig={exportConfig} containerId={id} disabled={!estaProcesado} handleClean={handleClean} />
    </Card>
  );
}
