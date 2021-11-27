type DeliveryType = {
    name: string;
    phone: string;
    address: string;
    status: 'pending' | 'canceled' | 'success' | 'delivering';
    method: string;
};

export default DeliveryType;
