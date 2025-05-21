import "./style.css";

import {
  InputBase,
  Pagination,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useMemo, useState } from "react";

const ROWS_PER_PAGE = 5;

const EnhancedReactTable = ({ data }) => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  // Filtrado
  const filteredData = useMemo(() => {
    return data.filter((row) =>
      Object.values(row).some((value) =>
        value.toString().toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [data, search]);

  // Paginación
  const paginatedData = useMemo(() => {
    const start = (page - 1) * ROWS_PER_PAGE;
    return filteredData.slice(start, start + ROWS_PER_PAGE);
  }, [filteredData, page]);

  const totalPages = Math.ceil(filteredData.length / ROWS_PER_PAGE);

  return (
    <div className="enhanced-table-container">
      <Paper className="table-wrapper">
        <Typography variant="h5" className="title">
          Movimientos
        </Typography>

        <div className="controls">
          <InputBase
            placeholder="Buscar..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1); // reset page
            }}
            className="search-input"
          />
        </div>

        <TableContainer component={Paper} className="custom-table-container">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Fecha</TableCell>
                <TableCell>Remisión</TableCell>
                <TableCell>Factura</TableCell>
                <TableCell>Descripción</TableCell>
                <TableCell>Monto</TableCell>
                <TableCell>Comentario</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedData.map((row, index) => (
                <TableRow key={index} className="table-row">
                  <TableCell>{row.fecha}</TableCell>
                  <TableCell>{row.remision}</TableCell>
                  <TableCell>{row.factura}</TableCell>
                  <TableCell>{row.descripcion}</TableCell>
                  <TableCell>${row.monto.toFixed(2)}</TableCell>
                  <TableCell>{row.comentario}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Pagination
          className="pagination"
          count={totalPages}
          page={page}
          onChange={(_, value) => setPage(value)}
          color="primary"
        />
      </Paper>
    </div>
  );
};

export default EnhancedReactTable;
