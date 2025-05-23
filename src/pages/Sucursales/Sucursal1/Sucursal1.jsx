import './Sucursal1.css';

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

import BarrelDiv from '../../../components/barril';
import CustomCard from '../../../components/card';
import Header from '../../../components/header';

function Sucursal1() {
  const tanks = [
    { name: "Biodisel", capacity: 10000, current: 6200 },
    { name: "Combustoleo", capacity: 8000, current: 4700 },
    { name: "Aceite crudo", capacity: 12000, current: 9800 },
    { name: "Aceite desh.", capacity: 6000, current: 3500 },
  ];

  return (
    <>
      <Header />
      <div className='mainContainer'>
        <div className='inContainer leftContainer'>
          {tanks.map((tank, index) => (
            <BarrelDiv key={index} product={`product${index + 1}`} tankName={tank.name} />
          ))}
        </div>
        <div className='inContainer rightContainer'>
          <div className='cardContainer'>
            <CustomCard>
              <h1 style={{ marginBottom: '1rem' }}>Tanque / Producto</h1>
              <TableContainer component={Paper} style={{ boxShadow: 'none' }}>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell><strong>Nombre</strong></TableCell>
                      <TableCell><strong>Capacidad Máx (L)</strong></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {tanks.map((tank, index) => (
                      <TableRow key={index}>
                        <TableCell>{tank.name}</TableCell>
                        <TableCell>{tank.capacity}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CustomCard>
          </div>
          <div className='cardContainer'>
            <CustomCard>
              <h1 style={{ marginBottom: '1rem' }}>Cant. Producto</h1>
              <TableContainer component={Paper} style={{ boxShadow: 'none' }}>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell><strong>Nombre</strong></TableCell>
                      <TableCell><strong>Actual (L)</strong></TableCell>
                      <TableCell><strong>%</strong></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {tanks.map((tank, index) => {
                      const percentage = ((tank.current / tank.capacity) * 100).toFixed(1);
                      return (
                        <TableRow key={index}>
                          <TableCell>{tank.name}</TableCell>
                          <TableCell>{tank.current}</TableCell>
                          <TableCell>{percentage}%</TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            </CustomCard>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sucursal1;
