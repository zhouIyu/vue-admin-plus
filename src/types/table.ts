export declare interface TableColumns {
    type?: 'selection' | 'index' | 'expand';
    label: string;
    prop?: string;
    width?: string | number;
    fixed?: true | 'left' | 'right';
}
