// // components/Graph.js
// import React, { useEffect, useState } from 'react';
// import Plot from 'react-plotly.js';

// const Graph = () => {
//     const [matrix, setMatrix] = useState([]);

//     useEffect(() => {
//         const fetchMatrixData = async () => {
//             try {
//                 const response = await fetch('http://localhost:8080/matrix');
//                 const data = await response.json();
//                 setMatrix(data);
//             } catch (error) {
//                 console.error('Error fetching matrix data:', error);
//             }
//         };

//         fetchMatrixData();
//     }, []);

//     const graphData = matrix.map((row, rowIndex) => ({
//         type: 'scatter',
//         mode: 'lines',
//         name: `Row ${rowIndex + 1}`,
//         x: Array.from({ length: 5000 }, (_, i) => i + 1),
//         y: row,
//     }));

//     return (
//         <Plot
//             data={graphData}
//             layout={{
//                 width: '100%',
//                 height: '100%',
//                 title: 'Matrix Graph',
//                 xaxis: { title: 'Column Index' },
//                 yaxis: { title: 'Value' },
//             }}
//         />
//     );
// };

// export default Graph;


// components/Graph.js
import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';

const Graph = () => {
    const [matrix, setMatrix] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const pointsPerPage = 50;  // Adjust the number of points per page as needed

    useEffect(() => {
        const fetchMatrixData = async () => {
            try {
                const response = await fetch('http://localhost:8080/matrix');
                const data = await response.json();
                setMatrix(data);
            } catch (error) {
                console.error('Error fetching matrix data:', error);
            }
        };

        fetchMatrixData();
    }, []);

    const defectsColor = 'red';  // Color for marking defects

    const getPageData = () => {
        const startIndex = currentPage * pointsPerPage;
        const endIndex = (currentPage + 1) * pointsPerPage;

        // Add checks to ensure matrix and matrix[0] are defined
        if (!matrix || matrix.length === 0 || !matrix[0]) {
            console.error('Matrix is empty or has no data.');
            return [];
        }

        const totalPages = Math.ceil(matrix[0].length / pointsPerPage);

        return matrix.map((row, rowIndex) => ({
            type: 'scatter',
            mode: 'markers',
            name: `Row ${rowIndex + 1}`,
            x: Array.from({ length: pointsPerPage }, (_, i) => i + startIndex + 1),
            y: row.slice(startIndex, endIndex),
            marker: {
                color: row.slice(startIndex, endIndex).map(value => (value > 0 ? defectsColor : 'gray')),
                size: 8,  // Adjust the size of the markers
            },
        }));
    };

    const handlePageChange = (increment) => {
        const nextPage = currentPage + increment;

        // Add checks to ensure matrix and matrix[0] are defined
        if (!matrix || matrix.length === 0 || !matrix[0]) {
            console.error('Matrix is empty or has no data.');
            return;
        }

        const totalPages = Math.ceil(matrix[0].length / pointsPerPage);

        if (nextPage >= 0 && nextPage < totalPages) {
            setCurrentPage(nextPage);
        }
    };

    return (
        <div>
            <Plot
                data={getPageData()}
                layout={{
                    width: '100%',
                    height: '100%',
                    title: `Matrix Graph - Page ${currentPage + 1}/${Math.ceil(matrix[0]?.length / pointsPerPage)}`,
                    xaxis: { title: 'Pipeline Length (km)' },
                    yaxis: { title: 'Defects' },
                }}
            />
            <div style={{ textAlign: 'center', marginTop: '10px' }}>
                <button onClick={() => handlePageChange(-1)}>Previous</button>
                <button onClick={() => handlePageChange(1)}>Next</button>
            </div>
        </div>
    );
};

export default Graph;
