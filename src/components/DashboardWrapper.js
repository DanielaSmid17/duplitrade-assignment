import React, {useState, useEffect } from 'react'
import Dashboard from './Dashboard';
import MobileDashboard from './MobileDashboard';

export default function DashboardWrapper() {

    const [selectedRow, setSelectedRow] = useState(null);
    const [isSelectedRowTraded, setisSelectedRowTraded] = useState(false);
    const [width, setWidth] = useState(parseInt(window.innerWidth));

        function handleWindowSizeChange() {
            setWidth(window.innerWidth);
        }
useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
    }
}, []);

const isMobile = width <= 768;
  return (
    isMobile ? 
    <MobileDashboard isMobile={isMobile} selectedRow={selectedRow} setSelectedRow={setSelectedRow} isSelectedRowTraded={isSelectedRowTraded} setisSelectedRowTraded={setisSelectedRowTraded}  /> 
    : <Dashboard selectedRow={selectedRow} setSelectedRow={setSelectedRow} isSelectedRowTraded={isSelectedRowTraded} setisSelectedRowTraded={setisSelectedRowTraded} />
  )
}
