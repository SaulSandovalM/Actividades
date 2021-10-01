import React, { useEffect, useState }  from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import './Abusqueda.css'
import firebase from '../../Firebase'
import { useParams } from 'react-router-dom'

function loadServerRows(page, data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data.rows.slice(page * 5, (page + 1) * 5));
    }, Math.random() * 500 + 100); // simulate network latency
  });
}

export default function ServerPaginationGrid() {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 100,
    maxColumns: 6,
  });

  // const onCollectionUpdate = (querySnapshot) => {
  //     const actividades = []
  //     querySnapshot.forEach((doc) => {
  //       const { actividad, convoca, lugar, fechai, horai, estados, estatus, responsable, fecha, dependencia } = doc.data()
  //       actividades.push({
  //         key: doc.id,
  //         doc,
  //         actividad,
  //         convoca,
  //         lugar,
  //         fechai,
  //         horai,
  //         estados,
  //         estatus,
  //         responsable,
  //         fecha,
  //         dependencia
  //       })
  //       console.log(actividades)
  //     })
  //   }

 const columnas = [
   {field: 'actividad', headerName: 'Nombre Actividad', width:250},
   {field: 'estados', headerName:'Tipo de actividad', width:250},
   {field: 'convoca', headerName:'Sub Actividad', width:250},
   {field: 'responsable', headerName:'Direccion', width:250},
   {field: 'lugar', headerName:'Lugar', width:250},
   {field: 'fechai', headerName:'Fecha', width:200},
   {field: 'horai', headerName:'Hora', width:200},

  ]
  //const tabl = this.state.actividades.map(actividades => actividades)

  const [page, setPage] = useState(0);
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPost, setCurrentPost] = useState({});
  const [actividades, setActividades] = useState([])
  let { slug } = useParams();

  // React.useEffect(() => {
  //
  //   const fetchData = async() => {
  //     try {
  //       const response = await firebase.firestore().collection('actividades').onSnapshot(onCollectionUpdate)
  //       console.log('response', response);
  //       let data = { title: 'not found' };
  //       if (response.exists) {
  //         data = response.data();
  //       }
  //       setCurrentPost(data);
  //         console.log(data)
  //     } catch(err) {
  //       console.error(err);
  //     }
  //   };
  //   fetchData();
  //   let active = true;
  //   (async () => {
  //     setLoading(true);
  //     const newRows = await loadServerRows(page, data);
  //
  //     if (!active) {
  //       return;
  //     }
  //
  //     setRows(newRows);
  //     setLoading(false);
  //   })();

    return () => {
      active = false;
    };
  }, [page, data]);

  return (
    <div style={{paddingLeft:'13.5%'}}>
    <h1>Busqueda</h1>

    {/*<div style={{ height: 600, width: '100%', paddingRight:'10px', paddingTop:'10%' }}>

      <DataGrid
        rows={actividades}
        columns={columnas}
        pagination
        pageSize={10}
        rowsPerPageOptions={[10]}
        rowCount={100}
        paginationMode="server"
        onPageChange={(newPage) => setPage(newPage)}
        loading={loading}
      />

    </div>*/}
    </div>
  );
}
