type PaypalOrder = {
    purchase_units: {
        reference_id: string;
        description: string;
        amount: {
            currency_code: "USD";
            value: number;
            breakdown: {
                item_total: {
                    currency_code: "USD";
                    value: number;
                };
                shipping: {
                    currency_code: "USD";
                    value: number;
                };
                tax_total: {
                    currency_code: "USD";
                    value: number;
                };
                discount?: {
                    currency_code: "USD";
                    value: number;
                };
            };
        };
        items: {
            name: string;
            unit_amount: {
                currency_code: "USD";
                value: number;
            };
            tax?: {
                currency_code: "USD";
                value: number;
            };
            quantity: number;
            sku: string;
            category?: string;
        }[];
    }[];
};

export default PaypalOrder;
