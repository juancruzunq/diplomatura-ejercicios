import React from 'react';
import { FiLogOut } from 'react-icons/fi'; 
import '../../styles/components/layout/logout.css'
function LogOut() {
  
  const handleLogOut = () => {
    // Aquí puedes implementar la lógica para cerrar sesión
    // Por ejemplo, hacer una solicitud al servidor para finalizar la sesión
  };

  return (
    <div className='logout-container'>      
    <FiLogOut className='logout-icon'  title="Cerrar sesión" />      
    </div>
  );
}

export default LogOut;
