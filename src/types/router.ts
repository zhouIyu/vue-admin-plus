import { RouteMeta } from 'vue-router';

export interface Meta extends RouteMeta {
    title?: string;
    icon?: string;
    hidden: boolean;
}
