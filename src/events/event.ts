export type ItemCreated = {
    type: "ItemCreated";
    id: string;
    label: string;
    createdAt: string; // item creation time ISO
    timestamp: string; // event time ISO
}

export type ItemDelivered = {
    type: "ItemDelivered";
    id: string;
    timestamp: string; // event time ISO
}

export type ItemUnpacked = {
    type: "ItemUnpacked";
    id: string;
    timestamp: string; // event time ISO
}

export type ItemPlaced = {
    type: "ItemPlaced";
    id: string;
    timestamp: string; // event time ISO
}

export type ItemMoved = {
    type: "ItemMoved";
    id: string;
    timestamp: string; // event time ISO
}

export type ItemArchived = {
    type: "ItemArchived";
    id: string;
    timestamp: string; // event time ISO
}