// utils/types.ts

export interface Book {
    id: string;
    title: string;
    description: string;
    price: number;
    image: string; // URI string
    /** UNIX epoch (ms) เมื่อสร้างหนังสือ (เพิ่มภายหลัง – อาจไม่มีในข้อมูลเก่า) */
    createdAt?: number;
}

