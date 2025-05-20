import "./style.css";

import { Avatar, InputBase, MenuItem, Pagination, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import React, { useMemo, useState } from "react";

const EnhancedReactTable = ({ data }) => {
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");

  const filteredData = useMemo(() => {
    return data.filter((row) =>
      row.name.toLowerCase().includes(search.toLowerCase()) &&
      (roleFilter === "All" || row.role === roleFilter)
    );
  }, [data, search, roleFilter]);

  return (
    <div className="enhanced-table-container">
      <Paper className="table-wrapper">
        <Typography variant="h5" className="title">Movimientos</Typography>

        <div className="controls">
          <InputBase
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />

          <Select className="filter-select" value={roleFilter} onChange={(e) => setRoleFilter(e.target.value)}>
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Admin">Admin</MenuItem>
            <MenuItem value="Member">Member</MenuItem>
            <MenuItem value="Owner">Owner</MenuItem>
          </Select>
        </div>

        <TableContainer component={Paper} className="custom-table-container">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>Role</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData.map((row, index) => (
                <TableRow key={index} className="table-row">
                  <TableCell><Avatar src={row.avatar} alt={row.name} /> {row.name}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.age}</TableCell>
                  <TableCell>{row.email}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Pagination className="pagination" count={Math.ceil(filteredData.length / 5)} color="primary" />
      </Paper>
    </div>
  );
};

export default EnhancedReactTable;
