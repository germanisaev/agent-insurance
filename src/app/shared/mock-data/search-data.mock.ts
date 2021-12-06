import { SearchResponse } from '../models/search.model';


export class SearchDataMock {
    public values: SearchResponse[] = [
        {
            id: 'c56c9daf-2ae4-422f-94b2-4472b9b71e5d',
            DepartmentName: 'Treasury',
            url: 'http:rest.your-api-domain/api/c56c9daf-2ae4-422f-94b2-4472b9b71e5d',
            menuId: 'c56c9daf-2ae4-422f-94b2-4472b9b71e5d',
            parentId: null,
        },
        {
            id: 'c56c9daf-2ae4-422f-94b2-4472b9b71e5d-1',
            DepartmentName: 'Justice',
            url: 'http:rest.your-api-domain/api/c56c9daf-2ae4-422f-94b2-4472b9b71e5d-1',
            menuId: 'c56c9daf-2ae4-422f-94b2-4472b9b71e5d-1',
            parentId: '1d8f0e9b-e187-e911-80e2-000c29dc2aac',
        },
        {
            id: 'c56c9daf-2ae4-422f-94b2-4472b9b71e5d-2',
            DepartmentName: 'Defense',
            url: 'http:rest.your-api-domain/api/c56c9daf-2ae4-422f-94b2-4472b9b71e5d-2',
            menuId: 'c56c9daf-2ae4-422f-94b2-4472b9b71e5d-2',
            parentId: '1d8f0e9b-e187-e911-80e2-000c29dc2aac',
        },
        {

            id: 'c56c9daf-2ae4-422f-94b2-4472b9b71e5d-3',
            DepartmentName: 'Interior',
            url: 'http:rest.your-api-domain/api/c56c9daf-2ae4-422f-94b2-4472b9b71e5d-3',
            menuId: 'c56c9daf-2ae4-422f-94b2-4472b9b71e5d-3',
            parentId: 'c56c9daf-2ae4-422f-94b2-4472b9b71e5d-2',
        },
        {

            id: 'c56c9daf-2ae4-422f-94b2-4472b9b71e5d-4',
            DepartmentName: 'Agriculture',
            url: 'http:rest.your-api-domain/api/c56c9daf-2ae4-422f-94b2-4472b9b71e5d-4',
            menuId: 'c56c9daf-2ae4-422f-94b2-4472b9b71e5d-4',
            parentId: 'c56c9daf-2ae4-422f-94b2-4472b9b71e5d-2',
        },
        {
            id: 'c56c9daf-2ae4-422f-94b2-4472b9b71e5d-5',
            DepartmentName: 'Commerce',
            url: 'http:rest.your-api-domain/api/c56c9daf-2ae4-422f-94b2-4472b9b71e5d-5',
            menuId: 'c56c9daf-2ae4-422f-94b2-4472b9b71e5d-5',
            parentId: null,
        },
        {
            id: 'c56c9daf-2ae4-422f-94b2-4472b9b71e5d-6',
            DepartmentName: 'Labor',
            url: 'http:rest.your-api-domain/api/c56c9daf-2ae4-422f-94b2-4472b9b71e5d-6',
            menuId: 'c56c9daf-2ae4-422f-94b2-4472b9b71e5d-6',
            parentId: null,
        },
        {
            id: 'c56c9daf-2ae4-422f-94b2-4472b9b71e5d-7',
            DepartmentName: 'Transportation',
            url: 'http:rest.your-api-domain/api/c56c9daf-2ae4-422f-94b2-4472b9b71e5d-7',
            menuId: 'c56c9daf-2ae4-422f-94b2-4472b9b71e5d-7',
            parentId: 'c56c9daf-2ae4-422f-94b2-4472b9b71e5d-6',
        },
        {
            id: 'c56c9daf-2ae4-422f-94b2-4472b9b71e5d-8',
            DepartmentName: 'Energy',
            url: 'http:rest.your-api-domain/api/c56c9daf-2ae4-422f-94b2-4472b9b71e5d-8',
            menuId: 'c56c9daf-2ae4-422f-94b2-4472b9b71e5d-8',
            parentId: null,
        },
        {
            id: 'c56c9daf-2ae4-422f-94b2-4472b9b71e5d-9',
            DepartmentName: 'Education',
            url: 'http:rest.your-api-domain/api/c56c9daf-2ae4-422f-94b2-4472b9b71e5d-9',
            menuId: 'c56c9daf-2ae4-422f-94b2-4472b9b71e5d-9',
            parentId: 'c56c9daf-2ae4-422f-94b2-4472b9b71e5d-8',
        },
        {
            id: 'c56c9daf-2ae4-422f-94b2-4472b9b71e5d-10',
            DepartmentName: 'Veterans Affairs',
            url: 'http:rest.your-api-domain/api/c56c9daf-2ae4-422f-94b2-4472b9b71e5d-10',
            menuId: 'c56c9daf-2ae4-422f-94b2-4472b9b71e5d-10',
            parentId: 'c56c9daf-2ae4-422f-94b2-4472b9b71e5d-8',
        },
        {
            id: 'c56c9daf-2ae4-422f-94b2-4472b9b71e5d-11',
            DepartmentName: 'Homeland Security',
            url: 'http:rest.your-api-domain/api/c56c9daf-2ae4-422f-94b2-4472b9b71e5d-11',
            menuId: 'c56c9daf-2ae4-422f-94b2-4472b9b71e5d-11',
            parentId: 'c56c9daf-2ae4-422f-94b2-4472b9b71e5d-8',
        },
        {
            id: 'c56c9daf-2ae4-422f-94b2-4472b9b71e5d-12',
            DepartmentName: 'State',
            url: 'http:rest.your-api-domain/api/c56c9daf-2ae4-422f-94b2-4472b9b71e5d-12',
            menuId: 'c56c9daf-2ae4-422f-94b2-4472b9b71e5d-12',
            parentId: 'c56c9daf-2ae4-422f-94b2-4472b9b71e5d-8',
        }
    ];
}
