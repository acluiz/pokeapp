import { Table, TableBody, TableData, TableRow } from "@/components/ui/table";

export function InfosTable() {
  return (
    <Table className="mt-4 w-full rounded-xl border border-border-subtle bg-content-white overflow-hidden">
      <TableBody>
        <TableRow className="border-0 bg-transparent">
          <TableData className="text-sm text-content-label font-semibold px-4 py-3">
            Categoria
          </TableData>
          <TableData className="text-sm text-content-label px-4 py-3 text-right">
            Especial
          </TableData>
        </TableRow>

        <TableRow className="border-t border-border-subtle bg-transparent">
          <TableData className="text-sm text-content-label font-semibold px-4 py-3">
            Alvo
          </TableData>
          <TableData className="text-sm text-content-label px-4 py-3 text-right">
            Pokémon selecionado
          </TableData>
        </TableRow>

        <TableRow className="border-t border-border-subtle border-b-0 bg-transparent">
          <TableData className="text-sm text-content-label font-semibold px-4 py-3">
            Geração
          </TableData>
          <TableData className="text-sm text-content-label px-4 py-3 text-right">
            I
          </TableData>
        </TableRow>
      </TableBody>
    </Table>
  );
}
