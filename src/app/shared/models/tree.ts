export class Tree {
    id: string;
    parentId?: string;
    name: string;
    url: string;
    children?: Tree[];
    isExpanded?: boolean;
}