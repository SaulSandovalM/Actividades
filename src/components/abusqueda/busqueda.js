import React, { useEffect, useState }  from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import './Abusqueda.css'
import firebase from '../../Firebase'
import { useParams } from 'react-router-dom'

function loadServerRows(page, data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data.slice(page * 5, (page + 1) * 5))
    });
  });
}

export default function ServerPaginationGrid() {
  let data = []

 const columnas = [
   { field: 'actividad', headerName: 'Nombre Actividad', width: 250 },
   { field: 'estados', headerName: 'Tipo de actividad', width: 250 },
   { field: 'convoca', headerName: 'Sub Actividad', width: 250 },
   { field: 'responsable', headerName: 'Direccion', width: 250 },
   { field: 'lugar', headerName: 'Lugar', width: 250 },
   { field: 'fechai', headerName: 'Fecha', width: 200 },
   { field: 'horai', headerName: 'Hora', width: 200 },
  ]

  const [page, setPage] = useState(0);
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPost, setCurrentPost] = useState({});

  useEffect(() => {
    (async () => {
        const db = firebase.firestore()
        // try {
        //     data = await db.collection('actividades').get()
        //     const arrayData = data.docs.map(doc => ({id: doc.id, ...doc.data()}))
        //     console.log(arrayData)
        //
        //   setLoading(true);
        //   console.log(data)
        //   const newRows = await loadServerRows(page, arrayData);
        //
        //   if (!active) {
        //     return;
        //   }
        //
        //   setRows(newRows);
        //   setLoading(false);
        //
        // } catch (error) {
        //     console.log(error)
        // }
    })()

   let active = true;

   return () => {
     active = false;
   };
 },[page]);

  return (
    <div style={{paddingLeft:'13.5%'}}>
    <h1>Busqueda</h1>

    <div style={{ height: 600, width: '100%', paddingRight:'10px', paddingTop:'10%' }}>

      <DataGrid
        rows={rows}
        columns={columnas}
        pagination
        pageSize={5}
        rowsPerPageOptions={[5]}
        paginationMode="server"
        onPageChange={(newPage) => setPage(newPage)}
        loading={loading}
      />

    </div>
    </div>
  );
}
