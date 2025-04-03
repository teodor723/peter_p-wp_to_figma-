import {Table} from "react-bootstrap";

// @ts-ignore
function ResponsiveTable({tableData}) {
    return <Table bordered hover variant="light"
                  className="text-arial d-block d-lg-table responsive-table text-center text-14 text-inter">
        <thead className="d-none d-lg-table-header-group">
        <tr>
            {tableData.cols.map((col: any, index: number) => {
                return <th key={index}>{col}</th>
            })}
        </tr>
        </thead>
        <tbody className="text-14 text-inter">
        {tableData.rows.map((row: Array<any>, rowIndex: number) => {
            return <tr key={rowIndex}>
                {row.map((cell: any, cellIndex: number) => {
                    return <td data-label={tableData.cols[cellIndex]}
                               key={cellIndex}>{cell}</td>
                })}
            </tr>
        })}
        </tbody>
    </Table>
}

export default ResponsiveTable;