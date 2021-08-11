import { atom } from "jotai";

const sidebarData = atom([
    { name: 'Dashboard', icon: 'fa fa-home mr-1', link: '/user/dashboard/', isActive: true },
    { name: 'Cards', icon: 'fa fa-credit-card mr-1', link: '/user/dashboard/cards', isActive: false },
    { name: 'Loans', icon: 'fa fa-university mr-1', link: '/user/dashboard/loans', isActive: false },
    { name: 'Transactions', icon: 'fa fa-stack-exchange mr-1', link: '/user/dashboard/transactions', isActive: false },
    { name: 'settings', icon: 'fa fa-gear mr-1 ', link: '/user/dashboard/settings', isActive: false },
])

export default sidebarData