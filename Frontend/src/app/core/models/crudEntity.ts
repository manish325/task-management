export interface ICrudEntity {
    id? : number,
    name : string | null,
    email: string | null,
    number : string | null,
    action? : ['edit', 'archive'],
}

export const mockData : ICrudEntity[] = [
    // {
    //     name : 'Sagar Kedari',
    //     email : 'sagarskedari31@gmail.com',
    //     number : '8668855975'
    // },
    // {
    //     name : 'Sagar Kedari',
    //     email : 'sagarskedari31@gmail.com',
    //     number : '8668855975'
    // },
    // {
    //     name : 'Sagar Kedari',
    //     email : 'sagarskedari31@gmail.com',
    //     number : '8668855975'
    // },
    // {
    //     name : 'Sagar Kedari',
    //     email : 'sagarskedari31@gmail.com',
    //     number : '8668855975'
    // },
    // {
    //     name : 'Sagar Kedari',
    //     email : 'sagarskedari31@gmail.com',
    //     number : '8668855975'
    // },
    // {
    //     name : 'Sagar Kedari',
    //     email : 'sagarskedari31@gmail.com',
    //     number : '8668855975'
    // },
    // {
    //     name : 'Sagar Kedari',
    //     email : 'sagarskedari31@gmail.com',
    //     number : '8668855975'
    // }
]