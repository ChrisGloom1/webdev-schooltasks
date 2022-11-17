import { useEffect, useState, createContext, ReactNode } from 'react';
import IOrderContext from '../interfaces/IOrderContext';
import IOrder from '../interfaces/IOrder';
import WarehouseService from '../services/WarehouseService';

export const OrderContext = createContext<IOrderContext | null>(null);

type Props = {
    children: ReactNode
}

const OrderProvider = ({children} : Props) => {
    return (
        <OrderContext.Provider value={{}}>
            {children}
        </OrderContext.Provider>        
    )
}

export default OrderProvider;