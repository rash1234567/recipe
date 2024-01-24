interface user {
    id: number
    name: string
    email: string
    business: {
        id: number
        user: number
        industry: null
        company_size: number
        is_subscribed: boolean
    }
    is_active: boolean
    is_staff: boolean
    is_subscribed: boolean
    created_at: string
    updated_at: string
}

interface response {
    code: number
    message: string
    data: any
}

export interface Products {
    id: string;
    name: string;
    description: string;
    price: number;
    productCategoryId: number;
    rating: number;
    isAvailable: boolean;
    isInStock: boolean;
    quantity: number;
    category: string;
    staff: string;
    branch: string;
    createdBy: string;
    branchId: string;
    upload: string | null;
    options?: any[];
    quantityOrdered?: number;
}

export interface Category {
    id?: number | string
    title: string
    description: string
    upload: string | null
}

export interface Branch {
    id: number
    name: string
    address: string
    upload: string
    manager?: string
    managerId?: string
    longitude?: string
    latitude?: string
    isActive?: boolean
}

export type onSuccess = (data: any) => void
export type onError = (error: any) => void