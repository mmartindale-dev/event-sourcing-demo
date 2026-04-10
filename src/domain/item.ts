export type Item = {
    id: string, // UUID
    label: string, // user-assigned label
    delivered: boolean,
    unpacked: boolean,
    placed: boolean,
    createdAt: string // ISO timestamp
    location?: {
        room: string; // room item is placed in
        shelf: boolean; // true = on a shelf, false = on the floor
    };
}