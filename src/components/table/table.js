import { useMemo } from 'react';
import { useTable } from 'react-table';
import { COLUMNS } from './column';
import './table.css'

function Table(){
    const columns = useMemo(()=>COLUMNS,[]);
    const data = useMemo(()=>JSON.parse(localStorage.getItem('feedback')),[]);
    
    const tableIns = useTable({columns,data});
   
    const {
            getTableProps,
            getTableBodyProps,
            headerGroups,
            rows,
            prepareRow} = tableIns;
    
    
    return (<>
    
            <table {...getTableProps()}>
                <thead >
                    
                    {headerGroups.map((headerG)=>
                        <tr {...headerG.getHeaderGroupProps()}>
                            {
                                headerG.headers.map(col=>
                                    <th {...col.getHeaderProps()}>{col.render('Header')}</th>)
                                }
                        </tr>
                    )}
                    
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row)
                    return <tr {...row.getRowProps()}>
                        {   row.cells.map(cell => <td {...cell.getCellProps()}>{cell.render('Cell')}</td>)       }
                    </tr>}) }
                </tbody>
            </table>

    </>)
}

export default Table;