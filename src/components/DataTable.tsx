import React, { useState } from 'react'
import Button from './Button'
import Modal from './Modal'
import { server_calls } from '../api/server';
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { useGetData } from '../custom-hooks/FetchData';

const columns: GridColDef[] = [
  { field: 'id', headerName: "ID", width: 90, hide: true },
  { field: 'name', headerName: "Sneaker Name", flex: 1 },
  { field: 'nickname', headerName: "Nickname", flex: 1},
  { field: 'date', headerName: "Release Date", flex: 1},
  { field: 'size', headerName: "Size", flex: 2}
]

function DataTable() {
  const [ open, setOpen ] = useState(false);
  const { sneakerData, getData } = useGetData();
  const [ selectionModel, setSelectionModel ] = useState<string[]>([])

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const deleteData = () => {
    server_calls.delete(selectionModel[0]);
    getData();
    console.log(`Selection model: ${selectionModel}`)
    setTimeout( () => { window.location.reload() }, 500)
  }

  return (
    <>
      <Modal 
        id={selectionModel}
        open={open}
        onClose={handleClose}
      />
      <h1 className='flex justify-center pt-14 mt-14 mb-14 text-7xl font-sans font-semibold'>Hey there!</h1>
      <div className='flex justify-center'>
        <div className={ open ? "hidden" : "container mx-10 my-5 flex flex-col"} 
          style={{ height: 400, width: '70%' }}
          >
            <h2 className="p-3 bg-stone-600 text-white pl-4 mt-12 rounded">Sneakers Available</h2>
            <DataGrid rows={sneakerData} columns={columns} rowsPerPageOptions={[5]} 
            checkboxSelection={true}
            onSelectionModelChange={ (item:any) => {
              setSelectionModel(item)
            }}
          />
        </div>
      </div>
      <div className="flex flex-row items-center justify-center p-10">
        <div>
          <button
            className="p-3 bg-slate-300 m-3 pl-12 pr-12 rounded hover:bg-slate-800 hover:text-white"
            onClick={() => handleOpen()}
          >
            Add Sneaker
          </button>
        </div>
        <Button onClick={handleOpen} className="p-3 bg-slate-300 m-3 pl-10 pr-10 rounded hover:bg-slate-800 hover:text-white">Update Sneaker</Button> 
        <Button onClick={deleteData} className="p-3 bg-slate-300 m-3 pl-10 pr-10 rounded hover:bg-slate-800 hover:text-white">Delete Sneaker</Button>
      </div>
    </>
  )
}

export default DataTable